import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const LocationEnvironment2 = () => {
  const [isScroll, setIsScroll] = useState(false);
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

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
      <div>경기도 용인시 처인구 원삼면 죽능리 587-2 일원에서</div>
      <div>원삼 센트레빌 퍼스트원의 직주근접 프리미엄을 누리세요.</div>
      <div>총 1,160실 예정, 동부건설 시공, 전용 48㎡·59㎡의 새로운 주거 가치를 제안합니다.</div>
    </div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image3}
          alt="원삼 센트레빌 퍼스트원 프리미엄 및 지북동 주거가치 이미지"
        />
      </figure>

      <Footer />
    </div>
  );
};

export default LocationEnvironment2;
