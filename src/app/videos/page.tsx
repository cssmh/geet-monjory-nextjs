/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import Image from "next/image";

import geet from "@/src/assets/banner.jpeg";
export default function Videos() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <Image
          src={geet}
          className="rounded-lg shadow-lg"
          width={800}
          height={600}
          alt="Banner image for the videos section"
          placeholder="blur"
        />
      </div>
      <h1 className="flex justify-center items-center min-h-[40vh] text-2xl font-semibold text-gray-500">
        Working on it...
      </h1>
    </div>
  );
}
