<template>
    <div class="au-card" :au-collapsable="collapsable" :au-hoverable="hoverable" :au-collapsed="isCollapsed">
        <div class="header">
            <div class="title-section">
                <!-- @slot Aquí se puede modificar la distribución del título.
                        @binding {{ title, description }} header
                -->
                <slot name="title" :header="{ title, description }">
                    <au-text tag="h5">{{ title }}</au-text>
                    <au-text tag="p">{{ description }}</au-text>
                </slot>
            </div>

            <div class="extra-section">
                <!-- @slot Ingresa contenido extra al costado derecho del header. -->
                <slot name="extra"></slot>
            </div>

            <div v-if="collapsable == true" class="icon-section">
                <div v-if="isCollapsed">
                    <au-icon icon="plus_square" :animatable="true" :clickable="true" @click="onCollapse"></au-icon>
                </div>
                <au-icon v-else msg="minus_square" icon="minus_square" :animatable="true" :clickable="true" @click="onCollapse"></au-icon>
            </div>
        </div>

        <div ref="body" class="body">
            <div ref="contentWrapper" class="body-content-wrapper">
                <!-- @slot Usa este slot para ingresar el contenido de la tarjeta -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import AuText from './../general/AuText'

export default {
    name: 'AuCard',
    props: {
        /**
         * Título de la tarjeta.
         */
        title: {
            type: String,
            required: false,
            default: ''
        },

        /**
         * Descripción de la tarjeta.
         */
        description: {
            type: String,
            required: false,
            default: ''
        },

        /**
         * Propiedad que permite a la tarjeta expandirse o no al montarse.
         */
        defaultCollapsed: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Define si el componente se puede o no colapsar.
         */
        collapsable: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Define si la tarjeta posee o no efecto de hover.
         */
        hoverable: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Alto en px del contenido de la tarjeta máximo.
         * Si no se especifica, el tamaño será relativo al contenido.
         */
        height: {
            type: Number,
            required: false,
            default: undefined
        }
    },
    components: { AuText },
    data() {
        return {
            isCollapsed: this.defaultCollapsed,
            contentHeight: 0,
            observerInstance: undefined
        }
    },
    mounted() {
        window.addEventListener("load", () => {
            this.changeMaxHeightToContent()
        })

        this.setResizeObserver()
        this.onChildUpdate()
    },
    updated() {
        this.changeMaxHeightToContent()
        this.onChildUpdate()
    },
    methods: {
        onCollapse () {
            if (this.collapsable) {
                this.isCollapsed = !this.isCollapsed

                this.changeMaxHeightToContent()

                /**
                 * Evento click.
                 * @property {Boolean} isCollapsed valor que posee la propiedad collapsed
                 */
                this.$emit('collapse', this.isCollapsed)
            }
        },

        setResizeObserver () {
            this.observerInstance = new ResizeObserver((entries, observer) => {
                this.changeMaxHeightToContent()
            })
        },

        onChildUpdate () {
            if (this.observerInstance) {
                this.observerInstance.disconnect()
                let children = this.$refs.body.querySelectorAll(':scope > *')

                children.forEach((c) => {
                    this.observerInstance.observe(c, {
                        box: 'border-box'
                    })
                })
            }
        },

        changeMaxHeightToContent() {
            if (this.height !== undefined)
                this.$refs.contentWrapper.style.height = this.height + "px"
            
            if (this.isCollapsed)
                    this.$refs.body.style.maxHeight = 0
            else {
                if (this.height !== undefined)
                    this.$refs.body.style.maxHeight = this.height + "px"
                else
                    this.$refs.body.style.maxHeight = this.$refs.body.scrollHeight + "px"
            }
        }
    }
}
</script>