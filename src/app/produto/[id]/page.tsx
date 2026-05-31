import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PriceBlock } from "@/components/product/price-block";
import { calculateFinalPrice, formatDate } from "@/lib/formatters";
import { getGameDetails } from "@/lib/api";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const game = await getGameDetails(params.id).catch(() => null);

  if (!game) {
    notFound();
  }

  const image = game.rawgImageUrl || game.giantbombImageUrl || "/assets/2.jpg";
  const finalPrice = calculateFinalPrice(game.price, game.desconto);
  const details = [
    { label: "Gênero", value: game.genre?.join(", ") },
    { label: "Plataforma", value: game.plataforma?.join(", ") },
    { label: "Lançamento", value: formatDate(game.lancamento) },
    { label: "Empresa", value: game.empresa },
    { label: "Tamanho", value: game.size ? `${game.size} GB` : undefined },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative min-h-[620px] overflow-hidden pt-16">
        <Image
          src={image}
          alt={game.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/30" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-5 pb-14 sm:px-8 lg:px-10">
          <div className="grid w-full gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
                Jogo digital
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl font-bold sm:text-6xl">
                {game.name}
              </h1>
              {game.title ? (
                <p className="mt-4 max-w-2xl text-lg text-slate-200">
                  {game.title}
                </p>
              ) : null}
            </div>

            <aside className="rounded-lg bg-slate-900/95 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur">
              <div className="flex justify-end">
                <PriceBlock
                  price={game.price}
                  discount={game.desconto}
                  finalPrice={finalPrice}
                />
              </div>
              <div className="mt-5 grid gap-3">
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded bg-lime-500 px-5 font-bold text-slate-950 transition hover:bg-lime-400">
                  <ShoppingCart size={20} />
                  Adicionar ao carrinho
                </button>
                <button className="h-12 rounded bg-white/10 px-5 font-bold text-white transition hover:bg-white/15">
                  Comprar agora
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <article className="rounded-lg bg-slate-900 p-6 ring-1 ring-white/10">
          <h2 className="text-2xl font-bold">Descrição</h2>
          {game.description ? (
            <p className="mt-5 leading-7 text-slate-300">{game.description}</p>
          ) : null}

          {game.highlights?.length ? (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                {game.highlightsTitle || "Destaques"}
              </h3>
              <ul className="mt-4 grid gap-4">
                {game.highlights.map((highlight) => (
                  <li key={highlight.title} className="text-slate-300">
                    <strong className="text-white">{highlight.title}:</strong>{" "}
                    {highlight.description}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {game.closingDescription ? (
            <p className="mt-8 leading-7 text-slate-300">
              {game.closingDescription}
            </p>
          ) : null}
          {game.finalNote ? (
            <p className="mt-4 font-semibold text-lime-300">{game.finalNote}</p>
          ) : null}
        </article>

        <aside className="space-y-8">
          <section className="rounded-lg bg-slate-900 p-6 ring-1 ring-white/10">
            <h2 className="text-xl font-bold">Detalhes do game</h2>
            <dl className="mt-5 divide-y divide-white/10">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-[120px_1fr] gap-4 py-4 text-sm"
                >
                  <dt className="font-semibold text-slate-400">{detail.label}</dt>
                  <dd>{detail.value || "Não informado"}</dd>
                </div>
              ))}
            </dl>
          </section>

          {game.requirements?.length ? (
            <section className="rounded-lg bg-slate-900 p-6 ring-1 ring-white/10">
              <h2 className="text-xl font-bold">Requisitos</h2>
              <div className="mt-5 space-y-5">
                {game.requirements.map((requirement) => (
                  <dl
                    key={`${requirement.system}-${requirement.processor}`}
                    className="grid gap-3 rounded bg-white/5 p-4 text-sm"
                  >
                    <div>
                      <dt className="font-semibold text-slate-400">Sistema</dt>
                      <dd>{requirement.system}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400">
                        Processador
                      </dt>
                      <dd>{requirement.processor}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400">Memória</dt>
                      <dd>{requirement.memory}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400">Gráficos</dt>
                      <dd>{requirement.graphics}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400">DirectX</dt>
                      <dd>{requirement.directX}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400">
                        Armazenamento
                      </dt>
                      <dd>{requirement.storage}</dd>
                    </div>
                  </dl>
                ))}
              </div>
            </section>
          ) : null}
        </aside>
      </section>
    </main>
  );
}
