import { TituloPageProps } from "@/types/tituloPage";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

const TituloPage = ({ titulo, totalProdutos }: TituloPageProps) => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <SidebarTrigger />
      <Separator orientation="vertical" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{titulo}</span>
        {totalProdutos && <span>Total de Produtos {totalProdutos}</span>}
      </div>
    </div>
  );
};

export default TituloPage;
