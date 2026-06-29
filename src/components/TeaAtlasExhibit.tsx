"use client";

import { useState } from "react";

const origins = [
  {
    name: "Yunnan Pu'er",
    cn: "雲南普洱",
    x: "24%",
    y: "70%",
    altitude: "1,200-2,000m",
    climate: "Mist, old forest, humid mountain air",
    terroir: "Ancient tea trees, red earth, deep microbial aging",
    type: "Sheng and shou Pu'er",
    process: "Sun-dried maocha, compressed, aged",
    story: "Caravan tea, mountain villages, and the long patience of transformation.",
    ritual: "Clay pot, slow rinse, many short infusions"
  },
  {
    name: "Fujian Wuyi",
    cn: "武夷岩茶",
    x: "67%",
    y: "52%",
    altitude: "300-700m",
    climate: "Rock valley, mineral mist, warm rain",
    terroir: "Zhengyan cliff soil, orchid aroma, roasted stone character",
    type: "Rock oolong",
    process: "Withered, shaken, oxidized, charcoal roasted",
    story: "A tea of cliffs and scholar paths, remembered for yan yun, the rhyme of rock.",
    ritual: "Small gaiwan, high leaf ratio, fragrant cup"
  },
  {
    name: "Anxi Tieguanyin",
    cn: "安溪鐵觀音",
    x: "63%",
    y: "60%",
    altitude: "600-1,000m",
    climate: "Cool hills, cloud, monsoon freshness",
    terroir: "Floral lift, creamy body, bright green mountain fragrance",
    type: "Oolong",
    process: "Light oxidation, rolling, careful firing",
    story: "The Iron Goddess of Mercy, refined through repetition and hand memory.",
    ritual: "Porcelain gaiwan, clear water, attentive aroma"
  },
  {
    name: "Hangzhou Longjing",
    cn: "杭州龍井",
    x: "72%",
    y: "43%",
    altitude: "100-300m",
    climate: "Lake humidity, spring fog, tender sun",
    terroir: "Chestnut, bean blossom, soft green sweetness",
    type: "Green tea",
    process: "Hand pan-fired flat leaf",
    story: "West Lake elegance: court tribute, spring picking, quiet clarity.",
    ritual: "Glass cup, lower temperature, watch the leaf fall"
  },
  {
    name: "Huangshan / Keemun",
    cn: "黃山 / 祁門",
    x: "69%",
    y: "47%",
    altitude: "600-1,200m",
    climate: "Granite peaks, cloud sea, cool rain",
    terroir: "Orchid, pine, mineral freshness, honeyed red tea depth",
    type: "Green tea and black tea",
    process: "Pan-fired greens; withered and oxidized Keemun",
    story: "A mountain of poets, ink landscapes, and fragrant red tea.",
    ritual: "Quiet cup, low light, mountain-water attention"
  },
  {
    name: "Chaozhou Dancong",
    cn: "潮州鳳凰單叢",
    x: "65%",
    y: "68%",
    altitude: "600-1,400m",
    climate: "Phoenix Mountain cloud, warm coastal air",
    terroir: "Single-bush fragrance: honey orchid, almond, magnolia",
    type: "Dancong oolong",
    process: "Single cultivar harvest, oxidation, roasting",
    story: "A tea of individual trees and intense gongfu hospitality.",
    ritual: "Chaozhou gongfu, tiny cups, fast precise pours"
  },
  {
    name: "Taiwan High Mountain",
    cn: "台灣高山烏龍",
    x: "78%",
    y: "69%",
    altitude: "1,000-2,600m",
    climate: "High fog, cool nights, clean mountain air",
    terroir: "Milky texture, alpine florals, luminous finish",
    type: "High mountain oolong",
    process: "Light oxidation, ball rolling, gentle roasting",
    story: "Modern mountain craft, where elevation becomes softness.",
    ritual: "Porcelain or glass, wide aroma pause"
  },
  {
    name: "Uji Matcha",
    cn: "宇治抹茶",
    x: "87%",
    y: "34%",
    altitude: "50-250m",
    climate: "River mist, shade cultivation, temperate rain",
    terroir: "Umami, vivid green, powdered silk",
    type: "Tencha / matcha",
    process: "Shade-grown, steamed, dried, stone-milled",
    story: "A Japanese tea room discipline shaped by shade, whisk, and silence.",
    ritual: "Chawan, chasen, slow breath before whisking"
  }
];

export function TeaAtlasExhibit() {
  const [active, setActive] = useState(origins[0]);

  return (
    <div className="atlas-exhibit">
      <div className="atlas-map" aria-label="Interactive tea origin map">
        <div className="atlas-landmass" />
        {origins.map((origin) => (
          <button
            key={origin.name}
            type="button"
            className={`atlas-point ${active.name === origin.name ? "is-active" : ""}`}
            style={{ left: origin.x, top: origin.y }}
            onClick={() => setActive(origin)}
          >
            <span>{origin.name}</span>
          </button>
        ))}
      </div>
      <article className="atlas-card">
        <p className="museum-label">Selected Origin</p>
        <h2 className="display-title mt-4 text-5xl leading-none text-ink">{active.cn}</h2>
        <p className="mt-2 text-xl font-semibold text-leaf">{active.name}</p>
        <dl className="atlas-facts">
          <div>
            <dt>Altitude</dt>
            <dd>{active.altitude}</dd>
          </div>
          <div>
            <dt>Climate</dt>
            <dd>{active.climate}</dd>
          </div>
          <div>
            <dt>Tea Type</dt>
            <dd>{active.type}</dd>
          </div>
          <div>
            <dt>Process</dt>
            <dd>{active.process}</dd>
          </div>
        </dl>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="museum-label text-moss">Terroir</p>
            <p className="mt-3 text-sm leading-7 text-ink/64">{active.terroir}</p>
          </div>
          <div>
            <p className="museum-label text-moss">Recommended Ritual</p>
            <p className="mt-3 text-sm leading-7 text-ink/64">{active.ritual}</p>
          </div>
        </div>
        <p className="mt-8 border-l border-clay/35 pl-5 text-base leading-8 text-ink/72">
          {active.story}
        </p>
      </article>
    </div>
  );
}
