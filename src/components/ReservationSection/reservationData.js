const reservationData = {
  eyebrow: "RESERVATION",
  title: "모델하우스 방문예약",

  description:
    "원삼 센트레빌 퍼스트원 모델하우스 방문예약을 남겨주시면 전문 상담원이 순차적으로 연락드려 홍보관 위치와 방문 가능 시간, 공급 일정 및 상담 절차를 안내해 드립니다.",

  notice:
    "방문 전 관심 타입과 상담 희망 내용을 남겨주시면 전용 48㎡·59㎡ 평면 비교와 분양가, 공급 일정 및 계약 조건에 관해 더욱 정확한 상담을 받아보실 수 있습니다.",

  formAction: "https://formspree.io/f/mykrwgyj",

  points: [
    {
      id: "address",
      label: "ADDRESS SMS",
      title: "모델하우스 주소 안내",
      text:
        "방문예약을 등록하시면 상담 절차에 따라 원삼 센트레빌 퍼스트원 모델하우스 위치와 방문 안내를 문자로 받아보실 수 있습니다.",
    },
    {
      id: "unit",
      label: "UNIT CHECK",
      title: "관심 타입 비교 상담",
      text:
        "전용 48A·59A·59B 타입별 평면 구성과 공간 활용, 생활 동선을 비교해 안내해 드립니다.",
    },
    {
      id: "schedule",
      label: "SALES GUIDE",
      title: "분양 일정 및 공급조건 안내",
      text:
        "원삼 센트레빌 퍼스트원의 분양 일정과 분양가, 계약 조건 등 선택에 필요한 공급정보를 자세히 상담해 드립니다.",
    },
  ],

  fields: [
    {
      id: "name",
      name: "name",
      label: "고객명",
      type: "text",
      placeholder: "고객명을 입력해 주세요",
      required: true,
      autoComplete: "name",
    },
    {
      id: "phone",
      name: "phone",
      label: "연락처",
      type: "tel",
      placeholder: "010-0000-0000",
      required: true,
      inputMode: "tel",
      autoComplete: "tel",
      pattern: "^01[0-9][-\\s]?[0-9]{3,4}[-\\s]?[0-9]{4}$",
      title: "예: 01012345678 또는 010-1234-5678",
    },
  ],
  messageField: {
    id: "message",
    name: "message",
    label: "문의 내용",
    placeholder: "관심 평형, 방문 희망일, 상담 희망 내용을 남겨주세요",
    rows: 5,
  },
  submitLabel: "방문예약 등록",
};

export default reservationData;
