"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const teaTools = [
  {
    number: "01",
    english: "Gaiwan",
    chinese: "蓋碗",
    purpose: "A lidded bowl used to brew leaves with precision and openness.",
    meaning: "Heaven, human, and earth held as lid, bowl, and saucer.",
    used: "Used for warming, awakening, brewing, and pouring."
  },
  {
    number: "02",
    english: "Fairness Cup",
    chinese: "公道杯",
    purpose: "Receives brewed tea before serving so every cup has equal strength.",
    meaning: "A small ethics of hospitality: no guest receives a lesser cup.",
    used: "Used immediately after each infusion leaves the gaiwan."
  },
  {
    number: "03",
    english: "Tasting Cup",
    chinese: "品茗杯",
    purpose: "A small cup that concentrates aroma, temperature, and texture.",
    meaning: "The cup asks the drinker to slow the mouth and attention.",
    used: "Used after pouring from the fairness cup."
  },
  {
    number: "04",
    english: "Tea Tray",
    chinese: "茶盤",
    purpose: "A drained surface for water, vessels, and controlled movement.",
    meaning: "The stage of the ritual, containing overflow without noise.",
    used: "Used throughout the entire brewing sequence."
  },
  {
    number: "05",
    english: "Tea Presentation Vessel",
    chinese: "茶荷",
    purpose: "Displays dry leaves before brewing so form and fragrance can be read.",
    meaning: "A moment of respect before water changes the leaf.",
    used: "Used before warming and brewing, during the leaf presentation."
  },
  {
    number: "06",
    english: "Tea Scoop",
    chinese: "茶則",
    purpose: "Transfers dry leaves cleanly from vessel to gaiwan.",
    meaning: "Measured generosity, never careless abundance.",
    used: "Used when placing leaves into the warmed gaiwan."
  },
  {
    number: "07",
    english: "Tea Tongs",
    chinese: "茶夾",
    purpose: "Handles hot cups and keeps fingers away from the drinking rim.",
    meaning: "Care expressed through cleanliness and restraint.",
    used: "Used during warming, rinsing, and arranging cups."
  },
  {
    number: "08",
    english: "Tea Needle",
    chinese: "茶針",
    purpose: "Clears spouts and guides compressed leaves with delicacy.",
    meaning: "Precision without force.",
    used: "Used when a vessel or compressed tea needs gentle opening."
  },
  {
    number: "09",
    english: "Tea Cloth",
    chinese: "茶巾",
    purpose: "Wipes water marks and keeps the table visually quiet.",
    meaning: "Cleanliness as visual calm.",
    used: "Used between pours and whenever the table needs resetting."
  },
  {
    number: "10",
    english: "Waste Water Bowl",
    chinese: "水盂",
    purpose: "Receives rinse water, spent water, and the first discarded infusion.",
    meaning: "Release is part of refinement.",
    used: "Used during warming, rinsing, and clearing."
  },
  {
    number: "11",
    english: "Singing Bowl",
    chinese: "冥想鉢",
    purpose: "A sound object for entering stillness before tea.",
    meaning: "One tone marks the threshold between ordinary time and ritual time.",
    used: "Used before the first pour or during Stillness Mode."
  }
];

const ritualSteps = [
  {
    number: "01",
    title: "Warm the vessel",
    chinese: "溫杯",
    copy: "Heat prepares porcelain and announces that the table has changed state."
  },
  {
    number: "02",
    title: "Present the leaves",
    chinese: "賞茶",
    copy: "Before extraction, the leaf is seen: shape, fragrance, origin, season."
  },
  {
    number: "03",
    title: "Awaken the tea",
    chinese: "醒茶",
    copy: "A brief rinse opens compressed memory and releases the first breath."
  },
  {
    number: "04",
    title: "Brew",
    chinese: "注水",
    copy: "Water falls with intention. Temperature, angle, and time become design."
  },
  {
    number: "05",
    title: "Pour",
    chinese: "出湯",
    copy: "The liquor leaves the gaiwan at the moment aroma and body meet."
  },
  {
    number: "06",
    title: "Taste",
    chinese: "品茗",
    copy: "The first sip is not judged. It is received."
  }
];

const chapterPreviews = [
  {
    title: "The Song Room",
    chinese: "宋室",
    copy: "Dian cha, Jian ware, scholar restraint, and the quiet intelligence of black glaze."
  },
  {
    title: "Tea Atlas",
    chinese: "茶之地圖",
    copy: "Yunnan mist, Wuyi rock, Anxi orchid, West Lake spring, Taiwan alpine air, Uji shade."
  },
  {
    title: "Stillness Mode",
    chinese: "靜心茶室",
    copy: "A darkened chamber for bowl sound, breath pacing, steam, and mood-based tea."
  },
  {
    title: "Wisdom Collection",
    chinese: "東方人物智慧",
    copy: "Fu, Lu, Shou, Lu Yu, Su Shi, and brotherhood archetypes as subtle luxury symbols."
  },
  {
    title: "Meaningful Gifts",
    chinese: "禮之道",
    copy: "Settlement gifts, VIP client rituals, family blessings, and oath-inspired collections."
  }
];

