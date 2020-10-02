<template>
    <div class="au-badge" ref="budge">
        <div class="span" ref="span">
            <label>{{ parsedCount }}</label>
        </div>

        <!-- @slot Usa este slot para ingresar el contenido del badge -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AuBadge',
        props: {
            /**
             * Cantidad mostrada.
             */
            count: {
                type: Number,
                required: false,
                default: 0
            },

            /**
             * Cantidad máxima mostrada, luego de esta se agrega un simbolo + a la derecha.
             */
            overflowCount: {
                type: Number,
                required: false,
                default: 99
            }
        },
        data () {
            return {
                observerInstance: undefined
            }
        },
        mounted() {
            this.setResizeObserver()
        },
        computed: {
            parsedCount () {
                if (this.count > this.overflowCount)
                    return this.overflowCount + '+'

                return this.count
            }
        },
        methods: {
            setResizeObserver () {
                this.observerInstance = new ResizeObserver((entries, observer) => {
                    this.setPositionSpan()
                })

                this.observerInstance.observe(this.$refs.span)
            },

            setPositionSpan() {
                const span = this.$refs.span
                const width = span.clientWidth
                const height = span.clientHeight

                this.$refs.budge.style.paddingTop = height / 2 + 'px'
                this.$refs.budge.style.paddingRight = width / 2 + 'px'
            }
        }
    }
</script>