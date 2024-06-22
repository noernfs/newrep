import Link from "next/link";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-pink-600">
            Kenapa harus MyRepublic?
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            #WifiTerbaik <span className=" text-pink-700">Ultra Cepat</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <Image
                className="object-center object-cover h-auto w-full"
                src="/feature1.webp"
                width={750}
                height={450}
                alt="gratis instalasi"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Bebas Biaya Instalasi
              </p>
              <p className="text-base text-gray-400 font-normal">
                Fasilitas instalasi bebas biaya senilai 500rb dengan tambahan
                bebas biaya sewa perangkat, router, dan kabel.
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <Image
                className="object-center object-cover h-auto w-full"
                width={750}
                height={450}
                src="/feature3.webp"
                alt="promo menarik"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Promo Bulanan
              </p>
              <p className="text-base text-gray-400 font-normal">
                Kemudahan berlangganan melalui diskon biaya bulanan sampai
                dengan 30%.
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <Image
                className="object-center object-cover h-auto w-full"
                width={750}
                height={450}
                src="/feature2.webp"
                alt="unlimited tanpa fup"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Wifi Unlimited
              </p>
              <p className="text-base text-gray-400 font-normal">
                Wifi tanpa FUP atau batasan kuota untuk pengalaman berselancar
                Internet tanpa batas, tanpa takut kecepatan turun diakhir bulan
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
