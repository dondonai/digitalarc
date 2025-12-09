"use client";

import { Coffee, GlassWater } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="cursor-pointer hover:bg-transparent dark:hover:bg-transparent"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      size="icon"
      variant="ghost"
    >
      <GlassWater className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-150 text-white transition-all dark:scale-0" />
      <Coffee className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-150 dark:text-white" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ModeToggle;
