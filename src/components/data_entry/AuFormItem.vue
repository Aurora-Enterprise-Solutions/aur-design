<template>
    <div class="au-form-item" :has-error="!!message">
        <div class="label-wrapper">
            <div v-if="requiredFormItem || required" class="required-pin"></div>
            <label class="label">
                {{ label }}
            </label>
        </div>

        <div ref="input" class="input">
            <!-- @slot Input que será capturado por el form. -->
            <slot></slot>
        </div>

        <p class="help">
            {{ help }}
        </p>

        <p v-if="message" class="message">
            {{ message }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'AuFormItem',
    props: {
        /**
         * Propiedad identificadora para el formulario.
         */
        prop: {
            required: true,
            type: String
        },

        /**
         * Título del campo.
         */
        label: {
            required: false,
            type: String,
            default: ''
        },

        /**
         * Texto de ayuda para el campo.
         */
        help: {
            required: false,
            type: String,
            default: ''
        },

        /**
         * Indica si el campo es requerido o no.
         */
        required: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            message: '',
            inputField: undefined,
            requiredFormItem: false
        }
    },
    mounted () {
        this.inputField = this.$refs.input.querySelector('.au-input')
    },
    watch: {
        message (newValue) {
            this.setInputError(!!newValue)
        }
    },
    methods: {
        setInputError (flag) {
            this.inputField.setAttribute('has-error', flag)
        }
    },
}
</script>