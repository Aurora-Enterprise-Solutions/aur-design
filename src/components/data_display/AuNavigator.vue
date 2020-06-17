<template>
    <div class="au-navigator">
        <div class="au-navigator-content">
            <au-navigator-link v-for="a in config" :key="a.id" v-bind="a" @go="onClickLink">
                <au-navigator-link v-for="b in a.menu" :key="b.id" v-bind="b" @go="onClickLink">
                    <au-navigator-link v-for="c in b.menu" :key="c.id" v-bind="c" @go="onClickLink" />
                </au-navigator-link>
            </au-navigator-link>
        </div>
    </div>
</template>

<script>
import AuNavigatorLink from '@/components/data_display/AuNavigatorLink'

export default {
    name: 'AuNavigator',
    props: {
        config: {
            required: true,
            type: Array
        }
    },
    methods: {
        onClickLink(event) {
            console.log(event)
        }
    }
}
</script>