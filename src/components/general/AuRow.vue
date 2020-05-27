<template>
    <div class="au-row">
        <!-- @slot Sitio donde se alojan los elementos -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AuRow',
    props: {
        /**
         * Separación entre los elementos en px.
         */
        gutter: {
            required: false,
            default: 0
        },

        /**
         * Dirección que puede tomar la fila.
         * @values row, row-reverse
         */
        direction: {
            required: false,
            type: String,
            default: 'row'
        },

        /**
         * Permite quebrar el encaje de los elementos en la fila.
         * @values nowrap, wrap, wrap-reverse
         */
        wrap: {
            required: false,
            type: String,
            default: 'nowrap'
        },

        /**
         * Esta es la alineación que toma de manera horizontal.
         * Hay que tener en consideración que tanto los valores space no son permitidos aún en algunos navegadores, por ende,
         * los más seguros de ocupar son: start, end y center.
         * @values start, end, center, space-between, space-around, space-evenly
         */
        justify: {
            required: false,
            type: String,
            default: 'start'
        },

        /**
         * Esta es la alineación que toma de manera vertical.
         * @values stretch, start, end, center, baseline
         */
        align: {
            required: false,
            type: String,
            default: 'stretch'
        },

        /**
         * Si la fila tiene espacio extra en el eje vertical, usted puede alinear todos los elementos en conjunto con esta propiedad.
         * @values stretch, start, end, center, space-between, space-around
         */
        alignContent: {
            required: false,
            type: String,
            default: 'stretch'
        },
    },
    mounted() {
        this.setGutter()
        this.setDirection()
        this.setWrap()
        this.setJustify()
        this.setAlign()
        this.setAlignContent()
    },
    updated() {
        this.setGutter()
        this.setDirection()
        this.setWrap()
        this.setJustify()
        this.setAlign()
        this.setAlignContent()
    },
    watch: {
        gutter: function() {
            this.setGutter()
        },

        direction: function() {
            this.setDirection()
        },

        wrap: function() {
            this.setWrap()
        },

        justify: function() {
            this.setJustify()
        },

        align: function() {
            this.setAlign()
        },

        alignContent: function() {
            this.setAlignContent()
        }
    },
    methods: {
        setGutter() {
            let cols = this.$el.querySelectorAll('.au-row > .au-col')

            // Es [horizontal, vertical]
            if (Array.isArray(this.gutter)) {
                const H_GUTTER = this.gutter[0]
                const V_GUTTER = this.gutter[1]

                cols.forEach((c) => {
                    c.style.paddingLeft = (H_GUTTER / 2) + 'px'
                    c.style.paddingRight = (H_GUTTER / 2) + 'px'
                    c.style.paddingTop = (V_GUTTER / 2) + 'px'
                    c.style.paddingBottom = (V_GUTTER / 2) + 'px'
                })

                if (cols.length > 0) {
                    if (H_GUTTER > 0 && V_GUTTER > 0) {
                        this.$el.style.margin = '-' + (V_GUTTER / 2) + 'px -' + (H_GUTTER / 2) + 'px'
                    } else if (H_GUTTER <= 0) {
                        this.$el.style.margin = '-' + (V_GUTTER / 2) + 'px 0'
                    } else if (V_GUTTER <= 0) {
                        this.$el.style.margin = '0 px -' + (H_GUTTER / 2) + 'px'
                    }
                }
            }

            // Es solo horizontal
            else {
                cols.forEach((c) => {
                    c.style.paddingLeft = (this.gutter / 2) + 'px'
                    c.style.paddingRight = (this.gutter / 2) + 'px'
                })

                if (cols.length > 0)
                    this.$el.style.margin = '0 px -' + (this.gutter / 2) + 'px'
            }
        },

        setDirection() {
            if (['row', 'row-reverse'].includes(this.direction))
                this.$el.style.flexDirection = this.direction
            else
                this.$el.style.flexDirection = 'row'
        },

        setWrap() {
            this.$el.style.flexWrap = this.wrap
        },

        setJustify() {
            this.$el.style.justifyContent = this.justify
        },

        setAlign() {
            this.$el.style.alignItems = this.align
        },

        setAlignContent() {
            this.$el.style.alignContent = this.alignContent
        }
    }
}
</script>