import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "ID Lanyards",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-lanyards-01.jpg",
  },
  {
    title: "T-shirt Printing",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-tshirt-01.jpg",
  },
  {
    title: "Net Caps",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-netcap-01.jpg",
  },
  {
    title: "Wristlets",
    image:
      "https://storage.enfenetydev.com/wp-content/uploads/2025/12/digitalarc-wristlet-01.jpg",
  },
];

const ServicesPage = () => {
  return (
    <div className="@container py-8 px-4 w-full space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-muted-foreground font-heading">
          Our Services
        </h1>
        <p className="font-heading">
          We customize a variety of products to meet your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="">
            <Card className="py-0 overflow-hidden">
              <CardContent className="flex flex-col justify-end h-[350px] relative p-6">
                <h3 className="relative z-20 font-bold font-heading text-2xl leading-none text-accent">
                  {service.title}
                </h3>
                <div className="absolute aspect-auto left-0 top-0 h-[350px] w-full">
                  <Image
                    alt={service.title}
                    className="h-full w-full object-cover object-center"
                    fill
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={service.image}
                    // unoptimized
                  />
                  <div className="absolute top-0 left-0 h-full w-full bg-linear-to-t from-black to-transparent" />
                  {/* <div className="absolute top-0 left-0 hidden h-full w-full bg-linear-to-r from-primary to-transparent md:block" /> */}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
