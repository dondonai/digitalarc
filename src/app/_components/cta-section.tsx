import { PhoneCallIcon, TelescopeIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="text-balance font-semibold font-heading text-2xl md:text-3xl">
          We&apos;re here to help you with your printing needs
        </h2>
        <p className="max-w-xl text-primary-foreground/80 text-sm md:text-base">
          Tell us what you need and we&apos;ll get back to you with a quote and
          turnaround time.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            className={buttonVariants({
              className: "font-semibold font-heading",
              size: "lg",
              variant: "secondary",
            })}
            href="/services"
          >
            <TelescopeIcon /> Explore our Services
          </Link>
          <Link
            className={buttonVariants({
              className:
                "border-primary-foreground/40 bg-transparent font-semibold font-heading text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
              size: "lg",
              variant: "outline",
            })}
            href="/contact"
          >
            <PhoneCallIcon /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
