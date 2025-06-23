import api from "@/utils/api";

export const TextTranslate = async (data: {
    text: string;
    beforeLang: string;
    afterLang: string;
  }) => {
    return await api.post('/api/translate/text', data);
}