import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="About Chazen"
            title="A premium tea ritual brand for calm living and meaningful gifting."
            copy="Chazen draws from Chinese tea culture and presents it through modern design, gifting, sound ritual, and future AI-guided personalization."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              ["Mission", "Help people reconnect through tea, ritual, sound, and mindful gifting."],
              ["Vision", "Bring Chinese tea culture into contemporary calm living."],
              ["Principle", "Ritual before commodity. Calm luxury before loud selling."]
            ].map(([title, copy]) => (
              <div key={title} className="border-t border-ink/12 pt-7">
                <p className="display-title text-3xl text-leaf">{title}</p>
                <p className="mt-5 text-sm leading-7 text-ink/62">{copy}</p>
              </div>
            ))}
          </div>
          <Link href="/gift-box" className="button-primary mt-12">
            Explore the first gift box <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
