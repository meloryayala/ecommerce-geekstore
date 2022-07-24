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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner src="/banner-home-01.png" alt="Up to 55% discount!" />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Sales</SectionTitle>
        <ProductList products={deals.reverse()} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-02.png"
          alt="Up to 55% discount on keyboards!"
        />
      </div>

      <div>
        <SectionTitle>Keyboards</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Up to 55% discount! on keyboards!"
        />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
};

export default Home;
