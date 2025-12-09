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
      <div className="relative aspect-auto h-[50vh] w-full">
        <Image
          alt="Promo"
          className="h-full w-full object-cover object-left md:object-center"
          fill
          src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/481807544_122221142216209573_1841057089211648748_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF04-xI4kueovV9K6iSf_ZbotdWFA4vdSmi11YUDi91KcUUCICDkxxgJFJlEwdM8H81fXltk0YSoBhZU007Je-W&_nc_ohc=d75jAky3YwAQ7kNvwEEhDs6&_nc_oc=AdkyDFozBQqPvRmdh7jEznSqoAR6_1jWhuJZ5LHasNbLc4uWSde-NZnKGKziHdOfYTA&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=4CZghq2o5GA76S-Wc3tRjg&oh=00_Afmrs0ZSvOSSk5hMSK4cl7ZBQG7H_Hh68o2FF1shNovw_g&oe=693DABDC"
          unoptimized
        />
        <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black to-transparent" />
      </div>
      <div className="gap-8 space-y-4 p-4 md:flex">
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
        </div>
        <IPhoneDialer number="+63 945 1470 492" />
      </div>
    </div>
  );
};

export default ContactPage;
