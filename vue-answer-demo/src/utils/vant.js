import Vue from 'vue'
import { Toast, Dialog } from 'vant'
import 'vant/lib/index.css'

// 注册组件
;[Toast, Dialog].forEach((Component) => {
	Vue.use(Component)
})

Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog
