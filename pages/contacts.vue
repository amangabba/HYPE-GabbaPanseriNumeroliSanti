<template>
    <div id="content" class="justify-content-center container">
        <div class="row m-2">
            <img
                class="img-fluid col-lg-7 h-auto mt-2"
                src="/images/poli.png"
                alt="Politecnico Milano"
            />
            <!-- Section with information about our contacts (they are fictitious) -->
            <div class="col-lg-5 text-left p-2">
                <SectionTitle>Our Information</SectionTitle>

                <div class="mb-2">
                    <b><i>Email:</i></b> lambrate.hypermedia@gmail.com
                </div>
                <div class="mb-2">
                    <b><i>Phone Number:</i></b> +39 3451234567
                </div>
                <div class="mb-2">
                    <b><i>Address:</i></b> Piazza Leonardo da Vinci, 32
                </div>

                <SectionTitle>Contact Us</SectionTitle>

                <!-- Section with a form. The Submit button only responds with an
                acknowledge message through the function "submitForm()" without processing the received
                 message -->
                <form class="justify-content-lg-center w-auto">
                    <div class="mb-2">
                        <label class="form-label" for="name">Name</label>
                        <input id="name" type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label" for="email">Email</label>
                        <input id="email" type="email" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label" for="message">Message</label>
                        <textarea
                            id="message"
                            class="form-control"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary mt-4"
                        @click="submitForm()"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle'

/**
 * Page containing information about our Contacts (they are fictitious)
 */
export default {
    name: 'ContactsComponent',
    components: { SectionTitle },
    layout: 'single-topic',
    head() {
        return {
            title: 'Contacts - Turin',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `How to contact us: phone, email and address...`
                }
            ]
        }
    },
    // Set page information in store to render it
    created() {
        this.$store.commit('setPageInfo', { title: 'Contacts' })
    },
    methods: {
        /**
         * This method just return the specified string after a form is submitted
         */
        submitForm() {
            window.alert('Your message has been delivered')
        }
    }
}
</script>

<style scoped></style>
