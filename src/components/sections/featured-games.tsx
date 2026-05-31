"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Game } from "@/types/game";
import { FeaturedCard } from "@/components/product/featured-card";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "./section-heading";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface FeaturedGamesProps {
  games: Game[];
}

export function FeaturedGames({ games }: FeaturedGamesProps) {
  const heroGames = games.slice(0, 5);
  const gridGames = games.slice(5, 9);

  return (
    <section>
      <SectionHeading>Destaques</SectionHeading>

      <Swiper
        slidesPerView={1}
        navigation
        loop={heroGames.length > 1}
        modules={[Navigation]}
        className="mb-8"
      >
        {heroGames.map((game) => (
          <SwiperSlide key={game.id}>
            <FeaturedCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>

      {gridGames.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
            768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 28 },
          }}
          modules={[Pagination]}
        >
          {gridGames.map((game) => (
            <SwiperSlide key={game.id}>
              <ProductCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </section>
  );
}
