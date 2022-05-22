<template>
    <div class="custom-card card mt-3 col-sm-2 m-2">
        <img :src="imageLink" class="card-img-top" :alt="title" />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
            <p>
                {{ description }}
            </p>
            <NuxtLink :to="link" class="btn btn-primary"> See more </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomCard',
    props: {
        imageLink: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type:String,
            default: ''
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped></style>
