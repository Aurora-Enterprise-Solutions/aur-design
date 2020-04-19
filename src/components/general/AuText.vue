<template>
    <div class="au-text">
        <component :is="_tag">
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
             * @values h1, h2, h3, p, label
             */
            tag: {
                type: String,
                required: false,
                default: 'p'
            }
        },
        data() {
            return {
                TAGS: ['h1', 'h2', 'h3', 'p', 'label']
            }
        },
        computed: {
            _tag() {
                return this.TAGS.includes(this.tag) ? this.tag : 'p'
            }
        }
    }
</script>