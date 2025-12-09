"use client";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

function CustomTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      className="flex text-white hover:bg-transparent hover:text-white md:hidden dark:hover:bg-transparent"
      onClick={toggleSidebar}
      size="icon"
      variant="ghost"
    >
      <MenuIcon className="scale-150" />
    </Button>
  );
}

export default CustomTrigger;
