import router from '@/router'
import store from '@/store'

router.beforeEach((to, from, next) => {
	// 判断 vuex 中是否存在 answeredList
	if (
		to.path !== '/' &&
		to.path !== '/answer' &&
		!store.state.answeredList.length
	) {
		next('/')
		return
	}

	next()
})
