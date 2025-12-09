"use client";
import {
  BicepsFlexedIcon,
  HomeIcon,
  IdCardIcon,
  PhoneCallIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NAVIGATION_LINKS } from "../../lib/constants";

function MainNav() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return NAVIGATION_LINKS.map((item) => {
    const isCurrent = pathname === item.url;
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild onClick={toggleSidebar}>
          <Link
            className="font-semibold uppercase data-[current=true]:text-muted-foreground"
            data-current={isCurrent}
            href={item.url}
          >
            <item.icon />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  });
}

export default MainNav;
