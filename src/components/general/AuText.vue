<template>
    <div class="au-text">
        <component :is="_tag" :style="styleText">
            <!-- @slot Usa este slot para introducir el texto -->
            <slot></slot>
        </component>
    </div>
</template>

<script>
    export default {
        name: 'AuText',
        props: {
            /**
             * Tag de texto.
             * @values h1, h2, h3, h4, h5, h6, p, label, span
             */
            tag: {
                type: String,
                required: false,
                default: 'p'
            },

            styleText: {
                type: String,
                required: false,
                default: ''
            }
        },
        data() {
            return {
                TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'span']
            }
        },
        computed: {
            _tag() {
                return this.TAGS.includes(this.tag) ? this.tag : 'p'
            }
        }
    }
</script>