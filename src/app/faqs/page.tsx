import type { Metadata } from "next";
import { FAQsSection } from "@/components/sections/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Amini Africa's representation, verification, procurement, relocation, and business support services across Sub-Saharan Africa.",
};

const faqs = [
  {
    question: "What is Amini Africa?",
    answer:
      "Amini Africa is a trusted representation and support service company serving diaspora Africans, international investors, businesses, NGOs, and global professionals across Sub-Saharan Africa. We act as your local partner on the ground, handling verification, procurement, relocation, business support, and concierge services.",
  },
  {
    question: "How does Amini Africa work?",
    answer:
      "You book a free consultation, we discuss your requirements, our local team executes on the ground, and you receive regular updates and comprehensive reports. It is that simple.",
  },
  {
    question: "What countries do you operate in?",
    answer:
      "We currently operate across multiple countries in Sub-Saharan Africa. Contact us to discuss your specific location needs, and we will confirm our ability to support you there.",
  },
  {
    question: "How do I know I can trust Amini Africa?",
    answer:
      "We build trust through transparency, professional reporting, regular communication, and verifiable results. Every engagement includes detailed documentation, photos, and progress updates. We also provide client testimonials and case studies demonstrating our track record.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the scope and complexity of your requirements. We provide transparent quotes after an initial consultation. There are no hidden fees, and we will always confirm pricing before starting any work.",
  },
  {
    question: "Can you verify a property for me before I buy?",
    answer:
      "Yes. Our property verification services include title verification, land verification, ownership checks, site inspections, and comprehensive due diligence reports. We will personally visit the property, review documents, and provide you with a detailed assessment.",
  },
  {
    question: "Do you help with relocation to Africa?",
    answer:
      "Yes. We provide end-to-end relocation support including airport transfers, accommodation research, school research, utility setup, vehicle arrangements, and settling-in services. We can help you relocate smoothly to multiple countries in Sub-Saharan Africa.",
  },
  {
    question: "Can you help me start a business in Africa?",
    answer:
      "Yes. Our business support services include company registration assistance, market research, compliance support, permit assistance, and ongoing operational support. We help you navigate local regulations and establish your business presence.",
  },
  {
    question: "How do I contact Amini Africa?",
    answer:
      "You can book a free consultation through our website, email us directly, or reach us on WhatsApp. We aim to respond to all inquiries within 24 hours.",
  },
  {
    question: "Do you offer ongoing support for existing clients?",
    answer:
      "Yes. We build long-term relationships with our clients. Whether you need ongoing property management, regular site inspections, or continuous business support, we offer retainer-based services for our regular clients.",
  },
  {
    question: "What if I need services in a location you don't currently cover?",
    answer:
      "Contact us anyway. We are continuously expanding our network and may be able to arrange support in additional locations through our growing partner network.",
  },
  {
    question: "How do I pay for services?",
    answer:
      "We accept international bank transfers and provide detailed invoices for all services. Payment terms are agreed upon before work begins.",
  },
];

export default function FAQsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about Amini Africa and how we can
            support you across Sub-Saharan Africa.
          </p>
        </div>
        <FAQsSection faqs={faqs} />
      </div>
    </div>
  );
}
