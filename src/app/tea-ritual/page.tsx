import Link from "next/link";
import { ArrowRight, Gift, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { buildInquiryPath } from "@/lib/inquiry";
import { ritualFlow, ritualTypes } from "@/lib/site";

export const metadata = {
  title: "Tea Ritual"
};

export default function TeaRitualPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Tea ritual"
            title="Tea is not only a drink. It is a return to presence."
            copy="In Chinese tea culture, the cup holds more than flavour. It creates a pause: warm water, measured movement, aroma, quiet attention, and the first sip taken without rushing."
          />
          <div className="mt-12 max-w-4xl border-l border-leaf/20 pl-6 text-xl leading-10 text-ink/72 md:pl-10">
            Chazen translates traditional tea culture into modern calm living. The ritual
            can include tea, sound, breathing, and quiet reflection, so a few minutes at
            the table can feel deliberate, cinematic, and deeply personal.
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container">
          <SectionHeading
            eyebrow="Ritual flow"
            title="A simple sequence for the first cup."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ritualFlow.map((item) => (
              <article key={item.step} className="premium-card bg-porcelain p-7">
                <p className="eyebrow">{item.step}</p>
                <p className="display-title mt-5 text-3xl text-leaf">{item.title}</p>
                <p className="mt-5 text-sm leading-7 text-ink/62">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-porcelain">
        <div className="container grid gap-4 md:grid-cols-2">
          {ritualTypes.map((ritual) => (
            <article key={ritual.name} className="border-t border-ink/12 pt-7">
              <p className="display-title text-3xl text-leaf">{ritual.name}</p>
              <p className="mt-5 text-base leading-8 text-ink/64">{ritual.copy}</p>
              <p className="mt-6 text-sm font-semibold text-ink/72">{ritual.tone}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-leaf text-porcelain">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-stone">Next ritual layer</p>
            <h2 className="display-title mt-4 max-w-2xl text-4xl md:text-5xl">
              Soon, Chazen will help you discover the ritual your day needs.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/gift-box" className="button-secondary border-porcelain/30 text-porcelain">
              Explore Gift Box <Gift size={17} />
            </Link>
            <Link href="/ai-tea-guide" className="button-secondary border-porcelain/30 text-porcelain">
              Preview Assessment <Sparkles size={17} />
            </Link>
            <Link
              href={buildInquiryPath({
                type: "Tea recommendation",
                message: "I would like to inquire about a Chazen tea ritual or recommendation.",
                source: "Tea ritual page"
              })}
              className="button-light"
            >
              Inquire <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
