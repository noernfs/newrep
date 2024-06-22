import Link from "next/link";
import Image from "next/image";

export default function Howto() {
  return (
    <>
      <div className="p-4 max-w-xl mx-auto dark:bg-gray-800">
        <h2 className="font-heading dark:text-gray-100 mb-8 text-center text-3xl font-bold lg:text-4xl">
          Proses Pendaftaran MyRepublic
        </h2>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6 text-blue-800 dark:text-slate-200"
                >
                  <path d="M12 5l0 14"></path>
                  <path d="M18 13l-6 6"></path>
                  <path d="M6 13l6 6"></path>
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Step 1
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Pengecekan area dengan melampirkan alamat lengkap dan share lokasi
              melalui chat agent dilanjutkan dengan rekomendasi pemilihan paket
              berdasarkan dengan kebutuhan dan preferensi pelanggan.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6 text-blue-800 dark:text-slate-200"
                >
                  <path d="M12 5l0 14"></path>
                  <path d="M18 13l-6 6"></path>
                  <path d="M6 13l6 6"></path>
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Step 2
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Penjadwalan pemasangan bebas biaya yang dapat disesuai berdasarkan
              ketersediaan waktu pelanggan.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6 text-blue-800 dark:text-slate-200"
                >
                  <path d="M12 5l0 14"></path>
                  <path d="M18 13l-6 6"></path>
                  <path d="M6 13l6 6"></path>
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Step 3
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              Pembayaran pertama setelah pemasangan sesuai dengan persetujuan
              pengambilan paket melalui portal e-banking pembayaran, indomaret,
              atau media remi lainnya.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6 text-white dark:text-slate-200"
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1 ">
            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              Internet telah siap digunakan!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
