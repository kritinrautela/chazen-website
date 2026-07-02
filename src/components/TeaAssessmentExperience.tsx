"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { buildInquiryPath } from "@/lib/inquiry";

type AssessmentOption = {
  label: string;
  value: string;
  chinese?: string;
};

type AssessmentQuestion = {
  id: string;
  eyebrow: string;
  question: string;
  chinese: string;
  options: AssessmentOption[];
};

const questions: AssessmentQuestion[] = [
  {
    id: "mood",
    eyebrow: "01 / Present State",
    question: "What is your current mood?",
    chinese: "你此刻的狀態是什麼？",
    options: [
      { label: "Tired", value: "tired", chinese: "疲憊" },
      { label: "Anxious", value: "anxious", chinese: "焦躁" },
      { label: "Focused", value: "focused", chinese: "專注" },
      { label: "Celebratory", value: "celebratory", chinese: "慶賀" },
      { label: "Reflective", value: "reflective", chinese: "沉思" },
      { label: "Social", value: "social", chinese: "待客" }
    ]
  },
  {
    id: "time",
    eyebrow: "02 / Ritual Time",
    question: "When do you usually drink tea?",
    chinese: "你通常在什麼時候喝茶？",
    options: [
      { label: "Morning", value: "morning", chinese: "清晨" },
      { label: "Afternoon", value: "afternoon", chinese: "午後" },
      { label: "Evening", value: "evening", chinese: "夜晚" },
      { label: "After Work", value: "after-work", chinese: "下班後" },
      { label: "With Guests", value: "guests", chinese: "與客同飲" },
      { label: "Before Sleep", value: "before-sleep", chinese: "睡前" }
    ]
  },
  {
    id: "taste",
    eyebrow: "03 / Taste Direction",
    question: "Which taste direction do you prefer?",
    chinese: "你偏好的味覺方向是？",
    options: [
      { label: "Floral", value: "floral", chinese: "花香" },
      { label: "Roasted", value: "roasted", chinese: "焙火" },
      { label: "Earthy", value: "earthy", chinese: "陳韻" },
      { label: "Smoky", value: "smoky", chinese: "煙燻" },
      { label: "Creamy", value: "creamy", chinese: "奶香" },
      { label: "Fresh", value: "fresh", chinese: "清鮮" },
      { label: "Sweet Aftertaste", value: "sweet-aftertaste", chinese: "回甘" }
    ]
  },
  {
    id: "recipient",
    eyebrow: "04 / Recipient",
    question: "Are you buying for yourself or as a gift?",
    chinese: "這份茶是為自己，還是為他人？",
    options: [
      { label: "Myself", value: "myself", chinese: "自己" },
      { label: "Partner", value: "partner", chinese: "伴侶" },
      { label: "Family", value: "family", chinese: "家人" },
      { label: "Elder", value: "elder", chinese: "長輩" },
      { label: "Client", value: "client", chinese: "客戶" },
      { label: "Corporate Team", value: "corporate", chinese: "企業團隊" },
      { label: "Settlement Gift", value: "settlement", chinese: "交房禮" }
    ]
  },
  {
    id: "occasion",
    eyebrow: "05 / Occasion",
    question: "What is the occasion?",
    chinese: "這次送茶或飲茶的緣由是？",
    options: [
      { label: "Daily Ritual", value: "daily", chinese: "日常茶席" },
      { label: "Housewarming", value: "housewarming", chinese: "入宅" },
      { label: "Settlement Gift", value: "settlement", chinese: "交房禮" },
      { label: "Thank-You Gift", value: "thank-you", chinese: "答謝" },
      { label: "Business Relationship", value: "business", chinese: "商務關係" },
      { label: "Birthday", value: "birthday", chinese: "生辰" },
      { label: "Wellness Reset", value: "wellness", chinese: "靜心重整" }
    ]
  },
  {
    id: "ritual",
    eyebrow: "06 / Ritual Shape",
    question: "What kind of ritual do you want?",
    chinese: "你想要哪一種茶禪形式？",
    options: [
      { label: "Quick Daily Cup", value: "daily-cup", chinese: "日常一杯" },
      { label: "Formal Gaiwan", value: "gaiwan", chinese: "蓋碗儀式" },
      { label: "Meditation", value: "meditation", chinese: "靜心茶室" },
      { label: "Shared Tea Table", value: "shared-table", chinese: "共享茶席" },
      { label: "Premium Gift Box", value: "gift-box", chinese: "高級茶禮" }
    ]
  },
  {
    id: "caffeine",
    eyebrow: "07 / Caffeine",
    question: "How sensitive are you to caffeine?",
    chinese: "你對咖啡因敏感嗎？",
    options: [
      { label: "Low", value: "low", chinese: "低敏感" },
      { label: "Medium", value: "medium", chinese: "中等" },
      { label: "High", value: "high", chinese: "高敏感" },
      { label: "No Concern", value: "no-concern", chinese: "不介意" }
    ]
  },
  {
    id: "outcome",
    eyebrow: "08 / Desired Return",
    question: "What emotional outcome do you want?",
    chinese: "你希望這杯茶帶來什麼？",
    options: [
      { label: "Calm", value: "calm", chinese: "安定" },
      { label: "Focus", value: "focus", chinese: "專注" },
      { label: "Blessing", value: "blessing", chinese: "祝福" },
      { label: "Energy", value: "energy", chinese: "精神" },
      { label: "Status", value: "status", chinese: "體面" },
      { label: "Connection", value: "connection", chinese: "情誼" },
      { label: "Return To Self", value: "return", chinese: "回到自己" }
    ]
  }
];

