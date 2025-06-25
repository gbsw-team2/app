import api from "@/utils/api";

export type EventItem = {
  fstvlNm: string;
  opar: string, // 장소
  fstvlStartDate: string, // 행사시작일
  fstvlEndDate: string, // 행사종료일
  homepageUrl?: string
};

export const fetchEventList = async (): Promise<EventItem[]> => {
  const response = await api.get("/api/board/event");
  return response.data.items;
}