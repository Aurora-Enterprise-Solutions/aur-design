<template>
    <div class="au-icon">
        <component :is="icon"></component>
        <!-- <img v-if="icon" :src="getSrc()"> -->
    </div>
</template>

<script>
export default {
    name: 'AuIcon',
    props: {
        icon: {
            required: true,
            type: String
        }
    },
    methods: {
        getSrc() {
            try {
                let images = require.context('@aurora-enterprise-solutions/aur-icon/src/assets/icons/', false, /\.svg$/)
                return images('./' + this.icon + ".svg")
            } catch (e) {
                throw `Error: Cannot find icon '${this.icon}'`
            }            
        }
    }
}
</script>