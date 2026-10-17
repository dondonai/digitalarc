"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      aria-label="Open navigation menu"
      className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground md:hidden dark:hover:bg-primary-foreground/10"
      onClick={toggleSidebar}
      size="icon"
      variant="ghost"
    >
      <MenuIcon className="size-5" />
    </Button>
  );
}

export default CustomTrigger;
