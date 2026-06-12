"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ClipboardList, CreditCard, Calendar, CheckCircle, ArrowRight, ExternalLink, Shield } from "lucide-react";

const TALLY_FORM_URL = "https://tally.so/r/Gx7eZp";
const CALENDLY_URL = "https://calendly.com/aminiafrica-co";
const PAYSTACK_URL = "https://paystack.shop/pay/67f-q5w53u";

function StepIndicator({ current }: { current: number }) {
  const steps = [
    { num: 1, label: "Questionnaire" },
    { num: 2, label: "Schedule" },
    { num: 3, label: "Payment" },
  ];
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                s.num < current
                  ? "bg-primary text-primary-foreground"
                  : s.num === current
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {s.num < current ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                s.num
              )}
            </div>
            <span
              className={`text-xs mt-2 font-medium ${
                s.num <= current ? "text-secondary" : "text-gray-400"
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`w-16 sm:w-24 h-0.5 mx-2 sm:mx-4 transition-colors duration-300 ${
                s.num < current ? "bg-primary" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "true";
  const [step, setStep] = useState(submitted ? 2 : 1);
  const [scheduled, setScheduled] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted && step === 1) {
      setStep(2);
    }
  }, [submitted, step]);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (
        e.data?.event === "calendly.event_scheduled" ||
        e.data?.event?.indexOf?.("calendly.event_scheduled") !== -1
      ) {
        setScheduled(true);
        setStep(3);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="min-h-screen bg-background pt-28 pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(10,22,40,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(10,22,40,0.03),transparent_50%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span className="text-primary font-medium text-xs tracking-widest uppercase">Get Started</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-3">
              Book a Consultation
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground max-w-lg mx-auto">
              Complete all three steps below. Each step unlocks the next automatically.
            </p>
          </div>

          <StepIndicator current={step} />

          {/* Step 1: Questionnaire */}
          <div
            className={`rounded-xl border p-8 mb-6 transition-all duration-500 ${
              step === 1
                ? "border-primary bg-white shadow-lg"
                : step > 1
                ? "border-green-200 bg-green-50"
                : "border-border bg-white"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  step > 1
                    ? "bg-green-500 text-white"
                    : "bg-white text-primary"
                }`}
              >
                {step > 1 ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <ClipboardList className="h-5 w-5" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-secondary text-lg mb-1">
                  Fill Questionnaire
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tell us about your needs so we can prepare for our call.
                </p>
                {step === 1 && (
                  <Link
                    href={TALLY_FORM_URL}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 active:scale-[0.97] transition-all duration-150"
                  >
                    Open Questionnaire <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
                {step > 1 && (
                  <p className="text-sm text-green-600 font-medium flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4" />
                    Completed
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Step 2: Schedule */}
          <div
            className={`rounded-xl border p-8 mb-6 transition-all duration-500 ${
              step === 2
                ? "border-primary bg-white shadow-lg"
                : step > 2
                ? "border-green-200 bg-green-50"
                : "border-border bg-white opacity-40 pointer-events-none"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  step > 2
                    ? "bg-green-500 text-white"
                    : "bg-white text-primary"
                }`}
              >
                {step > 2 ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <Calendar className="h-5 w-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-secondary text-lg mb-1">
                  Schedule Your Call
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pick a time that works for you. Once booked, the payment step
                  unlocks automatically.
                </p>
                {step === 2 && (
                  <div>
                    <div
                      ref={calendlyContainerRef}
                      className="calendly-inline-widget"
                      data-url={`${CALENDLY_URL}?embed_type=widget&hide_landing_page_details=1`}
                      style={{ minWidth: "320px", height: "700px" }}
                    />
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                      After scheduling, the payment step below will unlock
                      automatically. If it doesn&apos;t, click the manual button.
                    </p>
                  </div>
                )}
                {step > 2 && (
                  <p className="text-sm text-green-600 font-medium flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4" />
                    Scheduled
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Payment */}
          <div
            className={`rounded-xl border p-8 mb-6 transition-all duration-500 ${
              step >= 3 && scheduled
                ? "border-primary bg-white shadow-lg ring-1 ring-primary/20"
                : "border-border bg-white opacity-40 pointer-events-none"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                step >= 3 && scheduled ? "bg-white text-primary" : "bg-gray-100 text-gray-400"
              }`}>
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-secondary text-lg mb-1">
                  Complete Payment &mdash; $50
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure your consultation slot. Your booking is confirmed once
                  payment is received.
                </p>
                <div className="space-y-4">
                  <Link
                    href={PAYSTACK_URL}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 active:scale-[0.97] transition-all duration-150 shadow-lg"
                  >
                    <CreditCard className="h-5 w-5" />
                    Pay $50 Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Secure payment via Paystack. Visa, Mastercard, and M-PESA
                    accepted.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manual fallback */}
          {step === 2 && !scheduled && (
            <div className="text-center mt-4">
              <button
                onClick={() => { setScheduled(true); setStep(3); }}
                className="text-sm text-primary hover:underline font-medium"
              >
                I&apos;ve already scheduled &mdash; continue to payment &rarr;
              </button>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Secure & encrypted</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4 text-primary" />
              <span>Pay $50 via Paystack</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>30-min video call</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Questions?{" "}
              <Link
                href="https://wa.me/254743634581"
                target="_blank"
                className="text-primary font-medium hover:underline"
              >
                Chat on WhatsApp
              </Link>{" "}
              or email{" "}
              <Link
                href="mailto:aminiafrica.co@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                aminiafrica.co@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BookConsultationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background pt-28 pb-24 flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
