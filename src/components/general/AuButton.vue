<template>
    <div class="au-button" :au-color="_color" :au-block="block" :au-circle="circle" :au-transparent="transparent" :au-loading="loading">
        <button ref="button" 
                class="au-button-element" 
                :type="_htmlType" 
                :disabled="disabled" 
                :au-transparent="transparent" 
                :au-loading="loading" 
                :au-bordered="bordered" 
                @click="onClick($event)">
            <!-- @slot Usa este slot para introducir el texto del botón -->
            <slot></slot>
        </button>

        <!--Spin de carga-->
        <au-icon icon="circle_spin" animatable loop :au-loading="loading"></au-icon>
    </div>
</template>

<script>
import AuIcon from './AuIcon'

export default {
    name: 'AuButton',
    components: { AuIcon },
    props: {
        /**
         * Color del botón.
         * @values primary, hight
         */
        color: {
            type: String,
            required: false,
            default: 'primary'
        },

        /**
         * Icono del botón.
         * Consulte los iconos de Aurora Icons.
         */
        icon: {
            type: String,
            required: false,
            default: null
        },

        /**
         * Tipo original de botón html (esto afecta a los formularios).
         * @values button, submit, reset
         */
        htmlType: {
            type: String,
            required: false,
            default: 'button'
        },

        /**
         * Define si el botón se estirará al máximo ancho disponible o no.
         */
        block: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * El botón se encuentra deshabilitado o no.
         */
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Redondea los bordes.
         */
        circle: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Deja el fondo transparente y las letras del color seleccionado.
         */
        transparent: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Deja el borde del boton marcado con el color especificado.
         */
        bordered: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Define si el botón está cargando o no.
         * Si su valor es true, se desplegará un spin de carga y el botón no capturará el evento click.
         */
        loading: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    data() {
        return {
            COLORS: ['primary', 'hight'],
            HTML_TYPE: ['button', 'submit', 'reset']
        }
    },
    computed: {
        _color() {
            return this.COLORS.includes(this.color) ? this.color : this.COLORS[0]
        },

        _htmlType() {
            return this.HTML_TYPE.includes(this.htmlType) ? this.htmlType : this.HTML_TYPE[0]
        },
    },
    methods: {
        onClick(event) {
            if (!this.disabled && !this.loading) {
                // Animación
                let ripples = document.createElement('span');
                ripples.style.left = event.offsetX + 'px';
                ripples.style.top = event.offsetY + 'px';
                
                this.$refs.button.appendChild(ripples);

                setTimeout(() => {
                    ripples.remove();
                }, 600);

                /**
                 * Evento click.
                 * @property {MouseEvent} event evento que emite el elemento button de html
                 */
                this.$emit('click', event)
            }
        }
    }
}
</script>
