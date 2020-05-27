<template>
    <div class="au-col">
        <!-- @slot Sitio donde se alojan los elementos -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AuCol',
    props: {
        /**
         * Número de espacios que tomará la columna al ocupar una fila.
         * El valor 0 significa width automático.
         * En cambio, si el span es igual a -1, entonces es equivalente a decir <code>display: none</code>.
         */
        span: {
            required: false,
            type: Number,
            default: 0
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        this.setSpan()
    },
    updated() {
        this.setSpan()
    },
    watch: {
        span: function() {
            this.setSpan()
        }
    },
    methods: {
        setSpan() {
            // Elimina toda clase de span previa.
            let spanArray = []
            for (let i = 1; i <= 24; i++) {
                spanArray.push('au-col-' + i)
            }
            this.$el.classList.remove(spanArray)
            this.$el.style.display = undefined

            // Registra la clase span correspondiente.
            if (this.span > 0 && this.span <= 24)
                this.$el.classList.add('au-col-' + this.span)
            else if (this.span == -1)
                this.$el.style.display = 'none'
        }
    }
}
</script>