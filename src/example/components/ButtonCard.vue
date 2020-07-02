<template>
    <div>
        <au-card title="Buttons" description="Tipos de botones. Permiten hacer llamadas a métodos." :collapsable="true" :default-collapsed="true">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                <label class="title-tag">AuButton</label>
                </div>
                <div>
                <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>
            <div>
                <au-row :gutter="[16, 8]" wrap="wrap">
                <au-col>
                    <au-button color="primary" :disabled="false" @click="buttonClick">Primary</au-button>
                </au-col>
                <au-col>
                    <au-button color="hight" :disabled="false" @click="buttonClick">Hight Contrast</au-button>
                </au-col>
                <au-col :span="0">
                    <au-button :disabled="true" @click="buttonClick">Disabled</au-button>
                </au-col>
                </au-row>
            </div>
        </au-card>
    </div>
</template>

<script>
export default {
    name: 'ButtonCard',
    methods: {
      buttonClick(event) {
        console.log('Button Click!', event);
      }
    }
}
</script>