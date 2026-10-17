import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="font-bold font-heading text-6xl text-primary">404</p>
      <h1 className="font-bold font-heading text-2xl">Page not found</h1>
      <p className="text-muted-foreground">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link className={buttonVariants({ size: "lg" })} href="/">
        <ArrowLeftIcon /> Back home
      </Link>
    </div>
  );
}
