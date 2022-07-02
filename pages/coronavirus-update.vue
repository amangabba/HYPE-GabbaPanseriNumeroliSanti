<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <SectionTitle>Vaccination and mask rules</SectionTitle>

            <div id="rules" class="mx-auto">

                <h4 class="mt-2">Public spaces and services</h4>
                <p>
                    Until at least 30 September, the use of FFP2 masks are
                    compulsory in the following cases:
                </p>
                <ul>
                    <li>when entering Italy by plane, ferry, train or coach</li>
                    <li>
                        on public transport within the country, including
                        commercial flights, boats, ferries, interregional
                        trains, buses, subways, cars and taxis with a driver
                    </li>
                    <li>
                        when visiting healthcare facilities such as hospitals
                        and care homes
                    </li>
                </ul>
                <p>However, starting from June 01 2022, it is no longer required to show the Green pass (i.e. Anti-COVID 19 vaccination certificate or recovery certificate, or a negative swab test).</p>
                <h4 class="mt-2">
                    Developing symptoms of COVID-19 while in Italy
                </h4>
                <p>
                    If you think you have symptoms, including a fever or
                    respiratory difficulties such as shortness of breath or a
                    cough, you should stay in your accommodation and call the
                    regional hotline (<b>800 957 795</b>). You can also call
                    your local ASL (Azienda Sanitaria Locale).
                </p>
            </div>

            <SectionTitle>Where to get tested</SectionTitle>

            <div id="tests" class="list-group mx-auto">
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Farmacia San Domenico</h5>
                    </div>
                    <p class="mb-1">
                        Corso Unione Sovietica, 585 (<a
                            href="https://goo.gl/maps/2t2Fsp6RYjp2Tc1Z6"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Farmacia Anedda</h5>
                    </div>
                    <p class="mb-1">
                        Corso Vittorio Emanuele II, 34/B (<a
                            href="https://g.page/farmaciaanedda?share"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Farmacia Donato</h5>
                    </div>
                    <p class="mb-1">
                        Corso Francia, 385 (<a
                            href="https://goo.gl/maps/6usm3f2YSvFQiNgi7"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
            </div>

            <SectionTitle>Where to get vaccinated</SectionTitle>

            <div id="vaccinations" class="list-group mx-auto">
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Farmacia San Domenico</h5>
                    </div>
                    <p class="mb-1">
                        Corso Unione Sovietica, 585 (<a
                            href="https://goo.gl/maps/2t2Fsp6RYjp2Tc1Z6"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Farmacia Anedda</h5>
                    </div>
                    <p class="mb-1">
                        Corso Vittorio Emanuele II, 34/B (<a
                            href="https://g.page/farmaciaanedda?share"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
                <div
                    class="list-group-item list-group-item-action flex-column align-items-start"
                >
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Farmacia Donato</h5>
                    </div>
                    <p class="mb-1">
                        Corso Francia, 385 (<a
                            href="https://goo.gl/maps/6usm3f2YSvFQiNgi7"
                            target="_blank"
                            >Get directions</a
                        >)
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoronavirusUpdate',
    layout: 'single-topic',
    head() {
        return {
            title: 'Turin - Coronavirus Update',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `What to do and not to do while visiting the city during the pandemic, where to get tested and vaccinated.`
                }
            ]
        }
    },
    created() {
        this.$store.commit('setPageInfo', { title: 'Coronavirus update' })
    }
}
</script>

<style scoped>
#vaccinations,
#tests,
#rules {
    max-width: 80%;
}
</style>
