"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Alternar tema"
      className={
        theme === "dark"
          ? "bg-zinc-500 text-amber-400"
          : "bg-zinc-800 text-zinc-100"
      }
    >
      {theme === "dark" ? (
        <>
          <span>Light</span>
          <Sun className="h-5 w-5" />
        </>
      ) : (
        <>
          <span>Dark</span>
          <Moon className="h-5 w-5" />
        </>
      )}
    </Button>
  );
}
