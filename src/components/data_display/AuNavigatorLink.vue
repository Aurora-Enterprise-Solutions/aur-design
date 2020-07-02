<template>
    <div class="au-navigator-link" :expanded="expanded">
        <div class="label-wrapper" @click="onClick($event)">
            <div class="icon">
                <au-icon v-if="icon" :icon="icon" :clickable="true"></au-icon>
            </div>
        
            <au-text tag="span" class="label">{{label}}</au-text>

            <div v-if="showChevron" class="icon chevron">
                <au-icon icon="chevron_up" :clickable="true"></au-icon>
            </div>
        </div>

        <div ref="submenu" class="sub-menu" :expanded="expanded" style="display: none">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuNavigatorLink',
    props: {
        id: {
            required: true,
            type: String
        },

        label: {
            required: true,
            type: String
        },

        to: {
            required: false,
            type: String,
            default: undefined
        },

        icon: {
            required: false,
            type: String,
            default: undefined
        },

        menu: {
            required: false,
            type: Array,
            default: undefined
        }
    },
    data() {
        return {
            expanded: false
        }
    },
    computed: {
        showChevron () {
            return this.menu && this.menu.length > 0
        }
    },
    mounted() {
        window.addEventListener("load", () => {
            this.changeMaxHeightToContent()
        })

        this.$refs.submenu.addEventListener('transitionstart', async (event) => {
            if (event.propertyName === 'max-height') {
                this.setChildrenDisplayValue(this.$children, 'block')

                this.$emit('expand', {
                    event: true,
                    height: Number(this.$refs.submenu.style.maxHeight.slice(0, -2))
                })
            }
        })

        this.$refs.submenu.addEventListener('transitionend', async (event) => {
            if (event.propertyName === 'max-height') {
                if (!this.expanded)
                    this.$refs.submenu.style.display = 'none'
            }
        })

        this.$children.forEach((c) => {
            if (c.$options['_componentTag'] === 'au-navigator-link') {
                c.$on('expand', (value) => {
                    this.changeMaxHeightToContent(value.event, value.height)
                })
            }
        })
    },
    updated() {
        this.changeMaxHeightToContent()
    },
    methods: {
        onClick(event) {
            event.preventDefault()

            if (this.menu && this.menu.length > 0) {
                this.expanded = !this.expanded

                if (this.expanded)
                    this.$refs.submenu.style.display = 'block'

                this.changeMaxHeightToContent()
            }

            this.$emit('go', {
                id: this.id,
                label: this.label,
                to: this.to,
                icon: this.icon,
                menu: this.menu
            })
        },

        changeMaxHeightToContent(event = false, height = 0) {
            if (!event) {
                if (this.expanded)
                    this.$refs.submenu.style.maxHeight = this.$refs.submenu.scrollHeight + "px"
                else
                    this.$refs.submenu.style.maxHeight = 0
            } else {
                this.$refs.submenu.style.maxHeight = this.$refs.submenu.scrollHeight + height + "px"
            }
        },

        setChildrenDisplayValue(children, value) {
            children.forEach((c) => {
                if (c.$options['_componentTag'] === 'au-navigator-link' && c.expanded)
                    c.$refs.submenu.style.display = value

                this.setChildrenDisplayValue(c.$children, value)
            })
        }
    }
}
</script>