export function ChazenHomeExperience() {
  const [activeTool, setActiveTool] = useState(teaTools[0]);
  const [activeStep, setActiveStep] = useState(ritualSteps[0]);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const closingBackground = {
    backgroundImage: `linear-gradient(90deg, rgba(16, 18, 15, 0.92), rgba(16, 18, 15, 0.72)), url("${basePath}/images/chazen-tea-room-hero-v2.png")`
  };

  return (
    <>
      <section id="philosophy" className="home-prologue">
        <div className="home-container home-prologue-grid">
          <div>
            <p className="home-caption">茶禪一味 / Philosophy</p>
            <h2>Tea is not a product. It is a room you enter.</h2>
          </div>
          <div className="home-prologue-copy">
            <p>
              CHAZEN treats tea as culture, meditation, hospitality, and return. Every object on
              the table has a role. Every pause has a purpose. Nothing is decorative unless it
              deepens attention.
            </p>
            <div className="home-principles">
              {["Ritual before commodity", "Stillness before spectacle", "Culture before trend"].map(
                (item) => (
                  <span key={item}>{item}</span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="tea-table" className="home-tea-table">
        <div className="home-container">
          <div className="home-section-head">
            <p className="home-caption">Chapter 03 / 茶席器物</p>
            <h2>The tea table is an instrument of attention.</h2>
          </div>
          <div className="tea-table-museum">
            <div className="tool-list" aria-label="Tea table tools">
              {teaTools.map((tool) => (
                <button
                  type="button"
                  key={tool.number}
                  className={activeTool.number === tool.number ? "is-active" : ""}
                  onClick={() => setActiveTool(tool)}
                >
                  <span>{tool.number}</span>
                  <strong>{tool.english}</strong>
                  <em>{tool.chinese}</em>
                </button>
              ))}
            </div>

            <div className="tea-table-stage" aria-label="Interactive top-down tea table">
              {teaTools.map((tool) => (
                <button
                  type="button"
                  key={tool.number}
                  className={`tea-piece piece-${tool.number} ${
                    activeTool.number === tool.number ? "is-active" : ""
                  }`}
                  onClick={() => setActiveTool(tool)}
                  aria-label={`${tool.english} ${tool.chinese}`}
                >
                  <span>{tool.number}</span>
                </button>
              ))}
              <div className="tea-table-grain" />
            </div>

            <article className="tool-detail">
              <p className="home-caption">Selected Object</p>
              <h3>{activeTool.chinese}</h3>
              <h4>{activeTool.english}</h4>
              <dl>
                <div>
                  <dt>Purpose</dt>
                  <dd>{activeTool.purpose}</dd>
                </div>
                <div>
                  <dt>Ritual meaning</dt>
                  <dd>{activeTool.meaning}</dd>
                </div>
                <div>
                  <dt>Used when</dt>
                  <dd>{activeTool.used}</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section id="gaiwan-ritual" className="home-ritual">
        <div className="home-container ritual-grid">
          <div className="ritual-copy">
            <p className="home-caption">Chapter 04 / 蓋碗沖茶</p>
            <h2>Six gestures. One slower room.</h2>
            <p>
              The gaiwan ceremony is not instruction. It is product storytelling for the senses:
              heat, leaf, water, sound, aroma, and the final quiet of the first sip.
            </p>
          </div>
          <div className="ritual-exhibit">
            <div className="ritual-object">
              <div className="ritual-gaiwan" />
              <div className="ritual-pour" />
              <div className="ritual-steam" />
            </div>
            <div className="ritual-step-panel">
              <p>{activeStep.number}</p>
              <h3>{activeStep.title}</h3>
              <strong>{activeStep.chinese}</strong>
              <span>{activeStep.copy}</span>
            </div>
          </div>
        </div>
        <div className="home-container ritual-rail">
          {ritualSteps.map((step) => (
            <button
              type="button"
              key={step.number}
              className={activeStep.number === step.number ? "is-active" : ""}
              onClick={() => setActiveStep(step)}
            >
              <span>{step.number}</span>
              {step.title}
              <em>{step.chinese}</em>
            </button>
          ))}
        </div>
      </section>

      <section className="home-chapters" id="chapter-index">
        <div className="home-container">
          <div className="home-section-head">
            <p className="home-caption">Museum Preview</p>
            <h2>Five rooms waiting beyond the first cup.</h2>
          </div>
          <div className="chapter-preview-grid">
            {chapterPreviews.map((chapter, index) => (
              <article key={chapter.title} className="chapter-preview">
                <span>{String(index + 5).padStart(2, "0")}</span>
                <h3>{chapter.title}</h3>
                <strong>{chapter.chinese}</strong>
                <p>{chapter.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-closing" style={closingBackground}>
        <div className="home-container home-closing-grid">
          <div>
            <p className="home-caption">Brand House</p>
            <h2>For homes, clients, families, and people who want a more beautiful way to pause.</h2>
          </div>
          <div>
            <p>
              CHAZEN brings Chinese tea culture, stillness, and meaningful ritual back into modern
              life through object, sound, story, and gift.
            </p>
            <a href={`${basePath}/contact/`} className="closing-link">
              Private inquiry <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
