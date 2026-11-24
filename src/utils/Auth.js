import { BASE_URL } from './Constants';

export const register = async (email, password, name) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  });

  const contentType = res.headers.get('content-type') || '';
  const body = await res.text();
  const data =
    body && contentType.includes('application/json')
      ? JSON.parse(body)
      : body;

  if (!res.ok) {
    const message =
      data && typeof data === 'object' && data.message
        ? data.message
        : typeof data === 'string' && data
          ? data
          : `Error ${res.status}`;
    const error = new Error(message);
    error.status = res.status;
    throw error;
  }

  return data || null;
};
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(res);
  });
};
export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(res);
  });
};
