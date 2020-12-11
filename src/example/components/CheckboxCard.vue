<template>
    <div>
        <au-card title="Checkbox" description="Widget que permite desplegar un switch." :collapsable="true" :default-collapsed="false">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                <label class="title-tag">AuCheckbox</label>
                </div>
                <div>
                <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>
            <div>
                <au-row :gutter="16" wrap="wrap">
                    <au-col>
                        <au-checkbox label="Texto de Prueba"/>
                    </au-col>

                    <au-col>
                        <au-checkbox label="Checkbox deshabilitado" disabled/>
                    </au-col>
                </au-row>
            </div>
        </au-card>
    </div>
</template>

<script>
export default {
    name: 'CheckboxCard'
}
</script>