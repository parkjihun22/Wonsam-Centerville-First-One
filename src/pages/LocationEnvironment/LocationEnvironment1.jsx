import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "용인 반도체 클러스터 인접<br />미래가치를 품은 핵심 입지",
    contentText:
      "경기도 용인시 처인구 원삼면 죽능리 587-2 일원<br />반도체 산업과 함께 성장하는 원삼의 새로운 주거 중심",
  },
  {
    img: section2Image2,
    titleText: "SK하이닉스를 가까이<br />직주근접 프리미엄",
    contentText:
      "용인 반도체 클러스터 관련 종사자의 출퇴근 편의가 기대되는 입지<br />일과 생활의 거리를 줄이는 원삼 센트레빌 퍼스트원",
  },
  {
    img: section2Image3,
    titleText: "수도권을 연결하는<br />광역 교통환경",
    contentText:
      "수도권제2순환고속도로 등 광역 도로망을 통한 편리한 이동<br />용인과 수도권 주요 생활권을 연결하는 교통 프리미엄",
  },
  {
    img: section2Image4,
    titleText: "주거와 상업시설이 함께하는<br />원스톱 생활환경",
    contentText:
      "오피스텔과 근린생활시설이 함께 조성되는 대규모 복합단지<br />생활 편의를 가까이 누릴 수 있는 새로운 원삼 생활권",
  },
  {
    img: section2Image5,
    titleText: "동부건설 센트레빌<br />브랜드 프리미엄",
    contentText:
      "동부건설의 주거 노하우와 실용적인 공간설계를 담은 오피스텔<br />용인 원삼 센트레빌 퍼스트원의 차별화된 브랜드 가치",
  },
  {
    img: section2Image6,
    titleText: "풍부한 배후수요를 품은<br />미래가치",
    contentText:
      "SK하이닉스와 관련 협력업체 종사자를 중심으로 기대되는 배후수요<br />직주근접 가치와 미래 가능성을 함께 갖춘 주거 선택",
  },
];

const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>SK하이닉스 용인 반도체 클러스터를 가까이에서 누리는 곳</div>
  <div>직주근접과 미래가치가 높아지는 원삼의 새로운 중심</div>
  <div>원삼 센트레빌 퍼스트원이 새로운 주거 가치로 찾아옵니다.</div>
</div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="원삼 센트레빌 퍼스트원 입지환경과 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "원삼 센트레빌 퍼스트원 입지환경과 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `원삼 센트레빌 퍼스트원 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
