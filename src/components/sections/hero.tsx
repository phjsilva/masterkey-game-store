import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatters";

export function Hero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden">
      <Image
        src="/assets/2.jpg"
        alt="Arte promocional do jogo Frostpunk 2"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-black/20" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8 lg:px-10">
        <Image
          src="/assets/Frostpunk2.webp"
          alt="Frostpunk 2"
          width={520}
          height={180}
          className="mb-6 h-auto w-full max-w-md"
        />
        <p className="max-w-xl text-lg text-slate-200">
          Compre agora e ganhe um jogo de graça em uma seleção especial para PC.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <strong className="text-2xl">{formatCurrency(119.99)}</strong>
          <button className="inline-flex items-center gap-2 rounded bg-lime-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-lime-400">
            <ShoppingCart size={20} />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </section>
  );
}
