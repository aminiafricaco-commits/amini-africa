import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import { DesktopLayout } from "@/components/layout/desktop-layout";
import { MobileLayout } from "@/components/layout/mobile-layout";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/layout/page-transition";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amini Africa — Your Trusted Sub-Saharan Partner",
    template: "%s | Amini Africa",
  },
  description:
    "Trusted representation, verification, procurement, relocation, and business support services for diaspora Africans, investors, businesses, and global professionals across Sub-Saharan Africa.",
  keywords: [
    "diaspora services Africa",
    "property verification Africa",
    "concierge services Africa",
    "relocation services Africa",
    "procurement services Africa",
    "business support Africa",
    "trusted representative Africa",
    "local partner Africa",
    "sub-Saharan Africa services",
  ],
  openGraph: {
    title: "Amini Africa — Your Trusted Sub-Saharan Partner",
    description:
      "Trusted representation, verification, procurement, relocation, and business support services across Sub-Saharan Africa.",
    url: "https://aminiafrica.co",
    siteName: "Amini Africa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amini Africa — Your Trusted Sub-Saharan Partner",
    description:
      "Trusted representation and support services across Sub-Saharan Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://aminiafrica.co"),
  alternates: {
    canonical: "https://aminiafrica.co",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background antialiased">
        {/* Mobile layout: visible below lg */}
        <div className="block lg:hidden">
          <MobileLayout>
            <PageTransition>{children}</PageTransition>
          </MobileLayout>
        </div>

        {/* Desktop layout: visible at lg and above */}
        <div className="hidden lg:block">
          <DesktopLayout>
            <PageTransition>{children}</PageTransition>
            <Footer />
          </DesktopLayout>
        </div>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Amini Africa",
              url: "https://aminiafrica.co",
              email: "aminiafrica.co@gmail.com",
              telephone: "+254743634581",
              description:
                "Trusted representation, verification, procurement, relocation, and business support services across Sub-Saharan Africa.",
              areaServed: "Sub-Saharan Africa",
              priceRange: "$",
              sameAs: ["https://wa.me/254743634581"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254743634581",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        {/* WhatsApp button - shown on both */}
        <div className="hidden lg:block">
          <WhatsAppButton />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
