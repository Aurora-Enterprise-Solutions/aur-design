<template>
    <div>
        <au-card title="Text" description="Widget que permite desplegar un texto." :collapsable="true" :default-collapsed="true">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                <label class="title-tag">AuText</label>
                </div>
                <div>
                <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>
            <div>
                <au-row :gutter="16" wrap="wrap" align="baseline">
                <au-col><au-text tag="h1">H1</au-text></au-col>
                <au-col><au-text tag="h2">H2</au-text></au-col>
                <au-col><au-text tag="h3">H3</au-text></au-col>
                <au-col><au-text tag="h4">H4</au-text></au-col>
                <au-col><au-text tag="h5">H5</au-text></au-col>
                <au-col><au-text tag="h6">H6</au-text></au-col>
                </au-row>

                <au-row :gutter="16" wrap="wrap">
                <au-col>
                    <au-text tag="p">paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente, facilis saepe aliquid consectetur in eligendi rerum architecto cumque at ipsa beatae fugit nisi ipsum eos ratione, debitis placeat? Optio.</au-text>
                </au-col>
                </au-row>
            </div>
        </au-card>
    </div>
</template>

<script>
export default {
    name: 'TextCard'
}
</script>