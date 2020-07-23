import Vue from 'vue'
import App from './example/App.vue'
import AuDesign from './../index'
import '@aurora-enterprise-solutions/aur-icon/src/assets/styles/styles.css'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(AuDesign)

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
