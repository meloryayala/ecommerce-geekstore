"use client";

import Categories from "@/components/customComponents/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/customComponents/productList";
import SectionTitle from "@/components/customComponents/sectionTitle";
import PromoBanner from "@/components/customComponents/promoBanner";

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner src="/banner-home-01.png" alt="Up to 55% discount!" />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Sales</SectionTitle>
        <ProductList products={deals} />
      </div>

      <div className="mt-8">
        <PromoBanner src="/banner-home-02.png" alt="Up to 55% discount!" />
      </div>

      <div className="mt-8">
        <SectionTitle>Keyboards</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
};

export default Home;
