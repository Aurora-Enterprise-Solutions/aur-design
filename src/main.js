import Vue from 'vue'
import App from './example/App.vue'
import AuroraIcon from '@aurora-enterprise-solutions/aur-icon'
import '@aurora-enterprise-solutions/aur-icon/src/assets/styles/styles.css'

Vue.config.productionTip = false

Vue.use(AuroraIcon)

// Components
import AuCard from './components/data_display/AuCard'
Vue.component('au-card', AuCard)
import AuText from './components/general/AuText.vue'
Vue.component('au-text', AuText)
import AuButton from './components/general/AuButton'
Vue.component('au-button', AuButton)
import AuRow from './components/general/AuRow'
Vue.component('au-row', AuRow)
import AuCol from './components/general/AuCol'
Vue.component('au-col', AuCol)
import AuNavigator from './components/data_display/AuNavigator'
Vue.component('au-navigator', AuNavigator)
import AuNavigatorLink from './components/data_display/AuNavigatorLink'
Vue.component('au-navigator-link', AuNavigatorLink)
import AuInput from './components/data_entry/AuInput'
Vue.component('au-input', AuInput)
import AuInputNumber from './components/data_entry/AuInputNumber'
Vue.component('au-input-number', AuInputNumber)
import AuForm from './components/data_entry/AuForm'
Vue.component('au-form', AuForm)
import AuFormItem from './components/data_entry/AuFormItem'
Vue.component('au-form-item', AuFormItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
