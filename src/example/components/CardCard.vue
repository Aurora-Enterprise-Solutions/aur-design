<template>
    <div>
        <au-card title="Card" description="Tarjetas que permiten mostrar su contenido en espacios flotantes en la vista." :collapsable="true" :default-collapsed="true">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                <label class="title-tag">AuCard</label>
                </div>
                <div>
                <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>

            <div>
                <au-row :gutter="16" wrap="wrap">
                <au-col :span="8">
                    <au-card title="Normal Card" description="Esta es la descripción de esta tarjeta.">
                    <div style="height: 100px"></div>
                    </au-card>
                </au-col>

                <au-col :span="8">
                    <au-card title="Collapse Card" description="Esta tarjeta se puede esconder su contenido." :collapsable="true" :default-collapsed="true">
                    <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;">
                        <au-text tag="span" style-text="color: #95afb9; font-size: 0.7rem">CONTENIDO DE LA TARJETA</au-text>
                    </div>
                    </au-card>
                </au-col>

                <au-col :span="8">
                    <au-card title="Hoverable Card" description="Esta tarjeta se muestra con mayor intensidad." :hoverable="true">
                    <div style="height: 100px"></div>
                    </au-card>
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