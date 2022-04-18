import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import Answer from '../views/Answer'
import AnswerResult from '../views/AnswerResult'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/answer',
		name: 'Answer',
		component: Answer,
	},
	{
		path: '/result',
		name: 'AnswerResult',
		component: AnswerResult,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: '/answer-app/',
	routes,
})

export default router
