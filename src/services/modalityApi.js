import api from './api';

export async function getModality(token) {
  const response = await api.get('/payment/modality', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
