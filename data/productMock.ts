import { Product } from "@/types/product";

const productsMock: Product[] = [
  {
    id: "1",
    name: "Camiseta Preta",
    category: "Roupas",
    price: 99.9,
    description: "Camiseta básica",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Fone Bluetooth",
    category: "Eletrônicos",
    price: 199.9,
    description: "Fone com cancelamento de ruído",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default productsMock;
