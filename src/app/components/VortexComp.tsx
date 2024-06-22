"use client";
import React from "react";
import { Vortex } from "../ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
          Prioritas Pendaftaran Online
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Pendaftaran mudah, cepat, dan praktis melalui fasilitas online melalui
          agent call center MyRepublic Resmi.
        </p>
      </Vortex>
    </div>
  );
}
