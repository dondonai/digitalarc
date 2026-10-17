import { BadgeCheckIcon, HeartHandshakeIcon, TimerIcon } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: TimerIcon,
    title: "Fast Turnaround",
    description:
      "Rush orders welcome. We keep your deadlines on track so your event is never late.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Quality Guaranteed",
    description:
      "Premium materials and sharp, lasting prints — in-house design to final finish.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Honest & Affordable",
    description:
      "Fair, transparent pricing with personal service. Local, friendly, and reliable.",
  },
];

function ValueProps() {
  return (
    <section aria-labelledby="value-props-heading" className="container-page">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="font-semibold text-primary text-xs uppercase tracking-[0.2em]">
          Why Digital Arc
        </p>
        <h2
          className="text-balance font-bold font-heading text-2xl md:text-4xl"
          id="value-props-heading"
        >
          We create, we design, we print
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Quality and affordable custom printing. Whatever you can imagine, we
          can put it on your product.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {VALUE_PROPS.map(({ icon: Icon, title, description }) => (
          <div
            className="flex flex-col gap-3 rounded-2xl border bg-card p-6 shadow-soft"
            key={title}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </span>
            <h3 className="font-heading font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValueProps;
