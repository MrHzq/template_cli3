import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'
import Element from 'element-ui'

import apiUrl from './apiUrl'

Vue.use(Element)
Vue.use(hzqTool)

Vue.use(hzqAxios, apiUrl, {
    baseURL: 'https://open-api.beone.app'
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
