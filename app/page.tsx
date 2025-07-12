"use client";

import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import ProductFilter from "@/components/ProductFilters";
import ProductFormAdd from "@/components/ProductFormAdd";
import {
  ProductCountProvider,
  useProductCount,
} from "@/context/ProductCountContext";
import { ModeToggle } from "@/components/ModeToggle";
import { Loader } from "lucide-react";

export default function Home() {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const start = async () => {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        const { initMocks } = await import("../initMocks");
        await initMocks();
      }
      setMswReady(true);
    };
    start();
  }, []);

  if (!mswReady)
    return (
      <div className="flex justify-center items-center w-full text-center py-4 flex-1 h-screen">
        <span className="flex flex-row gap-4 items-center">
          <Loader className="animate-spin text-3xl" />
          <span className="text-2xl">Iniciando mocks...</span>
        </span>
      </div>
    );

  return (
    <ProductCountProvider>
      <HomePageContent />
    </ProductCountProvider>
  );
}

function HomePageContent() {
  const { count } = useProductCount();

  return (
    <div className="p-6 lg:w-5xl md:w-[90%] mx-auto flex flex-col space-y-3">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <div className="mb-4 flex items-center justify-between w-full">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Produtos</span> Total de Produtos{" "}
          {count}
        </div>
        <ProductFormAdd />
      </div>

      <ProductFilter />
      <ProductList />
    </div>
  );
}
