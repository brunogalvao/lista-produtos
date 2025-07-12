import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

type ProductState = {
  products: Product[];
  setProducts: (products: Product[] | ((prev: Product[]) => Product[])) => void;
};

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (productsOrFn) =>
        set((state) => ({
          products:
            typeof productsOrFn === "function"
              ? productsOrFn(state.products)
              : productsOrFn,
        })),
    }),
    {
      name: "product-storage",
    },
  ),
);
