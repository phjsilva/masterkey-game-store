import Image from "next/image";
import Link from "next/link";
import { calculateFinalPrice } from "@/lib/formatters";
import type { Game } from "@/types/game";
import { PriceBlock } from "./price-block";

interface ProductListItemProps {
  game: Game;
}

export function ProductListItem({ game }: ProductListItemProps) {
  const finalPrice = calculateFinalPrice(game.price, game.desconto);

  return (
    <Link
      href={`/produto/${game.id}`}
      className="group grid grid-cols-[112px_1fr] overflow-hidden rounded-lg bg-slate-900 text-white ring-1 ring-white/10 transition hover:ring-lime-400/60 sm:grid-cols-[160px_1fr]"
    >
      <div className="relative h-28 bg-slate-800 sm:h-36">
        <Image
          src={game.rawgImageUrl || "/assets/2.jpg"}
          alt={game.name}
          fill
          sizes="160px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between p-4">
        <h3 className="line-clamp-2 text-sm font-semibold sm:text-base">
          {game.name}
        </h3>
        <div className="flex justify-end">
          <PriceBlock
            price={game.price}
            discount={game.desconto}
            finalPrice={finalPrice}
            compact
          />
        </div>
      </div>
    </Link>
  );
}
