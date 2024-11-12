"use client";

import { refilHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ hearts, hasActiveSubscription, points }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefilHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refilHearts().catch((_) => toast.error("Algo salió mal"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch((_) => toast.error("Algo salió mal"));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex w-full items-center gap-x-4 border-t-2 p-4">
        <Image src="/heart.svg" alt="corazón" width={60} height={60} />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Reabastecer corazones
          </p>
        </div>
        <Button
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
          onClick={onRefilHearts}
        >
          {hearts === 5 ? (
            "lleno"
          ) : (
            <div className="flex items-center">
              <Image src="/points.svg" alt="Puntos" height={20} width={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
        <Image src="/unlimited.svg" alt="ilimitado" height={60} width={60} />
        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Corazones Ilimitados
          </p>
        </div>
        <Button disabled={pending} onClick={onUpgrade}>
          {hasActiveSubscription ? "configuración" : "Mejorar"}
        </Button>
      </div>
    </ul>
  );
};
