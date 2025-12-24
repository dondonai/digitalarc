import {
  BicepsFlexedIcon,
  HomeIcon,
  IdCardIcon,
  PhoneCallIcon,
  ShoppingCartIcon,
} from "lucide-react";

export const SITE_TITLE = "Digital Arc";
export const SITE_TAGLINE = "We Create, We Design, We Print";
export const SITE_DESCRIPTION =
  "Digital Arc Print is your one-stop solution for all your printing needs. From business cards to banners, we deliver high-quality prints with exceptional service.";

export const SITE_URL = "https://digitalarcprint.com";
export const SITE_EMAIL = "arcdigitalprinting@gmail.com";
export const SITE_SOCIALS = {
  facebook: "https://www.facebook.com/Dgital.Arc",
  instagram: "https://www.instagram.com/arcdigitalprint/",
  tiktok: "https://vt.tiktok.com/ZSH3D8R6ofbjN-lLENt",
  shoppee: "https://s.shopee.ph/6KxEFVG4Ag",
};

export const NAVIGATION_LINKS = [
  // { title: "Home", url: "/" as const, icon: HomeIcon },
  {
    title: "Products",
    url: "/products" as const,
    icon: ShoppingCartIcon,
  },
  {
    title: "Services",
    url: "/services" as const,
    icon: BicepsFlexedIcon,
  },
  // { title: "About", url: "/about" as const, icon: IdCardIcon },
  { title: "Contact", url: "/contact" as const, icon: PhoneCallIcon },
];
