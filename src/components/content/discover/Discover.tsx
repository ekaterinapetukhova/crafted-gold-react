import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Title } from "../../common/Title.tsx";
import { DiscoverTitlesEnum, TitleEnum } from "../../../types/types.ts";
import { DiscoverItem } from "./DiscoverItem.tsx";

import "swiper/css";

export function Discover() {
  const subTitle = "Crafted for every taste, explore the flavors we’re known for.";

  return (
    <section className="my-[3.12rem]">
      <div className="container mx-auto">
        <Title label={TitleEnum.Discover} className="mb-5" />
        <p className="text-white text-center mb-[3.12rem]">{subTitle}</p>
        <Swiper
          className="relative"
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          centeredSlides
          loop
        >
          <SwiperSlide>
            <DiscoverItem
              label={DiscoverTitlesEnum.Ale}
              content="A crisp, refreshing wheat beer with hints of citrus and honey."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscoverItem
              label={DiscoverTitlesEnum.Lager}
              content="A crisp, refreshing wheat beer with hints of citrus and honey."
            />
          </SwiperSlide>
          <SwiperSlide>
            <DiscoverItem
              label={DiscoverTitlesEnum.Stout}
              content="A crisp, refreshing wheat beer with hints of citrus and honey."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
