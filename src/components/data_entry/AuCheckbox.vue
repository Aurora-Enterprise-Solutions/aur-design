<template>
    <div class="au-checkbox" :au-disabled="disabled" :au-checked="privateValue">
        <input type="checkbox" class="input" :disabled="disabled" :value="privateValue">
        <au-icon v-show="privateValue" ref="iconChecked" class="icon-checked" icon="checkbox" clickable @click="onClick"/>
        <au-icon v-show="!privateValue" ref="iconNotChecked" class="icon-not-checked" icon="checkbox_not_check" clickable @click="onClick"/>

        <au-text tag="label" class="label">{{ label }}</au-text>
    </div>
</template>

<script>
import AuText from './../general/AuText'
import AuIcon from './../general/AuIcon'

export default {
    name: 'AuCheckbox',
    components: { AuText, AuIcon },
    props: {
        /**
         * Título del checkbox.
         */
        label: {
            required: false,
            type: String,
            default: ''
        },

        /**
         * Deshabilita o habilita el checkbox.
         */
        disabled: {
            required: false,
            type: Boolean,
            default: false
        },

        /**
         * Valor del checkbox.
         */
        value: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            privateValue: this.value
        }
    },
    watch: {
        value () {
            this.privateValue = this.value
        },

        privateValue () {
            this.showIcon(this.privateValue)
        }
    },
    mounted() {
        setTimeout(() => {
            this.showIcon(this.value)
        }, 10)
    },
    methods: {
        showIcon(show) {
            if (!show) {
                this.$refs.iconChecked.goToAndStop(1)
            } else {
                this.$refs.iconChecked.play()
            }
        },

        onClick() {
            if (!this.disabled) {
                this.privateValue = !this.privateValue
                this.$emit('input', this.privateValue)
            }
        }
    }
}
</script>