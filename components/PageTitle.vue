<template>
    <div class="row justify-content-center p-5 bg-primary bg-opacity-50">
        <img v-if="iconUrl" :src="iconUrl" :alt="title" />
        <h1 class="display-4">{{ title }}</h1>
        <span v-if="subtitle">{{ subtitle }}</span>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false,
            default: null
        },
        iconUrl: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style scoped></style>
