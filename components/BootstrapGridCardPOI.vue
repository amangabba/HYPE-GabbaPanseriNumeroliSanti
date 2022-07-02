<template>
    <div
        :id="cardId"
        :class="active ? 'card mb-3 bg-primary bg-opacity-10' : 'card mb-3'"
    >
        <div class="row g-0">
            <div class="col-md-3 my-auto p-3">
                <img
                    class="img-fluid rounded-start rounded-2"
                    :src="imageLink"
                    :alt="imageText"
                />
            </div>
            <div class="col-md-9">
                <div class="card-body d-flex flex-column h-100">
                    <h5 class="card-title">
                        {{ title }}
                    </h5>
                    <p class="card-text text-muted">
                        {{ subtitle }}
                    </p>

                    <p v-if="content !== ''" class="card-text">{{ content }}</p>
                    <div class="row justify-content-start mt-auto">
                        <!-- Open the page regarding the POI -->
                        <a
                            class="col-md-2 btn btn-primary m-1 p-1"
                            :href="link"
                        >
                            {{ linkText }}
                        </a>

                        <!-- Button to show on map the selected POI and Scroll the map into view -->
                        <button
                            class="col-md-2 btn btn-primary m-1 p-1"
                            @click="callParentFunction"
                        >
                            {{ buttonText }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BootstrapGridCardPOI',
    props: {
        cardId: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: false,
            default: false
        },
        imageLink: {
            type: String,
            required: true
        },
        imageText: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: ''
        },
        link: {
            type: String,
            required: true
        },
        linkText: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
        poi: {
            type: Object,
            required: true
        }
    },
    methods: {
        callParentFunction() {
            this.$emit(
                'putMarker',
                this.poi.number,
                this.poi.latitude,
                this.poi.longitude,
                this.poi.name,
                this.poi.address
            )
        }
    }
}
</script>

<style scoped>
.card:hover {
    border: 2px solid var(--bs-primary);
}
.card {
    border: 2px solid rgba(229, 229, 229, 1);
    max-width: 80%;
}
</style>
