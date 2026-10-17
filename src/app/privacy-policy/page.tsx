import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Digital Arc collects, uses, and protects your information when you use our website.",
};

const linkClass = "text-primary underline underline-offset-4 hover:opacity-80";

export default function PrivacyPolicy() {
  return (
    <div className="container-page py-12">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-2">
          <h1 className="font-bold font-heading text-3xl md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            <strong className="font-semibold text-foreground">
              Last updated:
            </strong>{" "}
            12/08/2025
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-2xl">Introduction</h2>
          <p className="text-muted-foreground">
            This Privacy Policy describes how we collect, use, and handle your
            information when you use our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-2xl">
            Information We Collect
          </h2>
          <p className="text-muted-foreground">
            We collect information that you provide directly to us and
            information automatically collected when you use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-2xl">
            Google Analytics
          </h2>
          <p className="text-muted-foreground">
            We use Google Analytics to analyze the use of our website. Google
            Analytics gathers information about website use by means of cookies.
            The information gathered relating to our website is used to create
            reports about the use of our website.
          </p>
          <p className="text-muted-foreground">
            Google&apos;s privacy policy is available at:{" "}
            <a
              className={linkClass}
              href="https://policies.google.com/privacy"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://policies.google.com/privacy
            </a>
          </p>
          <p className="text-muted-foreground">
            You can opt-out of Google Analytics by installing the Google
            Analytics Opt-out Browser Add-on available at:{" "}
            <a
              className={linkClass}
              href="https://tools.google.com/dlpage/gaoptout"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-2xl">Cookies</h2>
          <p className="text-muted-foreground">
            Our website uses cookies to distinguish you from other users. This
            helps us provide you with a good experience and allows us to improve
            our site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-2xl">
            How We Use Your Information
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>To provide and maintain our services</li>
            <li>To analyze website usage and improve our services</li>
            <li>To communicate with you</li>
            <li>To detect and prevent fraud</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-semibold text-2xl">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </section>
      </article>
    </div>
  );
}
