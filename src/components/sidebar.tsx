import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SideBarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const SideBarData = [
  { label: "Aprender", href: "/learn", iconSrc: "/learn.svg" },
  { label: "Posiciones", href: "/leaderboard", iconSrc: "/leaderboard.svg" },
  { label: "Misiones", href: "/quests", iconSrc: "/quests.svg" },
  { label: "Tienda", href: "/shop", iconSrc: "/shop.svg" },
  { label: "Chat", href: "/chat", iconSrc: "/chat.svg" },
];

export const SideBar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `left-0  top-0 flex h-full
         flex-col border-r-2  px-4 lg:fixed lg:w-[256px]`,
        className,
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/edutechlogo.webp" alt="Mascot" height={40} width={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
            Edutech
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        {SideBarData.map((item) => (
          <SideBarItem
            key={item.href}
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
