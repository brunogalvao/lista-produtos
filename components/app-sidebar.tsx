"use client";

import { Home, Inbox } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Lista de Produtos",
    url: "/",
    icon: Home,
  },
  {
    title: "Gerenciar Produtos",
    url: "/gerenciar",
    icon: Inbox,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          "flex items-center gap-2 h-10 rounded-md hover:bg-muted transition-all",
                          isActive && "bg-muted font-semibold",
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="pb-10 flex justify-center">
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
