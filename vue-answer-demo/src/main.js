import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载插件
import '@/utils/vant' // vant
import 'amfe-flexible' // 手机端适配

// 注册全局组件
import '@/components'

// 加载样式
import './assets/styles/reset.less'
import './assets/styles/variables.less'

// 加载 Js 文件
import '@/utils/permission'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
