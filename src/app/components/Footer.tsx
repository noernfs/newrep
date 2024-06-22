import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src="/Myrep-logo.png"
            width={180}
            height={55}
            alt="Logo MyRepublic"
          />
          <p className="mb-4">
            <strong className="font-medium">
              Revolusi Internet MyRepublic
            </strong>{" "}
            - Pelopor perubahan progresif jaringan internet
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/facebook.svg"
                width={20}
                height={20}
                alt="Logo Facebook"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/twitter.svg"
                width={20}
                height={20}
                alt="Logo Facebook"
              />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src="/instagram.svg"
                width={20}
                height={20}
                alt="Logo Facebook"
              />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - MyRepublic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
