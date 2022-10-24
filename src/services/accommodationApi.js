import api from './api';

export async function getAccommodation(token) {
  const response = await api.get('/payment/accommodation', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
