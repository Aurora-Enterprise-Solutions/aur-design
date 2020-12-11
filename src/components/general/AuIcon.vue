<template>
    <div ref="bm" class="au-icon" :au-clickable="clickable" @click="onClick" />
</template>

<script>
    import lottie from 'lottie-web'

    export default {
        name: 'AuIcon',
        props: {
            icon: {
                required: true,
                type: String
            },

            animatable: {
                required: false,
                type: Boolean,
                default: false
            },

            clickable: {
                required: false,
                type: Boolean,
                default: false
            },

            loop: {
                required: false,
                type: Boolean,
                default: false
            }
        },
        mounted () {
            setTimeout(() => {
                this.anim = lottie.loadAnimation({
                    container: this.$refs.bm,
                    animationData: require(`./../../assets/icons/bodymovin/${this.icon}/data.json`),
                    renderer: 'svg',
                    loop: this.loop,
                    autoplay: this.animatable,
                    name: this.icon,
                    rendererSettings: {
                        progressiveLoad: true,
                        hideOnTransparent: false
                    }
                })

                if (!this.animatable)
                    this.anim.goToAndPlay((this.anim.totalFrames - 1), true)
            }, 1)
        },
        beforeDestroy () {
            if (this.anim)
                this.anim.destroy()
        },
        methods: {
            onClick() {
                if (this.clickable)
                    this.$emit('click', this.anim)
            },

            goToAndStop(value) {
                this.anim.goToAndStop((value - 1), true)
            },

            play() {
                this.anim.goToAndPlay(0, true)
            }
        }
    }
</script>
