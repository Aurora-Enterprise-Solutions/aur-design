<template>
  <div class="au-card" :au-collapsed="isCollapsed" :au-loading="loading" :au-hoverable="hoverable" :au-clickable="clickable">
      <div class="header" @click="onCollapse">
          <div class="title-section">
              <h3>{{ title }}</h3>
          </div>

          <div class="extra-section">
              <slot name="extra"></slot>
          </div>
      </div>

      <div class="body" @click="onClick">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AuCard',
    props: {
        /**
         * Propiedad que permite a la tarjeta expandirse o no.
         */
        collapsed: {
            type: Boolean,
            required: false,
            default: false
        },

        /**
         * Título de la tarjeta.
         */
        title: {
            type: String,
            required: false,
            default: ''
        },

        /**
         * Muestra spin de cargando sobre la tarjeta.
         */
        loading: {
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
         * La tarjeta puede ser presionada emitiendo un evento click.
         */
        clickable: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            isCollapsed: this.collapsed
        }
    },
    methods: {
        onCollapse () {
            this.isCollapsed = !this.isCollapsed

            /**
             * Evento click.
             * @property {Boolean} isCollapsed valor que posee la propiedad collapsed
             */
            this.$emit('collapse', this.isCollapsed)
        },

        onClick () {
            if (this.clickable)
                /**
                 * Evento que se gatilla cuando se presiona sobre el body de la tarjeta (card).
                 * Este evento sólo es llamado si la prop clickeable está como true.
                 */
                this.$emit('click')
        }
    }
}
</script>