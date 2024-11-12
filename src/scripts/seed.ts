import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Poblando la base de datos");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    // Insertar los cursos de programación
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Javascript",
        imageSrc: "/js.webp",
      },
      {
        id: 2,
        title: "Java",
        imageSrc: "/java.png",
      },
      {
        id: 3,
        title: "TypeScript",
        imageSrc: "/type.svg.png",
      },
      {
        id: 4,
        title: "Python",
        imageSrc: "/python.svg.webp",
      },
    ]);

    // Insertar unidades del curso de Javascript
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Javascript
        title: "Unidad 1",
        description: "Aprende los conceptos básicos de Javascript",
        order: 1,
      },
    ]);

    // Insertar lecciones de la unidad
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unidad 1
        order: 1,
        title: "Variables",
      },
      {
        id: 2,
        unitId: 1, // Unidad 1
        order: 2,
        title: "Funciones",
      },
      {
        id: 3,
        unitId: 1, // Unidad 1
        order: 3,
        title: "Condicionales",
      },
      {
        id: 4,
        unitId: 1, // Unidad 1
        order: 4,
        title: "Bucles",
      },
    ]);

    // Insertar desafíos de la lección de Variables
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Variables
        type: "SELECT",
        order: 1,
        question: '¿Cuál de estas es una variable en Javascript?',
      },
      {
        id: 2,
        lessonId: 1, // Variables
        type: "ASSIST",
        order: 2,
        question: '"var nombre"',
      },
      {
        id: 3,
        lessonId: 1, // Variables
        type: "SELECT",
        order: 3,
        question: '¿Cómo defines una constante en Javascript?',
      },
    ]);

    // Insertar opciones de desafío
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // ¿Cuál de estas es una variable en Javascript?
        correct: true,
        text: "let edad = 25;",
        audioSrc: "/js_variable.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        text: "def edad = 25;",
        audioSrc: "/python_variable.mp3",
      },
      {
        challengeId: 1,
        correct: false,
        text: "int edad = 25;",
        audioSrc: "/java_variable.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // "var nombre"
        correct: true,
        text: "var nombre",
        audioSrc: "/js_var.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "const nombre",
        audioSrc: "/js_const.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // ¿Cómo defines una constante en Javascript?
        correct: true,
        text: "const edad = 25;",
        audioSrc: "/js_const.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "var edad = 25;",
        audioSrc: "/js_var.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "let edad = 25;",
        audioSrc: "/js_let.mp3",
      },
    ]);

    // Insertar desafíos para la lección de Funciones
    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, // Funciones
        type: "SELECT",
        order: 1,
        question: '¿Cómo defines una función en Javascript?',
      },
      {
        id: 5,
        lessonId: 2, // Funciones
        type: "ASSIST",
        order: 2,
        question: '"function suma(a, b)"',
      },
      {
        id: 6,
        lessonId: 2, // Funciones
        type: "SELECT",
        order: 3,
        question: '¿Cuál es el valor de retorno de la función "suma(2, 3)"?',
      },
    ]);

    console.log("Población de base de datos finalizada");
  } catch (error) {
    console.error(error);
    throw new Error("Error al poblar la base de datos");
  }
};

main();
