import AuroraIcon from '@aurora-enterprise-solutions/aur-icon'
export const AuDesignLocales = require('./src/locales')

function loadLocaleMessages (localLocales) {
    const locales = require.context('./src/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    let messages = {}
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })

    messages = {
        ...messages,
        ...localLocales
    }

    return messages
}

// GENERAL
let AuRow = require('./src/components/general/AuRow.vue')
let AuCol = require('./src/components/general/AuCol.vue')
let AuText = require('./src/components/general/AuText.vue')
let AuButton = require('./src/components/general/AuButton.vue')

// DATA-DISPLAY
let AuCard = require('./src/components/data_display/AuCard.vue')
let AuNavigator = require('./src/components/data_display/AuNavigator.vue')
let AuNavigatorLink = require('./src/components/data_display/AuNavigatorLink.vue')

// DATA-ENTRY
let AuInput = require('./src/components/data_entry/AuInput.vue')
let AuInputNumber = require('./src/components/data_entry/AuInputNumber.vue')
let AuForm = require('./src/components/data_entry/AuForm.vue')
let AuFormItem = require('./src/components/data_entry/AuFormItem.vue')

const components = [
    AuRow,
    AuCol,
    AuText,
    AuButton,
    AuCard,
    AuNavigator,
    AuNavigatorLink,
    AuInput,
    AuInputNumber,
    AuForm,
    AuFormItem
]

const install = function install(Vue, options) {
    Vue.use(AuroraIcon);

    components.map(function (component) {
        Vue.component(component.default.name, component.default);
    });
};

export default {
    install: install
};