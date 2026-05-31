"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Game } from "@/types/game";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "./section-heading";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductCarouselProps {
  games: Game[];
  title: string;
}

export function ProductCarousel({ games, title }: ProductCarouselProps) {
  return (
    <section>
      <SectionHeading>{title}</SectionHeading>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
          768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 28 },
        }}
        modules={[Navigation, Pagination]}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            <ProductCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
