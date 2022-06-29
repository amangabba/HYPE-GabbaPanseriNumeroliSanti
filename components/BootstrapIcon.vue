<template>
    <i :class="name" :style="style"></i>
</template>

<script>
/**
 * Component to show an icon from the BootstrapIcon font
 */
export default {
    name: 'BootstrapIcon',
    props: {
        /**
         * Name of the icon, this is the string in the class attribute when searching for
         * icons on the website
         */
        name: {
            type: String,
            required: true
        },
        /**
         * Size of the icon, can be any valid css size
         */
        size: {
            type: String,
            required: false,
            default: null
        },
        /**
         * Color of the icon, can be any valid css color
         */
        color: {
            type: String,
            required: false,
            default: null
        }
    },
    computed: {
        style() {
            let style = ''
            if (this.size) style += `font-size: ${this.size};`
            if (this.color) style += ` color: ${this.color};`
            return style
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css');
</style>
