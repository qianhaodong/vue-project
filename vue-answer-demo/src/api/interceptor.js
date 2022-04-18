/* axios 拦截器 */

import axios from 'axios'

const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 10000,
})

// 请求拦截
service.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// 响应拦截
service.interceptors.response.use(
	(res) => {
		return res.data
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default service
