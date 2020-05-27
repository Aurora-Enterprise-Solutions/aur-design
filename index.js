// GENERAL
let AuRow = require('./src/components/general/AuRow.vue')
let AuCol = require('./src/components/general/AuCol.vue')
let AuText = require('./src/components/general/AuText.vue')
let AuButton = require('./src/components/general/AuButton.vue')

// DATA-DISPLAY
let AuCard = require('./src/components/data_display/AuCard.vue')

const components = [
    AuRow,
    AuCol,
    AuText,
    AuButton,
    AuCard
]

const install = function install(Vue) {
    components.map(function (component) {
        Vue.component(component.default.name, component.default);
    });
};

export default {
    install: install
};