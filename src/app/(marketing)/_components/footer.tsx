import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/java.png"
            alt="Java"
            height={32}
            width={40}
            className="mr-4 rounded-md"
            style={{ width: "auto" }}
          />
          Java
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/js.webp"
            alt="Javascript"
            height={32}
            width={40}
            className="mr-4 rounded-md"
            style={{ width: "auto" }}
          />
          Javascript
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/type.svg.png"
            alt="TypeScript"
            height={32}
            width={40}
            className="mr-4 rounded-md"
            style={{ width: "auto" }}
          />
          TypeScript
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/python.svg.webp"
            alt="Python"
            height={32}
            width={40}
            className="mr-4 rounded-md"
            style={{ width: "auto" }}
          />
          Python
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/ruby.png"
            alt="Ruby"
            height={32}
            width={40}
            className="mr-4 rounded-md"
            style={{ width: "auto" }}
          />
          Ruby
        </Button>
      </div>
    </footer>
  );
};
