import { InquiryForm } from "@/components/InquiryForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Contact / inquiry"
            title="Pre-order, request a B2B sample, or discuss partnership."
            copy="Submit your inquiry and our team will contact you to discuss pre-orders, B2B gifting, or partnership opportunities."
          />
          <InquiryForm sourceLabel="Contact page" />
        </div>
      </section>
    </main>
  );
}
