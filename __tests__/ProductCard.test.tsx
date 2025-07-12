import { render } from "@testing-library/react";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/product";

const mockProduct: Product = {
  id: "1",
  name: "Produto Teste",
  category: "Categoria Teste",
  price: 99.99,
  description: "Descrição teste",
  image: "https://images.unsplash.com/photo-xyz",
};

describe("ProductCard snapshot", () => {
  it("deve bater com o snapshot", () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    expect(container).toMatchSnapshot();
  });
});
