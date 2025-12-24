import { MailIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import IPhoneDialer from "@/components/phone-dial";
import Socials from "@/components/socials";
import { SITE_DESCRIPTION, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with ADS Smoothies & Pastries. Visit us at 2nd floor Robinsons Place Roxas City or call us at 0917 705 7706.",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <div className="@container w-full">
      <div className="relative aspect-auto h-[50vh] w-full">
        <Image
          alt="Promo"
          className="h-full w-full object-cover object-left md:object-center"
          fill
          src="https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-contact-02.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black to-transparent" />
      </div>
      <div className="gap-8 space-y-4 p-4 flex flex-col items-center">
        <div className="flex items-center gap-2 font-poppins">
          <MailIcon size={24} />
          <a className="font-semibold underline" href={`mailto:${SITE_EMAIL}`}>
            {SITE_EMAIL}
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-semibold text-lg font-heading">Connect with us!</p>
          <Socials />
        </div>
        <IPhoneDialer number="+63 945 1470 492" />
      </div>
    </div>
  );
};

export default ContactPage;
