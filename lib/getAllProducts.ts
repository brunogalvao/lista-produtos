import productsMock from "@/data/productMock";
import { Product } from "@/types/product";

export function getAllProducts(): Product[] {
  if (typeof window === "undefined") {
    return productsMock;
  }

  const stored = localStorage.getItem("mock-products");
  const storedProducts: Product[] = stored ? JSON.parse(stored) : [];

  const combined = [...productsMock, ...storedProducts].reduce<Product[]>(
    (acc, curr) => {
      if (!acc.find((p) => p.id === curr.id)) {
        acc.push(curr);
      }
      return acc;
    },
    [],
  );

  return combined;
}
