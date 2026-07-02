"use client";

import Image from "next/image";

type StillnessPracticeProps = {
  visualSrc: string;
  onStart: () => void;
  onPlayBowl: () => void;
  onStop: () => void;
  onMood: () => void;
  onWatchRoom: () => void;
};

export function StillnessPractice({ visualSrc, onStart, onPlayBowl, onStop, onMood, onWatchRoom }: StillnessPracticeProps) {
  return (
    <article id="stillness-mode" className="stillness-panel stillness-practice-panel">
      <div className="stillness-image-frame" aria-hidden="true">
        <Image
          src={visualSrc}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 38vw"
          className="stillness-image"
        />
      </div>
      <div className="stillness-copy-frame">
        <p className="museum-kicker">Chapter 08 / Stillness Mode / 靜心茶室</p>
        <h2>A 3-minute tea breathing ritual for returning without performance.</h2>
        <p lang="zh-Hant">吸氣，回到茶。呼氣，回到自己。</p>
        <div className="stillness-practice-stage" aria-hidden="true">
          <div className="practice-orb">
            <span>4</span>
            <small>Inhale</small>
          </div>
          <div className="practice-steam" />
          <div className="bowl-stage">
            <span className="bowl-rim" />
            <span className="bowl-body" />
            <span className="bowl-smoke" />
          </div>
          <div className="practice-exhale">
            <span>6</span>
            <small>Exhale</small>
          </div>
        </div>
        <div className="stillness-options">
          {["Hold the Cup 捧盞", "Breathe With Steam 隨煙而息", "Notice Aroma 聞香", "Return To Stillness 回靜", "Drink Slowly 慢品"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="chapter-actions">
          <button type="button" className="dark-cta compact" onClick={onStart}>
            Start 60-Second Practice <span lang="zh-Hant">開始一分鐘靜心</span>
          </button>
          <button type="button" className="dark-cta compact" onClick={onPlayBowl}>
            Play Singing Bowl
          </button>
          <button type="button" className="dark-cta compact" onClick={onWatchRoom}>
            Watch Stillness Room
          </button>
          <button type="button" className="dark-cta compact" onClick={onMood}>
            Tea Recommendation
          </button>
          <button type="button" className="dark-cta compact" onClick={onStop}>
            Silent Mode
          </button>
        </div>
      </div>
    </article>
  );
}
