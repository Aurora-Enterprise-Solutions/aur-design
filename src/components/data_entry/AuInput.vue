<template>
    <div class="au-input au-input-text">
        <input :type="_type" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'AuInput',
    props: {
        /**
         * @values text, search, url, email
         */
        type: {
            required: false,
            type: String,
            default: 'text'
        },

        placeholder: {
            required: false,
            type: String,
            default: ''
        }
    },
    computed: {
        _type () {
            return ['text', 'search', 'url', 'email'].includes(this.type) ? this.type : 'text'
        }
    }
}
</script>