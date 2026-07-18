// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>원삼 센트레빌 퍼스트원 신축사업</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>경기도 용인시 처인구 원삼면 죽능리 587-2 일원</span>
        </li>

        <li>
          <strong>사업부지</strong>
          <span>용인 반도체클러스터 일반산업단지 상업용지 E2-1</span>
        </li>

        <li>
          <strong>공급규모</strong>
          <span>총 1,160실 예정</span>
        </li>

        <li>
          <strong>타입정보</strong>
          <span>전용 48㎡ · 59㎡ / 48A · 59A · 59B</span>
        </li>

        <li>
          <strong>입지환경</strong>
          <span>SK하이닉스 용인 반도체 클러스터 인접</span>
        </li>

        <li>
          <strong>용도</strong>
          <span>오피스텔 및 근린생활시설</span>
        </li>

        <li>
          <strong>시행사</strong>
          <span>대흥도시개발</span>
        </li>

        <li>
          <strong>시공사</strong>
          <span>동부건설</span>
        </li>
      </ul>
    ),
  },

  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="원삼 센트레빌 퍼스트원 용인 반도체 클러스터 입지환경 지도"
        />

        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="용인 원삼 센트레빌 퍼스트원 SK하이닉스 인접 입지 지도"
        />
      </div>
    ),
  },

  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>

          <p className={styles.premiumSubtitle}>
            SK하이닉스 용인 반도체 클러스터 직주근접 입지와
            <br />
            동부건설 센트레빌의 브랜드 가치를 누리는 프리미엄 라이프
          </p>
        </div>

        {/* 프리미엄 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "SK하이닉스 직주근접 입지",
      desc:
        "용인 반도체 클러스터와 가까운 핵심 입지<br/>관련 종사자의 편리한 출퇴근이 기대되는 주거환경<br/>원삼 센트레빌 퍼스트원의 직주근접 프리미엄",
    },
    {
      img: slide2,
      title: "전용 48㎡ · 59㎡ 타입 구성",
      desc:
        "48A·59A·59B 중심의 실용적인 타입 구성<br/>공간 활용과 편리한 생활 동선을 고려한 평면설계<br/>다양한 라이프스타일을 담아내는 주거공간",
    },
    {
      img: slide3,
      title: "총 1,160실 예정 복합단지",
      desc:
        "총 1,160실 규모로 공급 예정인 오피스텔<br/>주거공간과 근린생활시설이 함께 계획된 복합단지<br/>용인 원삼의 새로운 중심이 될 랜드마크",
    },
    {
      img: slide4,
      title: "원스톱 생활 인프라",
      desc:
        "단지 내 근린생활시설과 함께 누리는 편리한 일상<br/>주거와 생활 편의가 자연스럽게 이어지는 복합공간<br/>원삼 생활권의 새로운 라이프스타일",
    },
    {
      img: slide5,
      title: "동부건설 센트레빌 브랜드",
      desc:
        "동부건설의 주거 브랜드 센트레빌이 선보이는 공간<br/>입주민의 편의와 생활 품격을 고려한 주거설계<br/>원삼 센트레빌 퍼스트원의 차별화된 브랜드 가치",
    },
    {
      img: slide6,
      title: "용인 반도체 클러스터 미래가치",
      desc:
        "SK하이닉스와 관련 협력업체의 배후수요 기대<br/>반도체 산업과 함께 성장하는 원삼의 미래 생활권<br/>직주근접 수요와 투자가치를 함께 고려한 선택",
    },
  ];

  // 기존 슬라이더 로직은 아래에 그대로 유지 
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>CHEONGJU HANYANG LIPS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="원삼 센트레빌 퍼스트원 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
