import Vue from 'vue'
import App from './example/App.vue'
import AuroraIcon from './../aur-icons'
import './../aur-icons/src/assets/styles/styles.css'

Vue.config.productionTip = false

Vue.use(AuroraIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
