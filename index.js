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
let AuDatePicker = require('./src/components/data_entry/AuDatePicker.vue')

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
    AuFormItem,
    AuDatePicker
]

const install = function install(Vue, options) {
    components.map(function (component) {
        Vue.component(component.default.name, component.default);
    });
};

export default {
    install: install
};