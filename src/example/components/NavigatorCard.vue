<template>
    <div>
        <au-card title="Navigator" description="Widget que permite desplegar una lista de links." :collapsable="true" :default-collapsed="true">
            <div slot="title" slot-scope="headerProps" class="app-card-title">
                <div>
                <au-text tag="h5" class="title-scope">{{ headerProps.header.title }}</au-text>
                <label class="title-tag">AuNavigator</label>
                </div>
                <div>
                <au-text tag="span">{{ headerProps.header.description }}</au-text>
                </div>
            </div>
            <div>
                <au-row :gutter="16">
                    <au-col>
                        <au-navigator v-model="selected" link-key="id" :config="config" />
                    </au-col>
                </au-row>
            </div>
        </au-card>
    </div>
</template>

<script>
export default {
    name: 'NavigatorCard',
    data() {
        return {
            selected: 'section-ab',
            config: [
                { id: 'home', label: 'Home', icon: 'home', menu: [
                    { id: 'section-a', label: 'Section A', to: '/section-a', menu: [
                        { id: 'section-aa', label: 'Section AA', to: '/section-aa' },
                        { id: 'section-ab', label: 'Section AB', to: '/section-ab' }
                    ] },
                    { id: 'section-b', label: 'Section B', to: '/section-b' },
                    { id: 'section-c', label: 'Section C', to: '/section-c' }
                ] },
                { id: 'about-us', label: 'About us', icon: 'info_circle', to: '/about-us' },
                { id: 'contact', label: 'Contact', icon: 'phone', to: '/contact' }
            ]
        }
    }
}
</script>