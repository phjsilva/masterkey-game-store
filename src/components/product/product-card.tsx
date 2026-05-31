import Image from "next/image";
import Link from "next/link";
import { calculateFinalPrice } from "@/lib/formatters";
import type { Game } from "@/types/game";
import { PriceBlock } from "./price-block";

interface ProductCardProps {
  game: Game;
}

export function ProductCard({ game }: ProductCardProps) {
  const finalPrice = calculateFinalPrice(game.price, game.desconto);

  return (
    <Link
      href={`/produto/${game.id}`}
      className="group block h-full overflow-hidden rounded-lg bg-slate-900 text-white shadow-sm ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-lime-400/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
        <Image
          src={game.rawgImageUrl || "/assets/2.jpg"}
          alt={game.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-28 flex-col justify-between gap-4 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold">{game.name}</h3>
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
