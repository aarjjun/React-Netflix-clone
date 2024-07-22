import axios from 'axios';
import {baseUrl} from './constants/constants'

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTc0OGY0MjBkMmQ4NTcxNTVkYjlhNzM5YWI5ZWMxYiIsIm5iZiI6MTcyMTIyNzMzNi42MTAxLCJzdWIiOiI2Njk2YWFmNGU4NzM3YTM3YTVkNWZmODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vnVss_yE-zfrGL164dKl1K-lNCstS-16ERlNZpsyOnI'
  }
});

export default instance;
