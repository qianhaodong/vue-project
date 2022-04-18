const { getRequest } = require('./request')

// 获取问题列表
export const getQuestionList = (params = {}, options = {}) => {
	return getRequest('/api/question/list', params, {
		loading: true,
		...options,
	})
}

// 获取答案结果
export const getAnswerResult = (params = {}, options = {}) => {
	return getRequest('/api/answer/result', params, {
		loading: true,
		...options,
	})
}
