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

const prefix = ''
Vue.prototype.$getItem = key => {
    return JSON.parse(window.sessionStorage.getItem(prefix + key))
}
Vue.prototype.$setItem = (key, data) => {
    // window.localStorage.setItem(prefix + key, JSON.stringify(data))
    return window.sessionStorage.setItem(prefix + key, JSON.stringify(data))
}

Vue.prototype.$copy = obj => JSON.parse(JSON.stringify(obj))

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
