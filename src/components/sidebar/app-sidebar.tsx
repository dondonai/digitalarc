import Image from "next/image";
import Link from "next/link";
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
              src="/logo.png"
              unoptimized
            />
          </Link>
          <div>
            <h1 className="wrap-break-word font-bold font-heading text-2xl text-primary uppercase leading-6 tracking-none">
              {SITE_TITLE}
            </h1>
            <p className="text-primary/50 font-semibold text-xs italic">
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
      <SidebarFooter />
    </Sidebar>
  );
}
