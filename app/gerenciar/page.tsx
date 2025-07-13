"use client";

import { ProductCountProvider } from "@/context/ProductCountContext";
import ProductManager from "@/components/ProductManager";
import TituloPage from "@/components/TituloPage";

export default function GerenciarProdutosPage() {
  return (
    <ProductCountProvider>
      <PageProductoManager />
    </ProductCountProvider>
  );
}

function PageProductoManager() {
  return (
    <div className="lg:w-5xl py-8 md:w-[90%] mx-auto flex flex-col space-y-3">
      <TituloPage titulo="Gerenciar Produtos" />
      <ProductManager />
    </div>
  );
}
