const externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    'element-ui': 'ELEMENT'
}
module.exports = {
    configureWebpack: { externals },
    devServer: { open: true }
}
