"use client";

import { useState } from "react";
import { useProductStore } from "@/store/productStore";
import { Product } from "@/types/product";
import { getAllProducts } from "@/lib/getAllProducts";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BrushCleaning, Funnel } from "lucide-react";

export default function ProductFilter() {
  const { setProducts } = useProductStore();
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState(""); // novo

  const handleFilter = async () => {
    const res = await fetch("/api/products");
    const allProducts: Product[] = await res.json();

    const filtered = allProducts.filter((product) => {
      const matchesName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const price = product.price;
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      const matchesPrice = price >= min && price <= max;

      return matchesName && matchesPrice;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setProducts(filtered);
    setProducts(sorted);
  };

  const handleReset = () => {
    const all = getAllProducts();
    setProducts(all);
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtro</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col sm:flex-row items-end gap-3 mb-6">
          <div className="flex flex-col w-full space-y-1">
            <Label className="text-sm">Nome</Label>
            <Input
              type="text"
              placeholder="Buscar por nome"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <Label className="text-sm">Preço Minimo</Label>
            <Input
              type="number"
              placeholder="Preço mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <Label className="text-sm">Preço Maximo</Label>
            <Input
              type="number"
              placeholder="Preço máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex flex-row gap-3 md:w-[50%] w-full">
            <div className="w-full">
              <Button
                onClick={handleFilter}
                variant="default"
                className="dark:text-foreground w-full"
              >
                Filtrar
                <Funnel />
              </Button>
            </div>

            <div className="w-full">
              <Button
                onClick={handleReset}
                variant="destructive"
                className="w-full"
              >
                Resetar
                <BrushCleaning />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
