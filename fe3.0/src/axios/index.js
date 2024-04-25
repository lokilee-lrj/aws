import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000', // 设置基础 URL
  baseURL: 'http://ec2-52-63-244-223.ap-southeast-2.compute.amazonaws.com:3000',
  timeout: 500000, // 设置请求超时时间（毫秒）
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加请求头
    // config.headers.Authorization = 'Bearer your_token_here';
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么，例如处理状态码
    return response;
  },
  error => {
    // 对响应错误做点什么，例如处理网络错误或服务器错误
    return Promise.reject(error);
  }
);
export default instance;