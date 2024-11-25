import axios from 'axios';

// 创建 Axios 实例，设置基础 URL
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // 从环境变量中获取 API 基础 URL
});

// 请求拦截器，用于在每个请求中添加 Authorization 头或自定义 token 头
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken'); // 从 localStorage 中获取 Token
        if (token) {
            // 根据后端要求设置请求头，可以同时添加两个头部进行测试
            config.headers['Authorization'] = `Bearer ${token}`; // 标准的 Authorization 头
            config.headers['token'] = token; // 添加自定义的 token 头
        }
        return config; // 返回配置的请求
    },
    (error) => {
        return Promise.reject(error); // 请求错误时返回 Promise 拒绝
    }
);

export default api; // 导出 Axios 实例
