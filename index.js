// COMPONENTS
// GENERAL
import { default as AuRow } from "./src/components/general/AuRow.vue"
import { default as AuCol } from "./src/components/general/AuCol.vue"
import { default as AuText } from "./src/components/general/AuText.vue"
import { default as AuButton } from "./src/components/general/AuButton.vue"
import { default as AuIcon } from "./src/components/general/AuIcon.vue"

// DATA-DISPLAY
import { default as AuCard } from "./src/components/data_display/AuCard.vue"
import { default as AuNavigator } from "./src/components/data_display/AuNavigator.vue"
import { default as AuNavigatorLink } from "./src/components/data_display/AuNavigatorLink.vue"
import { default as AuBadge } from "./src/components/data_display/AuBadge.vue"

// DATA-ENTRY
import { default as AuInput } from "./src/components/data_entry/AuInput.vue"
import { default as AuInputNumber } from "./src/components/data_entry/AuInputNumber.vue"
import { default as AuForm } from "./src/components/data_entry/AuForm.vue"
import { default as AuFormItem } from "./src/components/data_entry/AuFormItem.vue"
import { default as AuDatePicker } from "./src/components/data_entry/AuDatePicker.vue"

const components = [
    AuRow,
    AuCol,
    AuText,
    AuIcon,
    AuButton,
    AuCard,
    AuNavigator,
    AuNavigatorLink,
    AuInput,
    AuInputNumber,
    AuForm,
    AuFormItem,
    AuDatePicker,
    AuBadge
]

// PROTOTYPES
import { default as notification } from "./src/prototypes/notification.js"

const prototypes = {
    notification
}

// LOCALES
import aurES from "./src/locales/es.json"

const AurDesign = {
    install(Vue, options) {
        components.map(function (component) {
            Vue.component(component.name, component);
        });
    
        Object.keys(prototypes).forEach(function (key) {
            Vue.prototype['$' + key] = prototypes[key];
        });
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(AurDesign);
}

export {
    // Prototypes
    notification,

    // Locales
    aurES,

    // Components
    AuRow,
    AuCol,
    AuText,
    AuIcon,
    AuButton,
    AuCard,
    AuNavigator,
    AuNavigatorLink,
    AuInput,
    AuInputNumber,
    AuForm,
    AuFormItem,
    AuDatePicker,
    AuBadge   
};

export default AurDesign;
