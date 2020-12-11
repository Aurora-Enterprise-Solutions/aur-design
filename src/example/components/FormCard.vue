<template>
    <div>
        <au-card title="Form" description="Formulario que permite validar datos de inputs según sus reglas." :collapsable="true" :default-collapsed="true">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                <label class="title-tag">AuForm / AuFormItem</label>
                </div>
                <div>
                <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>

            <div>
                <au-row :gutter="16">
                    <au-col :span="8">
                        <au-form ref="formCustom" title="Perfil del Usuario" :model="model" :rules="rules" :colon="true">
                            <au-row :gutter="16">
                                <au-col :span="12">
                                    <au-form-item prop="name" label="Nombre">
                                        <au-input v-model="model.name"></au-input>
                                    </au-form-item>
                                </au-col>

                                <au-col :span="12">
                                    <au-form-item prop="lastName" label="Apellido">
                                        <au-input v-model="model.lastName"></au-input>
                                    </au-form-item>
                                </au-col>
                            </au-row>

                            <au-row :gutter="16">
                                <au-col :span="24">
                                    <au-form-item prop="company" label="Compañía" help="Debe ser escrita en mayúscula.">
                                        <au-input v-model="model.company"></au-input>
                                    </au-form-item>
                                </au-col>
                            </au-row>

                            <au-row :gutter="16">
                                <au-col :span="24">
                                    <au-form-item prop="hasCar">
                                        <au-checkbox v-model="model.hasCar" label="Tiene Auto"/>
                                    </au-form-item>
                                </au-col>
                            </au-row>

                            <au-row :gutter="16">
                                <au-col :span="24">
                                    <au-button @click="submit">
                                        Registrar
                                    </au-button>
                                </au-col>
                            </au-row>
                        </au-form>
                    </au-col>
                </au-row>
            </div>
        </au-card>
    </div>
</template>

<script>
export default {
    name: 'InputCard',
    data() {
        return {
            model: {},
            rules: {
                name: [
                    { type: 'required', message: 'Ingrese un nombre para el usuario.' }
                ],
                company: [
                    { type: 'required', message: 'Ingrese una compañía para el usuario.' },
                    { type: 'validator', implement: this.customValidator }
                ],
            }
        }
    },
    methods: {
        submit () {
            this.$refs.formCustom.validate((error, values) => {
                console.log(error, values)
            })
        },

        customValidator (rule, value, callback) {
            if (value !== value.toUpperCase())
                callback('Ingrese el nombre en mayúsculas.')
            else
                callback()
        }
    },
}
</script>