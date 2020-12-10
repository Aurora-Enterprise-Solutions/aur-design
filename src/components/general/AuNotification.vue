<template>
    <div ref="notification" class="au-notification" :au-type="_type">
        <div ref="card" class="card">
            <div class="title-section">
                <au-text tag="h6">{{ _title }}</au-text>
            </div>

            <div v-if="message" class="message-section">
                <au-text>{{ message }}</au-text>
            </div>

            <div class="button-section">
                <au-button v-if="showOk" transparent @click="onOk">{{ okButtonLabel }}</au-button>
                <au-button v-if="showCancel && _type == 'confirm'" color="hight" transparent @click="onCancel">{{ cancelButtonLabel }}</au-button>
            </div>
        </div>
    </div>
</template>

<script>
    import AuText from './AuText'
    import AuButton from './AuButton'

    export default {
        name: 'AuNotification',
        components: { AuText, AuButton },
        props: {
            type: {
                type: String,
                required: false,
                default: 'success'
            },

            title: {
                type: String,
                required: false,
                default: null
            },

            message: {
                type: String,
                required: false
            },

            showOk: {
                type: Boolean,
                required: false,
                default: true
            },

            showCancel: {
                type: Boolean,
                required: false,
                default: false
            },

            okText: {
                type: String,
                required: false,
                default: null
            },

            cancelText: {
                type: String,
                required: false,
                default: null
            }
        },
        data() {
            return {
                TYPES: ['success', 'warning', 'error', 'confirm', 'info']
            }
        },
        computed: {
            _type () {
                return this.TYPES.includes(this.type) ? this.type : this.TYPES[0]
            },

            _title () {
                return this.title === null ? this.getTitleTextByType() : this.title
            },

            okButtonLabel () {
                return this.okText === null ? this.$t('aur_design.notification.ok_text') : this.okText
            },

            cancelButtonLabel () {
                return this.cancelText === null ? this.$t('aur_design.notification.cancel_text') : this.cancelText
            }
        },
        mounted () {
            this.$refs.card.style.opacity = 0

            this.$refs.card.addEventListener('animationend', () => {
                this.$refs.card.style.opacity = 1
            });
        },
        beforeDestroy () {
            this.$refs.notification.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 300
                });
        },
        methods: {
            getTitleTextByType () {
                switch (this._type) {
                    case 'success': { return this.$t('aur_design.notification.title.success') }
                    case 'warning': { return this.$t('aur_design.notification.title.warning') }
                    case 'error': { return this.$t('aur_design.notification.title.error') }
                    case 'confirm': { return this.$t('aur_design.notification.title.confirm') }
                    case 'info': { return this.$t('aur_design.notification.title.info') }
                    default: { return this.$t('aur_design.notification.title.success') }
                }
            },

            onOk () {
                this.$emit('ok')
            },

            onCancel () {
                this.$emit('cancel')
            }
        }
    }
</script>