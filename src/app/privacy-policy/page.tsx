import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="@container/privacy space-y-4 mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-gray-600">
        <strong>Last updated:</strong> 12/08/2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          This Privacy Policy describes how we collect, use, and handle your
          information when you use our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us and information
          automatically collected when you use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Google Analytics</h2>
        <p className="mb-4">
          We use Google Analytics to analyze the use of our website. Google
          Analytics gathers information about website use by means of cookies.
          The information gathered relating to our website is used to create
          reports about the use of our website.
        </p>
        <p className="mb-4">
          Google's privacy policy is available at:{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
        </p>
        <p className="mb-4">
          You can opt-out of Google Analytics by installing the Google Analytics
          Opt-out Browser Add-on available at:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to distinguish you from other users. This
          helps us provide you with a good experience and allows us to improve
          our site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and maintain our services</li>
          <li>To analyze website usage and improve our services</li>
          <li>To communicate with you</li>
          <li>To detect and prevent fraud</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact
          us.
        </p>
      </section>
    </div>
  );
}
