export interface DropdownItem {
  label: string;
  value: string | number;
}

export const Email: DropdownItem[] = [
  { label: 'gmail.com', value: 'gmail.com' },
  { label: 'naver.com', value: 'naver.com' },
  { label: 'icloud.com', value: 'icloud.com' },
  { label: 'kakao.com', value: 'kakao.com' },
  { label: 'daum.net', value: 'daum.net' },
  { label: 'hanmail.net', value: 'hanmail.net' },
];

export const Region: DropdownItem[] = [
  {label:"서울", value:"서울"},
  {label:"부산", value:"부산"},
  {label:"대구", value:"대구"},
  {label:"인천", value:"인천"},
  {label:"광주", value:"광주"},
  {label:"대전", value:"대전"},
  {label:"울산", value:"울산"},
  {label:"세종", value:"세종"},
  {label:"경기도", value:"경기도"},
  {label:"강원도", value:"강원도"},
  {label:"충청북도", value:"충청북도"},
  {label:"충청남도", value:"충청남도"},
  {label:"전라북도", value:"전라북도"},
  {label:"전라남도", value:"전라남도"},
  {label:"경상북도", value:"경상북도"},
  {label:"경상남도", value:"경상남도"},
  {label:"제주", value:"제주"},
]

//임시
export const Country: DropdownItem[] = [
  { label: '중국', value: 1 },
  { label: '베트남', value: 2 },
  { label: '태국', value: 3 },
  { label: '미국', value: 4 },
  { label: '우주베키스탄', value: 5 },
  { label: '네팔', value: 6 },
  { label: '인도네시아', value: 7 },
  { label: '러시아', value: 8 },
  { label: '필리핀', value: 9 },
  { label: '캄보디아', value: 10 },
  { label: '몽골', value: 11 },
  { label: '일본', value: 12 },
];