<template>
    <div class="au-navigator">
        <div class="au-navigator-content">
            <au-navigator-link :ref="'link-' + a.id" v-for="a in config" :key="a.id" v-bind="a" @go="onClickLink">
                <au-navigator-link :ref="'link-' + b.id" v-for="b in a.menu" :key="b.id" v-bind="b" @go="onClickLink">
                    <au-navigator-link :ref="'link-' + c.id" v-for="c in b.menu" :key="c.id" v-bind="c" @go="onClickLink" />
                </au-navigator-link>
            </au-navigator-link>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import AuNavigatorLink from '@/components/data_display/AuNavigatorLink'

export default {
    name: 'AuNavigator',
    components: { AuNavigatorLink },
    props: {
        /**
         * Key del link seleccionado.
         */
        value: {
            required: true,
            type: String
        },

        /**
         * Array de links.
         */
        config: {
            required: true,
            type: Array
        }
    },
    data() {
        return {
            childPath: []
        }
    },
    mounted() {
        this.getChildPath(this.value)
    },
    watch: {
        value (newValue) {
            this.getChildPath(newValue)
        }
    },
    methods: {
        onClickLink(event) {
            if (event.to && (!event.menu || event.menu.length == 0)) {
                this.getChildPath(event.id)
                /**
                 * Evento input, sirve para el v-model.
                 * Este se gatilla cada vez que se da click sobre un link con la propiedad 'to' definida.
                 * @property {String} event id del link seleccionado
                 */
                this.$emit('input', event.id)

                /**
                 * Evento go que se gatilla cada vez que se da click sobre un link.
                 * @property {{
                        id: String,
                        label: String,
                        to: String,
                        icon: String,
                        menu: Array
                    }} event objeto con la estructura definida del link
                 */
                this.$emit('go', event)
            }
        },

        /**
         * Obtiene el path completo del link seleccionado.
         * Sirve para seleccionar todos los padres de dicho link.
         */
        getChildPath(id) {
            this.childPath = []
            this.searchLink(id, this.config, this.childPath)
            this.setActiveIds()
        },

        /**
         * Recorre de manera recursiva insertando en el path todos los id de padres y link seleccionado.
         */
        searchLink(id, menu, path) {
            let flag = false
            
            if (menu) {
                for (let i=0; i < menu.length; i++) {
                    let link = menu[i]

                    if (link.id == id) {
                        path.push(link.id)
                        flag = true
                        break
                    } else if (link.menu) {
                        if (this.searchLink(id, link.menu, path)) {
                            path.push(link.id)
                            flag = true
                            break
                        }
                    }
                }
            }

            return flag
        },

        /**
         * Configura como activo a los link dentro del path.
         */
        setActiveIds() {
            _.forEach(this.$refs, (link) => {
                link[0].$el.classList.remove('active')
            })

            this.childPath.forEach((id) => {
                if (this.$refs['link-' + id])
                    this.$refs['link-' + id][0].$el.classList.add('active')
            })
        }
    }
}
</script>