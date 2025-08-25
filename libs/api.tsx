//- libs/api.tsx

import axios from 'axios';

export const ApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONFIG_API_URL ?? 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 123456',
  },
});

export const ApiLimit = Number(process.env.NEXT_PUBLIC_CONFIG_API_LIMIT ?? 10);
export const ApiDelay = Number(process.env.NEXT_PUBLIC_CONFIG_API_DELAY ?? 1000);
