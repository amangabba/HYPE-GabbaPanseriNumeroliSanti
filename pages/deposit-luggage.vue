<template>
    <div class="justify-content-center container-fluid">
        <div
            class="title-row row p-4 text-center bg-primary bg-opacity-50 mb-2"
        >
            <h1 class="display-4">Where to deposit your luggage</h1>
        </div>
        <div id="content" class="container">
            <div id="introduction" class="mx-auto">
                <div>
                    Luckily, most airports have a left luggage service where for a fee bags can be stored at the
                    airport and retrieved before a flight. In case this is not possible or it is uncomfortable,
                    there are several deposits across the town which can be used.
                    <br>
                    In order to organize your trip around the city, check this
                    <a href="https://goo.gl/maps/n29XiRQeb5TUT9jv8">link</a> if you need a deposit.
                </div>
            </div>
        </div>
        <TravelInfoButtons></TravelInfoButtons>
    </div>
</template>

<script>
import TravelInfoButtons from "~/components/TravelInfoButtons";
export default {
    name: 'DepositLuggage',
    components: {TravelInfoButtons}
}
</script>

<style scoped></style>
