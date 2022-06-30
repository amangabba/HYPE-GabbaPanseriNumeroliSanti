<template>
    <div id="content" class="justify-content-center container">
        <PageTitle title="Contacts" />
        <div class="row m-2">
            <!--ToDo:chiedi come settare l'immagine, se h-auto o w-auto-->
            <img
                class="img-fluid col-lg-7 h-auto mt-2"
                src="https://www.eventi.polimi.it/wp-content/uploads/2020/10/FAI_800x600.jpg"
                alt="Politecnico Milano"
            />
            <div class="col-lg-5 text-left p-2">
                <div class="row bg-primary bg-opacity-10 text-center mb-2">
                    <h2 ref="map-title" class="display-3">Our Information</h2>
                </div>
                <div class="mb-2">
                    <b><i>Email:</i></b> lambrate.hypermedia@gmail.com
                </div>
                <div class="mb-2">
                    <b><i>Phone Number:</i></b> +39 3451234567
                </div>
                <div class="mb-2">
                    <b><i>Address:</i></b> Piazza Leonardo da Vinci, 32
                </div>
                <h2 class="mb-2"><i>Form</i></h2>
                <form class="justify-content-lg-center w-auto">
                    <div class="mb-2">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="form-label">Message</label>
                        <textarea class="form-control" rows="4"></textarea>
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
export default {
    name: 'ContactsComponent',
    methods: {
        submitForm() {
            window.alert('Your message has been delivered')
        }
    }
}
</script>

<style scoped></style>
