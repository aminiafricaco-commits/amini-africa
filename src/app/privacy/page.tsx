import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Amini Africa's privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-stone max-w-none space-y-6 text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground">
            1. Introduction
          </h2>
          <p>
            Amini Africa (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy and is committed to
            protecting your personal data. This privacy policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            2. Information We Collect
          </h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information (email, phone number, WhatsApp number)</li>
            <li>Country of residence</li>
            <li>Service requirements and preferences</li>
            <li>Communication history with our team</li>
            <li>Website usage data through analytics tools</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            3. How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide our services</li>
            <li>Schedule and manage consultations</li>
            <li>Send relevant information about our services</li>
            <li>Improve our website and service delivery</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            4. Data Protection
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of electronic storage or
            transmission is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            5. Third-Party Services
          </h2>
          <p>
            We use third-party services including Google Analytics, Google
            Forms, Calendly, and Tally Forms. These services have their own
            privacy policies governing data handling.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            6. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal
            data. You can withdraw consent at any time. Contact us to exercise
            these rights.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            7. Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at aminiafrica.co@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
