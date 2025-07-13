import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";

if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
) {
  import("../initMocks").then(({ initMocks }) => initMocks());
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            {children}

            <Toaster richColors position="top-right" />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
