import { ThemeProvider } from "@/components/theme-provider";
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
