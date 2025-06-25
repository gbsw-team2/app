import api from "@/utils/api";

export const sendAudioTranslation = async (
  audio: { uri: string; name: string; type: string },
  beforeLang: string,
  afterLang: string
) => {
  const formData = new FormData();

  formData.append('audio', {
    uri: audio.uri,
    name: audio.name,
    type: audio.type,
  } as any);

  formData.append('beforeLang', beforeLang);
  formData.append('afterLang', afterLang);

  return await api.post('/api/translate/voice', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
