import Link from "next/link";
import { ArrowRight, Building2, Check, MessageSquareText, PackageCheck, Truck } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { buildInquiryPath } from "@/lib/inquiry";

export const metadata = {
  title: "B2B Real Estate Gifting"
};

export default function B2BPage() {
  return (
    <main>
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <p className="eyebrow">Real estate settlement gifting</p>
            <h1 className="display-title mt-4 text-5xl leading-[1] md:text-7xl">
              A calm gift for a new beginning.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/66">
              Settlement is emotional. Chazen helps agencies replace generic hampers
              with a premium tea ritual that clients can open, use, and remember in
              their new home.
            </p>
            <Link
              href={buildInquiryPath({
                type: "Real estate settlement",
                message: "I would like to request a B2B sample for settlement gifting.",
                source: "B2B hero"
              })}
              className="button-primary mt-8"
            >
              Request B2B sample <ArrowRight size={17} />
            </Link>
          </div>
          <div className="border border-ink/10 bg-porcelain p-8 shadow-soft">
            <Building2 className="text-leaf" size={28} />
            <p className="display-title mt-6 text-4xl text-leaf">Settlement pilot</p>
            <p className="mt-5 text-base leading-8 text-ink/64">
              Each client receives the Chazen Tea Ritual Gift Box with premium loose-leaf
              tea, compact teaware or infuser, ritual guidance, QR sound card, brand story,
              and an optional agency congratulations message.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-porcelain">
        <div className="container">
          <SectionHeading
            eyebrow="Offer structure"
            title="Simple enough to pilot. Premium enough to feel considered."
            copy="The offer is designed for agencies that want a settlement gift with presence, story, and a repeatable client experience."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              "Premium Chazen Tea Ritual Gift Box",
              "Optional agency-branded congratulations card",
              "Pilot orders for selected settlement clients"
            ].map((item) => (
              <div key={item} className="premium-card bg-white p-6">
                <Check className="text-moss" size={20} />
                <p className="mt-5 text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="How it works"
            title="A three-step handover ritual for agency teams."
            copy="Keep the process operationally simple while giving clients a gift that feels personal after settlement."
          />
          <div className="grid gap-4">
            {[
              {
                icon: PackageCheck,
                title: "Choose gift box",
                copy: "Select the Chazen Tea Ritual Gift Box for a pilot group or recurring settlement program."
              },
              {
                icon: MessageSquareText,
                title: "Add agency message",
                copy: "Include a congratulations card with agency branding, adviser name, or a personal note."
              },
              {
                icon: Truck,
                title: "Deliver after settlement",
                copy: "Present the gift at handover or arrange delivery so the first tea ritual begins in the new home."
              }
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="border-t border-ink/12 py-7">
                <div className="flex gap-5">
                  <Icon className="mt-1 shrink-0 text-moss" size={22} />
                  <div>
                    <p className="display-title text-3xl text-leaf">{title}</p>
                    <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#e8decc]">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="B2B inquiry"
            title="Discuss a sample or pilot order."
            copy="Submit your inquiry and our team will contact you to discuss pre-orders, B2B gifting, agency cards, and partnership opportunities."
          />
          <InquiryForm
            defaultType="Real estate settlement"
            defaultMessage="I would like to discuss a B2B sample or settlement gifting pilot."
            sourceLabel="B2B real estate gifting page"
          />
        </div>
      </section>
    </main>
  );
}
