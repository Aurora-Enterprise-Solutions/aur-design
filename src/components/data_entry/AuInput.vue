<template>
    <div class="au-input au-input-text">
        <input :value="value" :type="_type" :placeholder="placeholder" @change="onChange" @input="onInput">
    </div>
</template>

<script>
export default {
    name: 'AuInput',
    props: {
        /**
         * @values text, search, url, email, date, time, datetime-local, month
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
        },

        value: {
            required: false,
            type: String,
            default: undefined
        }
    },
    computed: {
        _type () {
            return ['text', 'search', 'url', 'email', 'date', 'time', 'datetime-local', 'month'].includes(this.type) ? this.type : 'text'
        }
    },
    methods: {
        onChange (event) {
            this.$emit('change', event.target.value)
        },

        onInput (event) {
            this.$emit('input', event.target.value)
        }
    },
}
</script>