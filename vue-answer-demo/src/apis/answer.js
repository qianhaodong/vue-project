import { HttpGet } from '@/request'

// 获取问题列表
export const getQuestionList = (params) => {
	return HttpGet('/api/question/list', params)
}