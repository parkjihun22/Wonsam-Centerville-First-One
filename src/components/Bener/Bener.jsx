import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "원삼 센트레빌 퍼스트원" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="원삼 센트레빌 퍼스트원 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "원삼센트레빌퍼스트원",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = [
    "입지환경",
    "입지안내",
    "프리미엄",
    "반도체클러스터",
  ];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "48A㎡평면도",
    "59A㎡평면도",
    "59B㎡평면도",
    "E모델하우스",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          용인 반도체 클러스터의 새로운 주거 중심.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          원삼 센트레빌 퍼스트원, 동부건설 센트레빌의 브랜드 가치.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          SK하이닉스 직주근접 입지에서 시작되는 새로운 라이프스타일.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          용인 원삼 센트레빌 퍼스트원의 사업개요와 공급 안내.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 1,160실 예정, 전용 48㎡·59㎡로 구성되는 실용적인 주거공간.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          타입 구성과 평면도, 분양일정 및 공급정보를 한눈에 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          원삼 센트레빌 퍼스트원
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          SK하이닉스 용인 반도체 클러스터와 가까운 직주근접 입지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          대규모 반도체 산업과 협력업체 배후수요가 기대되는 원삼의 새로운 중심.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          광역 교통망과 미래 생활권을 갖춘 원삼 센트레빌 퍼스트원의 입지가치.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          오피스텔과 근린생활시설이 함께 조성되는 대규모 복합공간.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          실용적인 공간 구성과 편리한 주거생활을 고려한 단지 설계.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          용인 원삼 센트레빌 퍼스트원에서 새로운 직주근접 라이프를 만나보세요.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          원삼 센트레빌 퍼스트원의 분양 소식과 모델하우스 방문예약 안내.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 분양일정과 공급정보, 상담 안내를 빠르게 받아보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          대표번호 1533-8848을 통해 자세한 상담을 받아보실 수 있습니다.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      원삼 센트레빌 퍼스트원의 사업개요와 분양정보를 확인하세요.
    </div>
  );
};
