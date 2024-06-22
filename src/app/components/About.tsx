"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";

const features = [
  "100% Jaringan Fiber Optik",
  "Perangkat Router PRO",
  "Internet True Unlimited tanpa FUP",
  "Stabilisasi Costum Routing",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/Illustration1.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="bg-white">
          <motion.div
            className="flex flex-col justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed text-pink-800">
              Revolusi Internet MyRepublic
            </h2>
            <p className="my-2 text-black-500">
              Implementasi rekayasa struktur jaringan yang ditujukan demi
              terciptanya kondisi jaringan super stabil sebagai salah satu
              sarana pendukung segala aktivitas online.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <div className="flex pt-4">
              <Image
                src="/MyRepublic-BrandChampion.webp"
                alt="MyRepublic Internet Terbaik"
                width={85.3}
                height={102.4}
                loading="eager"
              />
              <Image
                src="/MyRepublic-PopularAward.webp"
                alt="MyRepublic Internet Terbaik"
                width={102.4}
                height={102.4}
                loading="eager"
              />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
