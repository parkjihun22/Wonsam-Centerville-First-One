import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",
  title: "원삼 센트레빌 퍼스트원 타입안내",

  description:
    "용인 원삼 센트레빌 퍼스트원의 전용 48㎡·59㎡ 오피스텔 평면을 확인해 보세요. 48A·59A·59B 타입별 공간 구성과 생활 동선을 비교하고 라이프스타일에 적합한 주거공간을 살펴볼 수 있습니다.",

  plans: [
    {
      id: "48A",
      type: "48A",
      name: "48A㎡",
      summary:
        "채광과 통풍을 고려한 4Bay 판상형 구조로 실용적인 공간 활용이 돋보이는 전용 48㎡ 타입입니다.",
      image: unit01,
      alt: "원삼 센트레빌 퍼스트원 오피스텔 48A㎡ 평면도",
      link: "/FloorPlan/59A",
    },
    {
      id: "59A",
      type: "59A",
      name: "59A㎡",
      summary:
        "거실과 주방, 다이닝 공간을 자연스럽게 연결한 LDK 구조로 여유로운 생활 동선을 제공하는 전용 59㎡ 타입입니다.",
      image: unit02,
      alt: "용인 원삼 센트레빌 퍼스트원 59A㎡ 평면도",
      link: "/FloorPlan/59B",
    },
    {
      id: "59B",
      type: "59B",
      name: "59B㎡",
      summary:
        "깊이감 있는 탑상형 구조와 효율적인 공간 배치를 적용해 편안한 주거생활을 제안하는 전용 59㎡ 타입입니다.",
      image: unit03,
      alt: "원삼 센트레빌 퍼스트원 오피스텔 59B㎡ 평면도",
      link: "/FloorPlan/84A",
    },
  ],
};