type Answers = Record<string, string>;

function buildResult(answers: Answers) {
  const wantsGift = ["client", "corporate", "settlement", "elder", "family"].includes(answers.recipient);
  const wantsStillness = answers.ritual === "meditation" || answers.outcome === "calm" || answers.outcome === "return";
  const avoidsCaffeine = answers.caffeine === "high" || answers.time === "before-sleep";

  if (wantsGift || answers.occasion === "settlement" || answers.occasion === "business") {
    return {
      temperament: "The Diplomatic Gift Host",
      chinese: "禮席主人",
      tea: answers.taste === "fresh" ? "Longjing 龍井" : "Da Hong Pao 大紅袍",
      ritual: "Formal gaiwan service with a handwritten blessing card.",
      gift: answers.recipient === "settlement" ? "Real Estate Settlement Gift" : "Corporate / VIP Gift",
      collection: answers.outcome === "blessing" ? "Fu Lu Shou Blessing Collection" : "Guan Yu Loyalty Collection",
      sound: "Tea Room Ambience with one opening bowl tone.",
      note: "Not every tea is chosen by taste alone. Some are chosen for the person receiving it."
    };
  }

  if (wantsStillness || avoidsCaffeine) {
    return {
      temperament: "The Quiet Returner",
      chinese: "歸靜之人",
      tea: avoidsCaffeine ? "Bai Hao Yin Zhen 白毫銀針" : "High Mountain Oolong 高山烏龍",
      ritual: "A 3-minute breathing cup with steam, silence, and one slow pour.",
      gift: "Personal Ritual Set",
      collection: "Shou Longevity / Stillness Set",
      sound: "Singing Bowl, then Silent Mode.",
      note: "Before the first sip, the ritual has already begun."
    };
  }

  if (answers.taste === "earthy" || answers.time === "evening") {
    return {
      temperament: "The Deep Listener",
      chinese: "深聽者",
      tea: "Pu'er 普洱",
      ritual: "Slow evening infusions after one rinse to awaken the leaf.",
      gift: "Family Blessing Gift",
      collection: "Lu Yu Scholar Set",
      sound: "Soft rain or quiet tea room ambience.",
      note: "Some teas do not rush to impress. They ask for time, and repay it."
    };
  }

  return {
    temperament: "The Clear Morning Scholar",
    chinese: "清晨文士",
    tea: answers.taste === "roasted" ? "Tie Guan Yin 鐵觀音" : "Longjing 龍井",
    ritual: "A clean morning cup in porcelain before work, writing, or a decision.",
    gift: "Personal Ritual Set",
    collection: "Lu Prosperity / Focus Collection",
    sound: "Tea pouring once, then silence.",
    note: "Clarity is a luxury when the day has not yet become loud."
  };
}

