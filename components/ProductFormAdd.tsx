"use client";

import { useState } from "react";
import { useProductStore } from "@/store/productStore";
import { Product } from "@/types/product";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ProductFormAdd() {
  const { setProducts } = useProductStore();

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      name: form.name,
      price: parseFloat(form.price),
      description: form.description,
      category: form.category || "Outro",
      image: form.image,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      setProducts((prev: Product[]) => [data, ...prev]);

      // limpa o formulário
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
      });

      setOpen(false);
    } catch (err) {
      console.error("Erro ao adicionar produto:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="dark:text-foreground">
          Adicionar Produto
          <Plus className="inline mr-2" size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Produto</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para adicionar um novo produto. Para a
            imagem, você pode copiar o link de uma imagem diretamente do site{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-foreground"
            >
              unsplash.com
            </a>{" "}
            e colá-lo no campo{" "}
            <span
              dangerouslySetInnerHTML={{ __html: "&ldquo;Imagem (URL)&rdquo;" }}
            />
            .
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div className="flex space-y-2 flex-col">
            <Label className="text-sm">Nome</Label>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nome do produto"
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex space-y-2 flex-col">
            <Label className="text-sm">Categoria</Label>
            <Input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Categoria"
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex space-y-2 flex-col">
            <Label className="text-sm">Preço</Label>
            <Input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Preço"
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex space-y-2 flex-col">
            <Label className="text-sm">Descrição</Label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Descrição"
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <div className="flex space-y-2 flex-col">
            <Label className="text-sm">Imagem (URL)</Label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              className="border rounded px-3 py-2 w-full"
              required
            />
          </div>

          <Button type="submit" variant="default" className="text-foreground">
            Cadastrar Produto
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
