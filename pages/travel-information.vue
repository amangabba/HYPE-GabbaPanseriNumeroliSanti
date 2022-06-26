<template>
    <div id="content" class="justify-content-center container">
        <div
            class="title-row row p-4 text-center bg-primary bg-opacity-50 mb-2"
        >
            <h1 class="display-4">Travel Information</h1>
        </div>
        <TravelInfoButtons></TravelInfoButtons>
    </div>
</template>

<script>
import TravelInfoButtons from "~/components/TravelInfoButtons";
export default {
    name: 'TravelInformation',
    components: {TravelInfoButtons}
}
</script>

<style scoped></style>
