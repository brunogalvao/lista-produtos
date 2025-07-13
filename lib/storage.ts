import { Product } from "@/types/product";

const STORAGE_KEY = "mock-products";

export function getStoredProducts(): Product[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveStoredProducts(products: Product[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
