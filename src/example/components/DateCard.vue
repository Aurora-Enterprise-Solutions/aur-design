<template>
    <div>
        <au-card title="Date" description="Inputs de tipo date. Permiten ingresar fecha y tiempo." :collapsable="true" :default-collapsed="true">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                    <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                    <label class="title-tag">AuDatePicker / AuTimePicker</label>
                </div>
                <div>
                    <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>

            <div>
                <au-row :gutter="16" wrap="wrap">
                    <au-col :span="8">
                        <au-date-picker></au-date-picker>
                    </au-col>
                </au-row>
            </div>
        </au-card>
    </div>
</template>

<script>
    export default {
        name: 'DateCard'
    }
</script>