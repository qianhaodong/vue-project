import { HttpGet } from '@/request'

// 获取答案结果
export const getAnswerResult = (params) => {
	return HttpGet('/api/answer/result', params)
}