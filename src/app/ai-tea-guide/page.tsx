import Link from "next/link";
import { ArrowRight, Gift, MessageCircle, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { aiPromptCards } from "@/lib/site";

export const metadata = {
  title: "AI Tea Guide"
};

export default function AITeaGuidePage() {
  return (
    <main>
      <section className="section bg-leaf text-porcelain">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-stone">AI Tea Guide</p>
            <h1 className="display-title mt-4 text-5xl leading-[1] md:text-7xl">
              Cha, your AI Tea Guide.
            </h1>
            <p className="mt-6 text-lg leading-8 text-porcelain/72">
              A calm concierge-style guide for tea recommendations, Chinese tea culture,
              gift selection, and short ritual moments.
            </p>
          </div>
          <div className="border border-porcelain/15 bg-porcelain/8 p-8">
            <Sparkles className="text-stone" size={26} />
            <p className="display-title mt-6 text-3xl">Guidance with a quieter tone.</p>
            <p className="mt-5 text-base leading-8 text-porcelain/72">
              Cha helps customers understand tea, choose a thoughtful gift, and begin a
              few minutes of breathing, sound, and reflection without turning the ritual
              into another screen-heavy task.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What Cha can help with"
            title="Tea knowledge, gift confidence, and ritual support."
            copy="Cha will recommend tea by mood or moment, explain Chinese tea culture in plain language, support gift selection, and prepare the future Tea Ritual Assessment."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {aiPromptCards.map((prompt) => (
              <div key={prompt} className="premium-card bg-porcelain p-6">
                <MessageCircle className="text-moss" size={20} />
                <p className="mt-5 text-base font-semibold text-ink">{prompt}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/tea-ritual" className="button-primary">
              View ritual pathways <ArrowRight size={17} />
            </Link>
            <Link href="/gift-box" className="button-secondary">
              Choose a gift box <Gift size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
