import { MailIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import IPhoneDialer from "@/components/phone-dial";
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
      <div className="relative aspect-auto h-[70vh] w-full">
        <Image
          alt="Promo"
          className="h-full w-full object-cover object-center"
          fill
          src="https://storage.enfenetydev.com/wp-content/uploads/2025/11/contact-01.jpg"
          unoptimized
        />
        <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black to-transparent" />
      </div>
      <div className="gap-8 space-y-4 p-4 md:flex">
        <IPhoneDialer number="+63 917 705 7706" />
        <div className="flex w-full flex-col justify-center gap-4 md:min-h-[80vh]">
          <div className="flex items-center gap-2 font-poppins">
            <MailIcon size={16} />
            <a
              className="font-semibold underline"
              href={`mailto:${SITE_EMAIL}`}
            >
              {SITE_EMAIL}
            </a>
          </div>
          <iframe
            allowFullScreen
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2101.9234085878074!2d122.75010536693938!3d11.569396381408653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f33c674ec8f9%3A0x1ef5c5e49bd98d2c!2sRobinsons%20Roxas!5e0!3m2!1sen!2sph!4v1764316167609!5m2!1sen!2sph"
            style={{ border: 0 }}
            title="Robinsons Place Roxas City Location"
            width="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
