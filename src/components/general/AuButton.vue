<template>
    <div class="au-button" :au-color="_color" :au-block="block">
        <button class="au-button-element" :type="_htmlType" :disabled="disabled" @click="onClick($event)">
            <!-- @slot Usa este slot para introducir el texto del botón -->
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'AuButton',
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
            }
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
                if (!this.disabled) {
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
