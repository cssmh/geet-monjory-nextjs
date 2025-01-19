/* eslint-disable prettier/prettier */
import Image from "next/image";

import singer from "@/src/assets/geetmonjory.jpg";
import { title, subtitle } from "@/src/components/primitives";

export default function GeetMonjory() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8 py-7 md:py-10">
      <div className="text-center md:text-left max-w-xl">
        <span className={title()}>Welcome to&nbsp;</span>
        <span className={title({ color: "violet" })}>
          Geet Monjory&apos;s&nbsp;
        </span>
        <br />
        <span className={title()}>
          Official Website – Explore new music, albums, and more!
        </span>
        <div className={subtitle({ class: "mt-3" })}>
          Discover the latest tracks and stay up-to-date with Geet
          Monjory&apos;s musical journey.
        </div>
      </div>
      <div className="mt-8 md:mt-0 w-full md:w-1/2">
        <Image
          alt="Singer"
          className="w-full rounded-lg shadow-lg"
          height={200}
          src={singer}
          width={300}
        />
      </div>
    </section>
  );
}
