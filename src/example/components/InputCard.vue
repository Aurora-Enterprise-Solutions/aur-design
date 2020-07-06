<template>
    <div>
        <au-card title="Input" description="Input que permite ingresar texto y número." :collapsable="true" :default-collapsed="true">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                <label class="title-tag">AuInput / AuInputNumber</label>
                </div>
                <div>
                <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>

            <div>
                <au-row :gutter="16" wrap="wrap">
                    <au-col :span="8">
                        <au-input placeholder="Ingrese un texto" />
                    </au-col>

                    <au-col :span="8">
                        <au-input-number justify="end" placeholder="Ingrese un número" :step="0.42" :max="10" :min="-3" :decimals="2" />
                    </au-col>
                </au-row>
            </div>
        </au-card>
    </div>
</template>

<script>
export default {
    name: 'InputCard'
}
</script>