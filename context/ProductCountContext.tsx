"use client";

import { createContext, useContext, useState } from "react";

type ProductCountContextType = {
  count: number;
  setCount: (count: number) => void;
};

const ProductCountContext = createContext<ProductCountContextType | undefined>(
  undefined,
);

export function ProductCountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <ProductCountContext.Provider value={{ count, setCount }}>
      {children}
    </ProductCountContext.Provider>
  );
}

export function useProductCount() {
  const context = useContext(ProductCountContext);
  if (!context) {
    throw new Error(
      "useProductCount deve ser usado dentro do ProductCountProvider",
    );
  }
  return context;
}
