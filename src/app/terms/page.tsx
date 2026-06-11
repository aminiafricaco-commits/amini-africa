import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Amini Africa's terms of service governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-stone max-w-none space-y-6 text-muted-foreground">
          <h2 className="text-2xl font-bold text-secondary">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Amini Africa website and services, you
            agree to be bound by these Terms of Service. If you do not agree,
            please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-secondary">
            2. Services Description
          </h2>
          <p>
            Amini Africa provides representation, verification, procurement,
            relocation, business support, and concierge services across
            Sub-Saharan Africa. Detailed service descriptions are available on
            our website.
          </p>

          <h2 className="text-2xl font-bold text-secondary">
            3. User Obligations
          </h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Use our services for lawful purposes only</li>
            <li>Not misuse or abuse our services</li>
            <li>Respect confidentiality agreements</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary">
            4. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of Amini Africa and is protected by
            applicable intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-secondary">
            5. Limitation of Liability
          </h2>
          <p>
            Amini Africa shall not be liable for any indirect, incidental,
            special, or consequential damages arising from the use of our
            services. Our total liability is limited to the amount paid for
            the specific service giving rise to the claim.
          </p>

          <h2 className="text-2xl font-bold text-secondary">
            6. Service Modifications
          </h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect
            of our services at any time. We will notify clients of significant
            changes.
          </p>

          <h2 className="text-2xl font-bold text-secondary">
            7. Governing Law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with
            applicable laws. Any disputes shall be resolved through
            arbitration.
          </p>

          <h2 className="text-2xl font-bold text-secondary">
            8. Changes to Terms
          </h2>
          <p>
            We may update these terms at any time. Continued use of our
            services after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold text-secondary">
            9. Contact
          </h2>
          <p>
            For questions about these terms, contact us at
            aminiafrica.co@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
