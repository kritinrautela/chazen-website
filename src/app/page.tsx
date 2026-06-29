import Image from "next/image";
import { ChazenHomeExperience } from "@/components/ChazenHomeExperience";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="home-museum">
      <section className="home-hero" aria-labelledby="home-title">
        <Image
          src={`${basePath}/images/chazen-hero-gongfu-room-v3.png`}
          alt="A dark wooden Chinese tea room with a real gongfu tea table, gaiwan, fairness cup, tasting cups, tea tray, singing bowl, steam, and garden morning light."
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-vignette" />
        <div className="home-hero-inner">
          <p className="home-kicker">Chapter 01 / The Arrival</p>
          <h1 id="home-title" className="home-title">
            CHAZEN <span>茶禪</span>
          </h1>
          <div className="home-tagline">
            <p>
              One Cup.
              <br />
              One Breath.
              <br />
              One Return.
            </p>
            <p lang="zh-Hant">
              一盞茶，
              <br />
              一口氣，
              <br />
              回到當下。
            </p>
          </div>
          <a href="#tea-table" className="home-cta">
            Enter the tea room
          </a>
        </div>
      </section>

      <ChazenHomeExperience />
    </main>
  );
}
