import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hzqTool from 'hzq-tool'
import hzqAxios from 'hzq-axios'

import './components/global'

Vue.use(hzqTool)

Vue.use(hzqAxios, require.context('@/apiUrl', true, /\.js$/), {
    baseURL: 'https://open-api.beone.app'
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
