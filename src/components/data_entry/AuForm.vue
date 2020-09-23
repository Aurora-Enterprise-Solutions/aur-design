<template>
    <form class="au-form">
        <div v-if="title" class="title-wrapper">
            <h4 class="title">
                {{ title }}
            </h4>
            <div class="divider"></div>
        </div>

        <!-- @slot Sección para ingresar los items del form. -->
        <slot></slot>

        <div v-if="colon" class="required">
            <div class="required-pin"></div>
            <label>{{ $t('required') }}</label>
        </div>
    </form>
</template>

<script>
const RULE_TYPES = [ 'required', 'len', 'min', 'max', 'minValue', 'maxValue', 'pattern', 'validator' ]
const RULE_OPTIONS = {
    required: [ 'whitespace', 'message' ],
    len: [ 'message', 'value' ],
    min: [ 'message', 'value' ],
    max: [ 'message', 'value' ],
    minValue: [ 'message', 'value' ],
    maxValue: [ 'message', 'value' ],
    pattern: [ 'message', 'regex' ],
    validator: [ 'implement' ]
}

export default {
    name: 'AuForm',
    props: {
        /**
         * Orientación de cómo se ordenarán los label, rules e inputs.
         * @values vertical, horizontal
         */
        orientation: {
            required: false,
            type: String,
            default: 'vertical'
        },

        /**
         * Título del formulario.
         */
        title: {
            required: false,
            type: String,
            default: undefined
        },

        /**
         * Modelo de datos de los inputs.
         */
        model: {
            required: true,
            type: Object
        },

        /**
         * Objeto de reglas de cada input (key = prop).
         */
        rules: {
            required: false,
            type: Object,
            default: undefined
        },

        /**
         * Muestra o no el indicador de requerido.
         */
        colon: {
            required: false,
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            itemsProp: [],
            items: {},
            oldModel: {}
        }
    },
    mounted () {
        this.itemsProp = []
        this.items = {}
        this.searchItems(this.$children)
        this.setRequired()
    },
    updated () {
        this.itemsProp = []
        this.items = {}
        this.searchItems(this.$children)
        this.setRequired()
    },
    watch: {
        model: {
            handler (newValue) {
                let inputsChanges = this.getChanges(newValue, this.oldModel)
                this.oldModel = JSON.parse(JSON.stringify(newValue))

                if (inputsChanges) {
                    Object.keys(inputsChanges).forEach((key) => {
                        this.validateInput(key, inputsChanges[key])
                    })
                }
            },
            deep: true
        },

        rules: {
            handler () {
                this.setRequired()
            },
            deep: true
        }
    },
    methods: {
        /**
         * Busca todos los items dentro del slot y guarda su referencia en el array de items.
         */
        searchItems (children) {
            if (children) {
                children.forEach((c) => {
                    if (c.$options.name === 'AuFormItem') {
                        this.items[c.$props.prop] = c
                        this.itemsProp.push(c.$props.prop)
                    } else {
                        this.searchItems(c.$children)
                    }
                })
            }
        },

        /**
         * @public
         * Valida las reglas para los inputs dentro del formulario.
         * @param {Function(error, values)} callback función que recibe como parámetro error (objeto || undefined) y values (objeto)
         */
        async validate (callback) {
            let errors
            const model = JSON.parse(JSON.stringify(this.model))

            if (this.rules) {
                for (let i=0; i < this.itemsProp.length; i ++) {
                    let item = this.itemsProp[i]

                    let error = await this.validateInput(item, model[item])

                    if (error) {
                        if (!errors)
                            errors = {}

                        errors[item] = error
                    }
                }
            }

            callback(errors, model)
        },

        /**
         * Valida un input en específico.
         * @param item prop del form-item
         */
        async validateInput(item, value) {
            let error

            await this.validateRules(this.rules[item], value)
                .then(() => {
                    this.items[item]['message'] = undefined
                })
                .catch((e) => {
                    this.items[item]['message'] = e
                    error = e
                })

            return error
        },

        /**
         * Valida las reglas de un input.
         * @param rules reglas del input
         * @param value valor actual del input
         */
        async validateRules (rules, value) {
            return await new Promise((resolve, reject) => {
                if (rules) {
                    rules.forEach((r) => {
                        let flag = true

                        switch (r.type) {
                            case 'required': {
                                if (([undefined, '', null].includes(value)) || (rules.whitespace && /^\s+$/.test(value)))
                                    flag = false
                                break
                            }

                            case 'len': {
                                if (value && value.toString().length !== r.value)
                                    flag = false
                                break
                            }

                            case 'min': {
                                if (value && value.toString().length < r.value)
                                    flag = false
                                break
                            }

                            case 'max': {
                                if (value && value.toString().length > r.value)
                                    flag = false
                                break
                            }

                            case 'minValue': {
                                if (value && value < r.value)
                                    flag = false
                                break
                            }

                            case 'maxValue': {
                                if (value && value > r.value)
                                    flag = false
                                break
                            }

                            case 'pattern': {
                                if (!r.regex.test(value.toString()))
                                    flag = false
                                break
                            }

                            case 'validator': {
                                r.implement(r, value, (message) => {
                                    if (message)
                                        reject (message)
                                })
                                break
                            }
                        }

                        if (!flag)
                            reject (r.message ? r.message : '')
                    })
                }

                resolve()
            })
        },

        /**
         * Retorna un array con las prop que cambiaron.
         */
        getChanges (newValue, oldValue) {
            const changes = {}

            Object.keys(newValue).forEach((nk) => {
                if (oldValue[nk]) {
                    if (newValue[nk] !== oldValue[nk])
                        changes[nk] = newValue[nk]
                } else
                    changes[nk] = newValue[nk]
            })

            return changes === {} ? undefined : changes
        },

        /**
         * Configura como requerido los campos que poseen la regla required.
         */
        setRequired () {
            this.itemsProp.forEach((i) => {
                this.items[i]['requiredFormItem'] = this.hasRequiredRule(i)
                this.items[i]['fatherColon'] = this.colon
            })
        },

        /**
         * Busca en las reglas si existe required.
         */
        hasRequiredRule (item) {
            let flag = false

            if (this.rules && this.rules[item]) {
                for (let i=0; i < this.rules[item].length; i++) {
                    let rule = this.rules[item][i]
                    if (rule.type === 'required') {
                         flag = true
                        break
                    }
                }
            }

            return flag
        }
    }
}
</script>