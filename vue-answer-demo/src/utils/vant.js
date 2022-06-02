import Vue from 'vue'
import { Toast, Dialog, Empty  } from 'vant'
import 'vant/lib/index.css'

// 注册组件
;[Toast, Dialog, Empty ].forEach((Component) => {
	Vue.use(Component)
})

Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog
