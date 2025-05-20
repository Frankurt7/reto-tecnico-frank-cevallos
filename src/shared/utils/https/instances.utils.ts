import axios from 'axios';
import { API_BASE_URL, COMMON_HEADERS } from './constants';

export const https = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: COMMON_HEADERS,
});
