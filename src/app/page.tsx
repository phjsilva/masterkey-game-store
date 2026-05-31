import { ProductListItem } from "@/components/product/product-list-item";
import { FeaturedGames } from "@/components/sections/featured-games";
import { Hero } from "@/components/sections/hero";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { SectionHeading } from "@/components/sections/section-heading";
import { getHomeCatalog } from "@/lib/api";

export default async function Home() {
  const { bestSellers, featured, recent, rpg } = await getHomeCatalog();

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Hero />

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-5 py-16 sm:px-8 lg:px-10">
        <FeaturedGames games={featured} />

        <ProductCarousel title="RPG" games={rpg} />

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading>Mais vendidos</SectionHeading>
            <div className="grid gap-4">
              {bestSellers.map((game) => (
                <ProductListItem key={game.id} game={game} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>Novos lançamentos</SectionHeading>
            <div className="grid gap-4">
              {recent.map((game) => (
                <ProductListItem key={game.id} game={game} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
