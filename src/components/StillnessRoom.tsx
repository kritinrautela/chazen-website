"use client";

import { useEffect, useMemo, useState } from "react";
import { Pause, Play, Timer, Volume2 } from "lucide-react";

const moods = [
  {
    name: "Scattered",
    tea: "Wuyi Rock Tea",
    copy: "Mineral warmth and roasted depth for returning attention to the body."
  },
  {
    name: "Heavy",
    tea: "Longjing",
    copy: "Spring green clarity for a lighter, cleaner beginning."
  },
  {
    name: "Restless",
    tea: "High Mountain Oolong",
    copy: "Soft alpine aroma for slowing the edge of the day."
  }
];

export function StillnessRoom() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);
  const [mood, setMood] = useState(moods[0]);
  const [rings, setRings] = useState(0);

  useEffect(() => {
    if (!running || seconds === 0) {
      return;
    }

    const interval = window.setInterval(() => setSeconds((value) => value - 1), 1000);
    return () => window.clearInterval(interval);
  }, [running, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setRunning(false);
    }
  }, [seconds]);

  const timeLabel = useMemo(() => {
    const mins = Math.floor(seconds / 60);
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }, [seconds]);

  function toggleMeditation() {
    if (seconds === 0) {
      setSeconds(60);
      setRunning(true);
      return;
    }

    setRunning((value) => !value);
  }

  function strikeBowl() {
    setRings((value) => value + 1);

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(196, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(98, context.currentTime + 2.8);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 3.2);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 3.3);
  }

  return (
    <div className="stillness-room">
      <div className="stillness-stage">
        <div className={`breath-orb ${running ? "is-breathing" : ""}`}>
          <span>{running ? "Inhale / Exhale" : "One Breath"}</span>
        </div>
        <button type="button" className="bowl-button" onClick={strikeBowl}>
          <Volume2 size={18} />
          Strike bowl
          <span key={rings} className="bowl-ripple" />
        </button>
        <div className="stillness-steam" aria-hidden="true" />
      </div>

      <div className="stillness-panel">
        <p className="museum-label text-brass">60-second tea meditation</p>
        <p className="display-title mt-5 text-7xl leading-none text-porcelain">{timeLabel}</p>
        <p className="mt-5 text-sm leading-7 text-porcelain/64">
          Let the first sound mark the beginning. Watch the breath expand and release. Return to
          the cup before returning to the day.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="button-light" onClick={toggleMeditation}>
            {running ? <Pause size={17} /> : <Play size={17} />}
            {running ? "Pause" : seconds === 0 ? "Restart" : "Begin"}
          </button>
          <button
            type="button"
            className="button-ghost"
            onClick={() => {
              setSeconds(60);
              setRunning(false);
            }}
          >
            <Timer size={17} />
            Reset
          </button>
        </div>
        <div className="mood-selector">
          {moods.map((item) => (
            <button
              type="button"
              key={item.name}
              className={mood.name === item.name ? "is-active" : ""}
              onClick={() => setMood(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="tea-recommendation">
          <p>Recommended tea</p>
          <strong>{mood.tea}</strong>
          <span>{mood.copy}</span>
        </div>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
