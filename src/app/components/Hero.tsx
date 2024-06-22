"use client";
import {
  Autoplay,
  A11y,
  Scrollbar,
  Pagination,
  Navigation,
} from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Hero() {
  return (
    <>
      <div className="max-w-screen-xl md:py-12 lg:px-12 md:pr-4 mx-auto">
        <div className="grid grid-flow-row md:grid-flow-col md:grid-rows-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-start row-start-2 md:row-start-1">
            <div className="px-4 lg:pb-10 lg:pt-4">
              <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-pink-800 font-sans text-black-600 leading-normal">
                WIFI pilihan keluarga <strong>Indonesia</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                MyRepublic hadir untuk menjadi aset kebanggaan bangsa Indonesia
                dengan memberikan solusi internet dengan pilihan harga
                terjangkau yang didukung oleh komitmen kami dalam meningkatkan
                kualitas layanan jaringan untuk memberikan pengalaman terbaik.
              </p>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper flex w-full justify-center max-w-xl max-h-80"
          >
            <SwiperSlide>
              <Image
                src="/Banner-MyRepublic-Terbaik.webp"
                alt="MyRepublic Internet Terbaik"
                width={640}
                height={500}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Promo-MyRepublic-Juni.webp"
                alt="Promo Diskon Bulan Juni 2024"
                width={640}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Banner-MyRepublic-Vidio.webp"
                alt="Gratis Langganan Vidio"
                width={640}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Banner-MyRepublic-WeTV.webp"
                alt="Gratis Langganan WeTV"
                width={640}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
