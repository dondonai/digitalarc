import Image from "next/image";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import MainNav from "@/components/sidebar/main-nav";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SITE_TAGLINE, SITE_TITLE } from "@/lib/constants";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-4">
        <div className="mx-auto flex items-center gap-2">
          <Link
            href="/"
            className="relative aspect-auto rounded-full overflow-hidden size-14 md:hidden"
          >
            <Image
              alt="Digital Arc"
              className="h-full w-full object-cover object-center"
              fill
              sizes="56px"
              src="/logo.png"
            />
          </Link>
          <div>
            <p className="wrap-break-word font-bold font-heading text-2xl text-primary uppercase leading-6 tracking-none">
              {SITE_TITLE}
            </p>
            <p className="text-primary/70 font-semibold text-xs italic">
              {SITE_TAGLINE}
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <MainNav />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between gap-2 px-2 py-1">
          <span className="font-medium text-muted-foreground text-xs">
            Appearance
          </span>
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
