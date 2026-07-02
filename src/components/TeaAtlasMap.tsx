"use client";

import Image from "next/image";
import type { TeaOrigin } from "@/data/teaOrigins";

type TeaAtlasMapProps = {
  origins: TeaOrigin[];
  activeOrigin: TeaOrigin;
  visualSrc: string;
  onSelect: (origin: TeaOrigin) => void;
  onExplore: (origin: TeaOrigin) => void;
  onOpenMap: () => void;
};

const markerPositions: Record<string, { x: number; y: number }> = {
  Yunnan: { x: 30, y: 70 },
  "Fujian Wuyi": { x: 66, y: 60 },
  Anxi: { x: 69, y: 67 },
  Hangzhou: { x: 64, y: 49 },
  Anhui: { x: 57, y: 47 },
  Chaozhou: { x: 72, y: 74 },
  Taiwan: { x: 82, y: 72 },
  Uji: { x: 89, y: 41 }
};

export function TeaAtlasMap({ origins, activeOrigin, visualSrc, onSelect, onExplore, onOpenMap }: TeaAtlasMapProps) {
  const originClass = activeOrigin.name.toLowerCase().replaceAll(" ", "-");
  const activePosition = markerPositions[activeOrigin.name] ?? { x: 50, y: 50 };

  return (
    <article className={`atlas-panel atlas-origin-${originClass}`}>
      <p className="museum-kicker">Chapter 07 / Tea Atlas / 茶之地圖</p>
      <h2>Origin is not a coordinate. It is climate remembered by leaf.</h2>
      <div className="atlas-visual-study">
        <div className="atlas-map" aria-label="Highlighted tea regions">
          <span className="atlas-paper-grain" aria-hidden="true" />
          <svg className="atlas-map-silhouette" viewBox="0 0 100 100" aria-hidden="true">
            <path
              className="atlas-land china-core"
              d="M23 27 32 18 47 16 59 20 70 18 79 28 76 41 83 49 77 63 72 77 59 82 48 78 38 84 27 74 20 62 13 51 18 39Z"
            />
            <path className="atlas-land tibet-yunnan" d="M18 52 27 44 37 48 38 61 31 73 20 70 11 61Z" />
            <path className="atlas-land coast" d="M65 45 77 48 82 58 77 72 69 75 65 64Z" />
            <path className="atlas-land taiwan" d="M82 67 C87 70 88 76 84 81 C80 77 78 71 82 67Z" />
            <path className="atlas-land japan" d="M89 30 C96 35 95 45 88 49 C85 43 84 36 89 30Z" />
            <path className="atlas-river" d="M28 48 C39 44 52 50 66 46" />
            <path className="atlas-river" d="M34 66 C45 59 58 64 71 58" />
            <line
              className="atlas-active-line"
              x1={activePosition.x}
              y1={activePosition.y}
              x2="87"
              y2="22"
            />
          </svg>
          {origins.map((origin) => (
            <button
              type="button"
              key={origin.name}
              className={activeOrigin.name === origin.name ? "is-active" : ""}
              style={{
                left: `${markerPositions[origin.name]?.x ?? 50}%`,
                top: `${markerPositions[origin.name]?.y ?? 50}%`
              }}
              onClick={() => onSelect(origin)}
              aria-pressed={activeOrigin.name === origin.name}
            >
              <span>{origin.name}</span>
              <em lang="zh-Hant">{origin.chinese}</em>
            </button>
          ))}
          <div className="atlas-map-caption">
            <span>East Asia Tea Origins</span>
            <strong>{activeOrigin.name} / {activeOrigin.tea}</strong>
          </div>
        </div>
        <div className="atlas-cup-study" aria-hidden="true">
          <Image
            src={visualSrc}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 24vw"
            className="atlas-origin-image"
          />
          <span className="atlas-image-shade" />
          <span className="atlas-cup-steam" />
          <span className="atlas-cup-bowl" />
          <span className="atlas-cup-tea" style={{ backgroundColor: activeOrigin.liquor }} />
          <span className="atlas-cup-saucer" />
          <small>{activeOrigin.tea}</small>
        </div>
      </div>
      <div className="atlas-feature">
        <span>Featured Origin</span>
        <strong>
          {activeOrigin.name} {activeOrigin.chinese}
        </strong>
        <p>{activeOrigin.tea}</p>
        <dl className="atlas-detail-list">
          <div>
            <dt>Origin Story</dt>
            <dd>{activeOrigin.history}</dd>
          </div>
          <div>
            <dt>Climate</dt>
            <dd>{activeOrigin.climate}</dd>
          </div>
          <div>
            <dt>Terroir</dt>
            <dd>{activeOrigin.terroir}</dd>
          </div>
          <div>
            <dt>Taste / Aroma</dt>
            <dd>{activeOrigin.taste} Aroma: {activeOrigin.aroma}.</dd>
          </div>
          <div>
            <dt>Ritual Moment</dt>
            <dd>{activeOrigin.moment}</dd>
          </div>
        </dl>
      </div>
      <div className="chapter-actions">
        <button type="button" className="museum-link-button dark-on-light" onClick={() => onExplore(activeOrigin)}>
          Explore Tea Origins
        </button>
        <button type="button" className="museum-link-button dark-on-light" onClick={onOpenMap}>
          Open Tea Map
        </button>
      </div>
    </article>
  );
}
