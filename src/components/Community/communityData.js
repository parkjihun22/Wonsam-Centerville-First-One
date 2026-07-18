import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "직주근접 라이프를 완성하는 복합단지 설계",
  description:
    "원삼 센트레빌 퍼스트원은 총 1,160실 예정 규모의 오피스텔과 근린생활시설이 함께 조성되는 복합단지로, 편리한 생활과 휴식이 자연스럽게 이어지는 새로운 주거공간을 제안합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "원삼 센트레빌 퍼스트원 오피스텔 복합단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "생활 편의를 고려한 효율적인 단지 배치",
      description:
        "용인 원삼 센트레빌 퍼스트원은 주거공간과 근린생활시설, 보행 동선을 효율적으로 연결해 입주민이 편리하고 쾌적한 일상을 누릴 수 있도록 계획되었습니다.",
      image: layoutImage,
      alt: "원삼 센트레빌 퍼스트원 오피스텔 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "동부건설 센트레빌의 차별화된 공간 설계",
      description:
        "전용 48㎡·59㎡ 중심의 실용적인 주거공간과 편리한 생활 동선을 적용해 용인 반도체 클러스터 종사자를 위한 직주근접 주거 가치를 제안합니다.",
      image: designImage,
      alt: "용인 원삼 센트레빌 퍼스트원 특화설계",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "일상에 여유를 더하는 커뮤니티 공간",
      description:
        "입주민의 휴식과 건강, 여가 및 소통을 고려한 커뮤니티 공간을 통해 SK하이닉스 용인 반도체 클러스터 인근에서 한층 여유로운 주거생활을 누릴 수 있도록 계획했습니다.",
      image: communityImage,
      alt: "원삼 센트레빌 퍼스트원 입주민 커뮤니티 시설",
    },
  ],
};