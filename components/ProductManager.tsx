"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { Product } from "@/types/product";
import { formatToBRL } from "@/utils/format";
import { ProductEditDialog } from "./ProductEditDialog";
import { getStoredProducts, saveStoredProducts } from "@/lib/storage";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = getStoredProducts();
    setProducts(products);
  }, []);

  const handleDelete = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveStoredProducts(updated);

    toast.warning("Produto excluído com sucesso!");
  };

  const handleSaveEdit = (updated: Product) => {
    const updatedList = products.map((p) =>
      p.id === updated.id ? updated : p,
    );

    setProducts(updatedList);
    saveStoredProducts(updatedList);

    toast.success("Produto atualizado com sucesso!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerenciador de Produtos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-6 space-y-4">
          {products.length === 0 ? (
            <p className="text-muted-foreground">Nenhum produto encontrado.</p>
          ) : (
            <Table>
              <TableCaption>
                Lista de todos os produtos cadastrados
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead className="w-[150px] text-center">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{formatToBRL(product.price)}</TableCell>
                    <TableCell className="flex justify-center gap-2">
                      <ProductEditDialog
                        product={product}
                        onSave={handleSaveEdit}
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
