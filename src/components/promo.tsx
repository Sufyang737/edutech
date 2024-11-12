import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Promo = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="/unlimited.svg" alt="Pro" height={26} width={26} />
          <h3 className="text-lg font-bold">Sé un estudiante pro</h3>
        </div>
        <p className="text-muted-foreground">¡Obtén corazones ilimitados y más!</p>
      </div>
      <Button variant="super" className="w-full" size="lg" asChild>
        <Link href="/shop">Mejora hoy</Link>
      </Button>
    </div>
  );
};

