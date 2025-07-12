"use client";

import { Product } from "@/types/product";
import { formatToBRL } from "@/utils/format";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain object-center rounded border"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="flex flex-col">
            <Label className="text-[10px] text-foreground">Categoria</Label>
            <span className="text-[12px] text-foreground">
              <Badge variant="default" className="dark:text-foreground">
                {product.category}
              </Badge>
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            <Label className="text-[10px] text-foreground">Descrição</Label>
            <div className="text-base text-foreground line-clamp-2 dark:bg-zinc-800 bg-zinc-100 p-2 h-20 rounded">
              {product.description}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="mt-auto w-full font-bold bg-green-600 text-white p-3 rounded-full text-center">
          {formatToBRL(product.price)}
        </div>
      </CardFooter>
    </Card>
  );
}
