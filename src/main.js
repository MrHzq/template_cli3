import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import tool from './tool'
import Element from 'element-ui'

Vue.use(api)
Vue.use(tool)
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
