import api from './api';

export async function save(body, token) {
  const response = await api.post('/payment/ticket', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function checkTicket(token) {
  const response = await api.get('/payment/ticket', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