export function TeaAssessmentExperience({ basePath }: { basePath: string }) {
  const [answers, setAnswers] = useState<Answers>({});
  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === questions.length;
  const result = useMemo(() => buildResult(answers), [answers]);

  return (
    <main className="assessment-page">
      <section className="assessment-hero" aria-labelledby="assessment-title">
        <Image
          src={`${basePath}/images/chazen-hero-gongfu-room-v3.png`}
          alt="A dark premium Chinese tea room prepared for a private tea assessment."
          fill
          priority
          sizes="100vw"
        />
        <div className="assessment-hero-shade" />
        <div className="assessment-hero-inner">
          <p className="museum-kicker">CHAZEN Ritual Assessment / 茶禪風格評估</p>
          <h1 id="assessment-title">Find the tea, ritual, and gift direction that fit the person.</h1>
          <p lang="zh-Hant">以心境、時辰、味覺與送禮對象，定一席真正合適的茶。</p>
          <div className="assessment-hero-meta">
            <span>8 Questions</span>
            <span>Personal Tea Temperament</span>
            <span>$25 Profile Coming Soon</span>
          </div>
        </div>
      </section>

      <section className="museum-section assessment-room">
        <div className="museum-container assessment-layout">
          <aside className="assessment-progress-panel" aria-label="Assessment progress">
            <p className="museum-kicker">Progress / 進度</p>
            <strong>{answeredCount} / {questions.length}</strong>
            <div className="assessment-progress-track">
              <span style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
            </div>
            <p>Full personalised tea profile coming soon — private recommendations available by inquiry.</p>
            <button type="button" onClick={() => setAnswers({})}>
              <RotateCcw size={15} aria-hidden="true" />
              Reset Assessment
            </button>
          </aside>

          <div className="assessment-questions">
            {questions.map((question) => (
              <fieldset key={question.id} className="assessment-question">
                <legend>
                  <span>{question.eyebrow}</span>
                  <strong>{question.question}</strong>
                  <em lang="zh-Hant">{question.chinese}</em>
                </legend>
                <div className="assessment-options">
                  {question.options.map((option) => (
                    <label key={option.value} className={answers[question.id] === option.value ? "is-selected" : ""}>
                      <input
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={answers[question.id] === option.value}
                        onChange={() => setAnswers((current) => ({ ...current, [question.id]: option.value }))}
                      />
                      <span>{option.label}</span>
                      {option.chinese && <em lang="zh-Hant">{option.chinese}</em>}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>

          <aside className={`assessment-result-panel ${complete ? "is-complete" : ""}`} aria-live="polite">
            <p className="museum-kicker">Assessment Result / 評估結果</p>
            <div className="assessment-result-seal" aria-hidden="true">
              茶
            </div>
            {complete ? (
              <>
                <h2>{result.temperament}</h2>
                <h3 lang="zh-Hant">{result.chinese}</h3>
                <p>{result.note}</p>
                <dl>
                  <div>
                    <dt>Recommended Tea</dt>
                    <dd>{result.tea}</dd>
                  </div>
                  <div>
                    <dt>Ritual Style</dt>
                    <dd>{result.ritual}</dd>
                  </div>
                  <div>
                    <dt>Gift Direction</dt>
                    <dd>{result.gift}</dd>
                  </div>
                  <div>
                    <dt>Suggested Collection</dt>
                    <dd>{result.collection}</dd>
                  </div>
                  <div>
                    <dt>Sound Pairing</dt>
                    <dd>{result.sound}</dd>
                  </div>
                </dl>
                <div className="assessment-actions">
                  <a
                    href={buildInquiryPath({
                      basePath,
                      type: "Tea recommendation",
                      message: `I would like a private recommendation based on my ${result.temperament} assessment profile.`,
                      source: "Tea assessment"
                    })}
                  >
                    Request Private Recommendation <ArrowRight size={15} aria-hidden="true" />
                  </a>
                  <a href={`${basePath}/#meaningful-gifts`}>
                    Design a Gift Box <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2>Your profile is forming.</h2>
                <p>Answer all 8 questions to reveal your tea temperament, ritual style, gift direction, and sound pairing.</p>
                <p lang="zh-Hant">完成八題後，茶禪將顯示你的茶性、儀式、送禮方向與靜心聲音。</p>
              </>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
