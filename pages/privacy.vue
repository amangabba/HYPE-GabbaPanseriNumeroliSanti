<template>
    <div class="justify-content-center container-fluid">
        <div id="content" class="container">
            <div class="justify-content-md-center">
                LAMbRate, in its quality of Data Controller (hereinafter,
                "Owner"), informs You that Your personal data will be processed
                in the following manner and for the following purposes:
            </div>

            <SectionTitle>Processing of personal data</SectionTitle>

            <div id="data" class="mt-2 mb-2">
                <div>
                    The Data Controller processes personal identification and
                    non-sensitive personal data (hereinafter, "Personal Data" or
                    just "Data") communicated by You when browsing the website
                    (hereinafter, "Site"). In particular:
                    <ul>
                        <li>
                            name, last name, e-mail address and any other
                            information shared by you when requesting
                            information through the contacts indicated on the
                            Site;
                        </li>
                        <li>
                            the e-mail address necessary for the purpose of
                            answering your messages;
                        </li>
                        <li>
                            browsing data such as IP addresses or domain names
                            of the computers used by users who connect to the
                            Site, the URI (Uniform Resource Identifier) of the
                            requested resources, the time of the request, the
                            method used to submit the request to the server, the
                            size of the file obtained in response, the numerical
                            code indicating the status of the response given by
                            the server (successful, error, etc.) and other
                            parameters relating to the operating system and the
                            user's computer environment. This information is
                            collected through the cookies.
                        </li>
                    </ul>
                </div>
            </div>

            <SectionTitle>Acceptance and Consent</SectionTitle>

            <div id="acceptance" class="mt-2 mb-2">
                The provision of data for service purposes is mandatory and
                failure to provide it will prevent You from browsing the site or
                requesting information. The provision of data for other purposes
                is optional.
            </div>

            <SectionTitle>Data Retention</SectionTitle>

            <div id="storage" class="mt-2 mb-2">
                The Data Controller will process the Personal Data for the time
                necessary to fulfill the aforementioned purposes and in any case
                for no more than 30 days from collection. Furthermore, your data
                will be made accessible for the above purposes only to the
                employees of the Data Controller, so they won't be neither
                disclosed nor transferred to third-party companies.
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle'

export default {
    name: 'PrivacyPage',
    components: { SectionTitle },
    layout: 'single-topic',
    head() {
        return {
            title: 'Privacy policy - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `How your data is collected, processed and stored.`
                }
            ]
        }
    },
    created() {
        this.$store.commit('setPageInfo', { title: 'Privacy policy' })
    }
}
</script>

<style scoped></style>
