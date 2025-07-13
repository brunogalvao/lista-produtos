"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/product";
import { Pencil } from "lucide-react";

type Props = {
  product: Product;
  onSave: (updatedProduct: Product) => void;
};

export function ProductEditDialog({ product, onSave }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Product>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave({ ...form, price: Number(form.price) });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Produto</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="category"
            placeholder="Categoria"
            value={form.category}
            onChange={handleChange}
          />
          <Input
            name="price"
            placeholder="Preço"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <DialogFooter className="mt-4">
          <Button onClick={handleSave} className=" dark:text-foreground">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
