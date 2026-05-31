import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/formatters";
import type { Game } from "@/types/game";

interface FeaturedCardProps {
  game: Game;
}

export function FeaturedCard({ game }: FeaturedCardProps) {
  const image = game.giantbombImageUrl || game.rawgImageUrl || "/assets/2.jpg";

  return (
    <Link
      href={`/produto/${game.id}`}
      className="group relative block h-[26rem] overflow-hidden rounded-lg bg-slate-900 text-white ring-1 ring-white/10"
    >
      <Image
        src={image}
        alt={game.name}
        fill
        priority
        sizes="100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
            Agora disponível
          </p>
          <h2 className="mt-2 max-w-3xl text-2xl font-bold sm:text-4xl">
            {game.name}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xl font-bold">
            {formatCurrency(Number(game.finalPrice) || game.price)}
          </span>
          <span className="inline-flex items-center gap-2 rounded bg-lime-500 px-4 py-3 text-sm font-bold text-slate-950">
            <ShoppingCart size={18} />
            Carrinho
          </span>
        </div>
      </div>
    </Link>
  );
}
