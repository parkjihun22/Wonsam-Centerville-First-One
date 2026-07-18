import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "원삼 센트레빌 퍼스트원",
  },

  {
    label: "사업명",
    value: "용인 원삼 센트레빌 퍼스트원 신축사업",
  },

  {
    label: "대지위치",
    value: "경기도 용인시 처인구 원삼면 죽능리 587-2 일원",
  },

  {
    label: "사업부지",
    value: "용인 반도체클러스터 일반산업단지 상업용지 E2-1",
  },

  {
    label: "공급규모",
    value: "총 1,160실 예정",
  },

  {
    label: "타입구성",
    value: "전용 48㎡ · 59㎡ / 48A · 59A · 59B",
  },

  {
    label: "용도",
    value: "오피스텔 및 근린생활시설",
  },

  {
    label: "시행사",
    value: "대흥도시개발",
  },

  {
    label: "시공사",
    value: "동부건설",
  },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>용인 반도체 클러스터 인근에 계획된 총 1,160실 규모의 주거 가치</div>
  <div>원삼 센트레빌 퍼스트원, 동부건설 센트레빌의 브랜드 프리미엄을 완성합니다.</div>
</div>

<img
  className={styles.img3}
  src={page1}
  alt="원삼 센트레빌 퍼스트원 오피스텔 사업개요"
/>

<div className={styles.tableContainer}>
  {!isMobile && (
    <img
      className={styles.tableImg}
      src={tableImage}
      alt="용인 원삼 센트레빌 퍼스트원 사업개요 안내"
    />
  )}

  <table className={styles.projectTable}>
    <tbody>
      {projectData.map((item, index) => (
        <tr key={index}>
          <td className={styles.label}>{item.label}</td>
          <td className={styles.contents}>{item.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
