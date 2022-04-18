import { Toast } from 'vant'
import instance from './interceptor'

// 配置多个 Toast
Toast.allowMultiple()

/**
 * @description 封装 axios
 * 
 * @param {String} method 请求方法
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} options 配置项
 */
function request(method, url, params, options) {
	const { header = {}, timeout = 10000, loading = false, loadingMessage = '' } = options
	// 配置请求头
	const headers = {
		'Content-Type': 'application/json',
		...header,
	}
    // POST/PUT/PATCH 请求配置
	let requestConfig = {
		headers,
		timeout,
	}

	// 请求时 loading
	if (loading) {
        Toast.loading({
            message: loadingMessage || '加载中',
            duration: 0,
            forbidClick: true,
        })
	}

	return new Promise((resolve, reject) => {
		let data = params

		// GET/DELETE 请求配置
		if (method === 'get' || method === 'delete') {
			data = {
				params,
				headers,
				timeout,
			}
			requestConfig = null
		}

		instance[method](url, data, requestConfig)
			.then((res) => {
				resolve(res)
			})
			.catch((error) => {
				reject(error)
			})
			.finally(() => {
				Toast.clear()
			})
	})
}

export const getRequest = (url, params, options) => {
	return request('get', url, params, options)
}

export const postRequest = (url, params, options) => {
	return request('post', url, params, options)
}

export const putRequest = (url, params, options) => {
    return request('put', url, params, options)
}

export const deleteRequest = (url, params, options) => {
    return request('delete', url, params, options)
}
