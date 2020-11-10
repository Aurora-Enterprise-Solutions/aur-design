import Vue from 'vue';
import AuNotification from './../components/general/AuNotification.vue';
import i18n from './../i18n';

export default async (props) => {
    return new Promise((resolve, reject) => {
        if (!props)
            reject('Debe ingresar el objeto de propiedades para configurar la notificación!');

        const Instance = Vue.extend(AuNotification);

        const component = new Instance({
            i18n,
            propsData: {
                type: props.type,
                title: props.title,
                message: props.message,
                showOk: props.showOk,
                showCancel: props.showCancel,
                okText: props.okText,
                cancelText: props.cancelText
            }
        });
        component.$mount();

        component.$on('ok', () => {
            component.$destroy();

            setTimeout(() => {
                document.body.removeChild(component.$el);
                resolve(true);
            }, 300);
        });

        component.$on('cancel', () => {
            component.$destroy();

            setTimeout(() => {
                document.body.removeChild(component.$el);
                resolve(false);
            }, 300);
        });
    
        document.body.appendChild(component.$el);
    });
}