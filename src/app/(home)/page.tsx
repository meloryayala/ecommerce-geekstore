"use client";

import Image from "next/image";
import Categories from "@/app/(home)/components/categories";

const Home = () => {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Home banner current discount"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
