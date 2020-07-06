<template>
    <div class="au-input au-input-number">
        <div v-if="spin" ref="spinMinus" class="spin spin-minus" :focus="focus" @click="decrease">-</div>
        <div v-if="prefix" ref="prefix" class="extra prefix">{{ prefix }}</div>
        <input ref="input"
               type="text"
               inputmode="numeric"
               :justify="justify"
               :placeholder="placeholder"
               :step="step"
               :min="min"
               :max="max"
               @focus="onFocus"
               @blur="onBlur"
               @input="onInput">
        <div v-if="suffix" ref="suffix" class="extra suffix">{{ suffix }}</div>
        <div v-if="spin" ref="spinPlus" class="spin spin-plus" :focus="focus" @click="increase">+</div>
    </div>
</template>

<script>
import AutoNumeric from 'autonumeric'

export default {
    name: 'AuInput',
    props: {
        value: {
            required: false,
            type: Number,
            default: undefined
        },

        placeholder: {
            required: false,
            type: String,
            default: ''
        },

        /**
         * @values center, start, end
         */
        justify: {
            required: false,
            type: String,
            default: 'center'
        },

        min: {
            required: false,
            type: Number,
            default: undefined
        },

        max: {
            required: false,
            type: Number,
            default: undefined
        },

        step: {
            required: false,
            type: Number,
            default: 1
        },

        spin: {
            required: false,
            type: Boolean,
            default: true
        },

        prefix: {
            required: false,
            type: String,
            default: undefined
        },

        suffix: {
            required: false,
            type: String,
            default: undefined
        },

        decimals: {
            required: false,
            type: Number,
            default: 0
        },

        /**
         * Objeto de configuración de la librería AutoNumeric.js
         */
        config: {
            required: false,
            type: Object,
            default: () => { return {} }
        }
    },
    data () {
        return {
            focus: false
        }
    },
    updated () {
        this.setStyles()
        this.setOptions()
    },
    mounted () {
        this.autoNumeric = new AutoNumeric(this.$refs.input)
        this.setStyles()
        this.setOptions()
    },
    watch: {
        value (newValue) {
            this.autoNumeric.set(newValue)
        },

        config (newValue) {
            this.setOptions()
        },

        min (newValue) {
            if (this.autoNumeric && newValue != null)
                this.autoNumeric.options.minimumValue(newValue.toString())

            this.setOptions()
        },

        max (newValue) {
            if (this.autoNumeric && newValue != null)
                this.autoNumeric.options.minimumValue(newValue.toString())

            this.setOptions()
        }
    },
    methods: {
        onInput (event) {
            this.$emit('input', this.autoNumeric.getNumber())
        },

        onFocus () {
            this.focus = true
            this.$emit('focus')
        },

        onBlur () {
            this.focus = false
            this.$emit('blur')
        },

        decrease () {
            let numeric = this.autoNumeric.getNumber()

            if (numeric == null) {
                numeric = this.min ? this.min : 0
                this.autoNumeric.set(numeric)
                this.$emit('input', numeric)
            } else {
                if (this.min != null && this.min > (numeric - this.step)) {
                    numeric = this.min
                    this.autoNumeric.set(numeric)
                    this.$emit('input', numeric)
                } else {
                    numeric -= this.step
                    this.autoNumeric.set(numeric)
                    this.$emit('input', numeric)
                }
            }
        },

        increase () {
            let numeric = this.autoNumeric.getNumber()

            if (numeric == null) {
                numeric = this.min ? this.min : 0
                this.autoNumeric.set(numeric)
                this.$emit('input', numeric)
            } else {
                if (this.max != null && this.max < (numeric + this.step)) {
                    numeric = this.max
                    this.autoNumeric.set(numeric)
                    this.$emit('input', numeric)
                } else {
                    numeric += this.step
                    this.autoNumeric.set(numeric)
                    this.$emit('input', numeric)
                }
            }
        },

        setStyles () {
            let prefix = 0
            let suffix = 0
            let spin = 0

            if (this.spin)
                spin = this.$refs.spinPlus.offsetWidth

            if (this.prefix)
                prefix = this.$refs.prefix.offsetWidth
            else
                prefix = 8

            if (this.suffix)
                suffix = this.$refs.suffix.offsetWidth
            else
                suffix = 8

            this.$refs.input.style.paddingLeft = (spin + prefix) + 'px'
            this.$refs.input.style.paddingRight = (spin + suffix) + 'px'

            if (this.prefix)
                this.$refs.prefix.style.left = spin + 'px'

            if (this.suffix)
                this.$refs.suffix.style.right = spin + 'px'
        },

        setOptions () {
            let defaultOptions = {
                maximumValue: this.max,
                minimumValue: this.min,
                modifyValueOnWheel: true,
                wheelStep: this.step ? this.step.toString() : '1',
                onInvalidPaste: 'clamp',
                overrideMinMaxLimits: null,
                decimalPlaces: this.decimals ? this.decimals.toString() : '0'
            }

            if (this.autoNumeric && this.config) {
                this.autoNumeric.update(defaultOptions, this.config)
            } else if (this.autoNumeric) {
                this.autoNumeric.update(defaultOptions)
            }
        }
    }
}
</script>