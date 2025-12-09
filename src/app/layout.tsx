import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/header";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import SiteFooter from "@/components/site-footer";
import { SidebarProvider } from "@/components/ui/sidebar";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DigitalArk - Your Digital Solutions Partner",
    template: "%s | DigitalArk",
  },
  description:
    "DigitalArk provides cutting-edge digital solutions, web development, and technology consulting services to help your business thrive in the digital age.",
  keywords: [
    "digital solutions",
    "web development",
    "technology consulting",
    "software development",
    "digital transformation",
  ],
  manifest: "/manifest.json",
  authors: [{ name: "DigitalArk" }],
  creator: "DigitalArk",
  publisher: "DigitalArk",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://digitalarkprint.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DigitalArk - Your Digital Solutions Partner",
    description:
      "DigitalArk provides cutting-edge digital solutions, web development, and technology consulting services.",
    url: "/",
    siteName: "DigitalArk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DigitalArk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalArk - Your Digital Solutions Partner",
    description:
      "DigitalArk provides cutting-edge digital solutions, web development, and technology consulting services.",
    images: ["/logo.png"],
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
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} ${latoSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
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
            <main className="@container/main mb-8 mx-auto w-full">
              {props.children}
            </main>
            <SiteFooter />
          </div>
        </SidebarProvider>{" "}
      </body>
    </html>
  );
}
