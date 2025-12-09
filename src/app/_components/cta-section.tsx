import { PhoneCallIcon, TelescopeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="w-full bg-accent text-white flex flex-col gap-6 p-8 items-center justify-center">
      <h3 className="font-semibold text-2xl font-heading text-foreground">
        Where here to help you with your printing needs
      </h3>
      <div className="flex gap-4 items-center">
        <Link
          className={buttonVariants({
            className: "font-semibold font-heading",
            size: "lg",
          })}
          href="/services"
        >
          <TelescopeIcon /> Explore our Services
        </Link>
        <Link
          className={buttonVariants({
            className: "font-semibold font-heading text-primary",
            size: "lg",
            variant: "outline",
          })}
          href="/contact"
        >
          <PhoneCallIcon /> Contact Us
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
