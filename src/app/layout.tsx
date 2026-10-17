import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import ChatLauncher from "@/components/chat-launcher";
import SiteHeader from "@/components/header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import SiteFooter from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const SITE_NAME = `${SITE_TITLE} Print`;
const OG_IMAGE =
  "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-contact-02.jpg";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Custom Printing Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "custom printing",
    "t-shirt printing",
    "ID lanyards",
    "net caps",
    "wristlets",
    "tarpaulin printing",
    "printing services Philippines",
    "Digital Arc Print",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon512_any.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/icon512_maskable.png", sizes: "512x512" }],
  },
  openGraph: {
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add verification tokens here once available, e.g.
  // verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppinsSans.variable} ${latoSans.variable} font-sans antialiased`}
      >
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground focus:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          href="#main"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <SidebarProvider
            defaultOpen={false}
            style={
              {
                // "--sidebar-width": "14rem",
                // "--sidebar-width-mobile": "10rem",
              } as React.CSSProperties
            }
          >
            <AppSidebar />
            <div className="@container/wrapper flex min-h-screen w-full flex-col">
              <SiteHeader />
              <main id="main" className="@container/main mb-8 mx-auto w-full">
                {props.children}
                <ChatLauncher />
              </main>
              <SiteFooter />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
