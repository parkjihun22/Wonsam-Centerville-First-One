const SITE_URL = "https://cheongju-hanyanglips.com";

export const siteSeo = {
  siteName: "원삼 센트레빌 퍼스트원",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "원삼 센트레빌 퍼스트원은 용인시 처인구 원삼면 죽능리 587-2 일원에 조성되는 총 1,160실 예정 오피스텔입니다. 전용 48㎡·59㎡ 타입, SK하이닉스 용인 반도체 클러스터 인접 입지, 분양가와 모델하우스 방문예약을 안내합니다.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "용인시",
    streetAddress: "처인구 원삼면 죽능리 587-2 일원",
    brands: [
      "센트레빌",
      "동부건설",
      "원삼 센트레빌 퍼스트원",
    ],
    navigationSchemaName: "원삼 센트레빌 퍼스트원 주요 메뉴",
  },

  keywords: [
    "원삼 센트레빌 퍼스트원",
    "용인 원삼 센트레빌 퍼스트원",
    "SK 원삼 센트레빌 퍼스트원",
    "원삼 센트레빌",
    "원삼 센트레빌 퍼스트원 오피스텔",
    "원삼 센트레빌 퍼스트원 모델하우스",
    "원삼 센트레빌 퍼스트원 분양",
    "원삼 센트레빌 퍼스트원 분양가",
    "원삼 센트레빌 퍼스트원 공급정보",
    "원삼 센트레빌 퍼스트원 평면도",
    "원삼 센트레빌 퍼스트원 위치",
    "원삼 센트레빌 퍼스트원 방문예약",
    "원삼 센트레빌 퍼스트원 관심고객등록",
    "원삼 센트레빌 퍼스트원 견본주택",
    "용인 원삼 오피스텔",
    "용인 처인구 오피스텔",
    "SK하이닉스 원삼 오피스텔",
    "용인 반도체클러스터 오피스텔",
    "동부건설 센트레빌",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      {
        name: "브랜드소개",
        path: "/Brand/intro",
      },
      {
        name: "홍보영상",
        path: "/Brand/video",
      },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      {
        name: "사업안내",
        path: "/BusinessGuide/intro",
      },
      {
        name: "분양일정",
        path: "/BusinessGuide/plan",
      },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      {
        name: "입지안내",
        path: "/LocationEnvironment/intro",
      },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      {
        name: "단지배치도",
        path: "/ComplexGuide/intro",
      },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      {
        name: "공급안내",
        path: "/BusinessGuide/documents",
      },
      {
        name: "분양공고",
        path: "/SalesInfo/announcement",
      },
      {
        name: "계약서류안내",
        path: "/SalesInfo/guide",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      {
        name: "48㎡A",
        path: "/FloorPlan/59A",
      },
      {
        name: "59㎡A",
        path: "/FloorPlan/59B",
      },
      {
        name: "59㎡B",
        path: "/FloorPlan/84A",
      },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "원삼 센트레빌 퍼스트원 | 용인 원삼 오피스텔",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원의 브랜드 가치와 주거 철학을 소개합니다. 용인 반도체 클러스터 인근에서 만나는 동부건설 센트레빌의 오피스텔 브랜드 프리미엄을 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 홍보영상을 통해 용인 원삼 오피스텔의 입지와 동부건설 센트레빌 브랜드, 직주근접 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 사업안내입니다. 용인시 처인구 원삼면 죽능리 587-2 일원, 총 1,160실 예정 규모와 전용 48㎡·59㎡ 타입 등 주요 사업정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원의 모델하우스 오픈과 공급 일정, 계약 일정 등 용인 원삼 오피스텔 분양에 필요한 주요 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원의 공급 규모와 전용 48㎡·59㎡ 타입, 마감자재, 선택 옵션 및 분양 상담에 필요한 주요 공급정보를 확인하세요.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "분양공고 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 분양공고 안내입니다. 총 1,160실 예정 공급 규모와 전용 48㎡·59㎡ 타입, 분양 일정, 계약 조건 및 주요 유의사항을 확인하세요.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 계약서류 안내입니다. 오피스텔 계약과 자격 확인, 제출서류 및 상담 전 준비해야 할 주요 내용을 확인하세요.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 입지환경 안내입니다. SK하이닉스 용인 반도체 클러스터 인접 입지와 직주근접 가치, 광역 교통환경 및 원삼 생활권을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원의 직주근접 프리미엄을 소개합니다. SK하이닉스 용인 반도체 클러스터 인접 입지와 배후수요, 복합단지 및 센트레빌 브랜드 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 단지배치도 안내입니다. 총 1,160실 예정 오피스텔과 근린생활시설, 보행 동선 및 생활 편의를 고려한 복합단지 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 호수배치도 안내입니다. 오피스텔 호실 구성과 단지 내 위치, 타입별 배치 흐름을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 커뮤니티 안내입니다. 입주민의 휴식과 건강, 여가 및 생활 편의를 고려한 커뮤니티 공간과 복합단지 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan48A: page({
    path: "/FloorPlan/59A",
    title: "48㎡A 평면도 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 48㎡A 평면도 안내입니다. 채광과 통풍을 고려한 4Bay 판상형 구조와 실용적인 공간 구성을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan59A: page({
    path: "/FloorPlan/59B",
    title: "59㎡A 평면도 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 59㎡A 평면도 안내입니다. 거실과 주방, 다이닝 공간을 연결한 LDK 구조와 효율적인 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan59B: page({
    path: "/FloorPlan/84A",
    title: "59㎡B 평면도 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 59㎡B 평면도 안내입니다. 깊이감 있는 탑상형 구조와 수납, 생활 동선을 고려한 공간 구성을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 E-모델하우스입니다. 전용 48㎡·59㎡ 오피스텔의 타입별 실내 구조와 공간 구성, 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 원삼 센트레빌 퍼스트원",
    description:
      "원삼 센트레빌 퍼스트원 관심고객등록 페이지입니다. 분양 일정과 분양가, 공급정보, 모델하우스 위치 및 방문예약 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 원삼 센트레빌 퍼스트원",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 원삼 센트레빌 퍼스트원의 사업안내, 입지환경, 전용 48㎡·59㎡ 타입안내, E-모델하우스 및 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};