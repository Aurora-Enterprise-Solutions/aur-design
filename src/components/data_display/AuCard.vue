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
                <plus-square v-if="isCollapsed" width="1rem" :animatable="true" :hoverable="true" :clickable="true" @click="onCollapse"></plus-square>
                <minus-square v-else width="1rem" :animatable="true" :hoverable="true" :clickable="true" @click="onCollapse"></minus-square>
            </div>
        </div>

        <div ref="body" class="body">
            <!-- @slot Usa este slot para ingresar el contenido de la tarjeta -->
            <slot></slot>
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
        }
    },
    components: { AuText },
    data() {
        return {
            isCollapsed: this.defaultCollapsed,
            contentHeight: 0
        }
    },
    mounted() {
        window.addEventListener("load", () => {
            this.changeMaxHeightToContent()
        })
    },
    methods: {
        onCollapse () {
            if (this.collapsable && !this.animating) {
                this.isCollapsed = !this.isCollapsed

                this.changeMaxHeightToContent()

                /**
                 * Evento click.
                 * @property {Boolean} isCollapsed valor que posee la propiedad collapsed
                 */
                this.$emit('collapse', this.isCollapsed)
            }
        },

        changeMaxHeightToContent() {
            if (this.isCollapsed)
                this.$refs.body.style.maxHeight = 0
            else
                this.$refs.body.style.maxHeight = this.$refs.body.scrollHeight + "px"
        }
    }
}
</script>