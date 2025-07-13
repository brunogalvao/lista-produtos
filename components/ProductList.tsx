"use client";

import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import { ProductCard } from "@/components/ProductCard";
import { useProductCount } from "@/context/ProductCountContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const ITEMS_PER_PAGE = 6;

export default function ProductList() {
  const { products, setProducts } = useProductStore();
  const { setCount } = useProductCount();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const run = async () => {
      const res = await fetch("/api/products");
      try {
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    };

    run();
  }, [setProducts]);

  useEffect(() => {
    setCount(products.length);
  }, [products, setCount]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;

  const sortedProducts = [...products].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const paginatedProducts = sortedProducts.slice(start, start + ITEMS_PER_PAGE);

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center gap-4">
        <Button
          variant="outline"
          onClick={goToPrevious}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </Button>

        <span className="text-foreground text-sm">
          Página {currentPage} de {totalPages}
        </span>

        <Button
          variant="outline"
          onClick={goToNext}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
