import { http } from "msw";
import { Product } from "@/types/product";
import { getAllProducts } from "@/lib/getAllProducts";

function getStoredProducts(): Product[] {
  const stored = localStorage.getItem("mock-products");
  return stored ? JSON.parse(stored) : [];
}

function saveProducts(products: Product[]) {
  localStorage.setItem("mock-products", JSON.stringify(products));
}

export const handlers = [
  http.get("/api/products", () => {
    const all = getAllProducts();
    return Response.json(all);
  }),

  http.post<Record<string, string>, Product>(
    "/api/products",
    async ({ request }) => {
      const newProduct = await request.json();

      const stored = getStoredProducts();

      // evita duplicatas por id
      const updated = [...stored, newProduct].reduce((acc, curr) => {
        if (!acc.find((p) => p.id === curr.id)) acc.push(curr);
        return acc;
      }, [] as Product[]);

      saveProducts(updated);
      return Response.json(newProduct, { status: 201 });
    },
  ),
];
