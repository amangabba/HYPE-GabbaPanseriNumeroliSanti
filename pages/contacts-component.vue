<template>
    <div id="content" class="container">
        <div class="row m-2">
            <img class="col-md-6 h-auto" src="https://www.eventi.polimi.it/wp-content/uploads/2020/10/FAI_800x600.jpg" alt="Politecnico Milano">
            <div class="col-6 text-left p-4">
                <h1 class="mb-3"><b><i>Contact us:</i></b></h1>
                <div class="mb-3">Email: lambrate.hypermedia@gmail.com</div>
                <div class="mb-3">Phone number: +39 3451234567</div>
                <div class="mb-3">Address: Piazza Leonardo da Vinci, 32</div>
                <h3 class="mb-3"><i>Form</i></h3>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control w-100">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control w-100">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Message</label>
                        <textarea class="form-control w-100" rows="4"></textarea>
                    </div>
                    <!--ToDo: chiedi come si fa per implementare la funzione che restituisce la stringa di conferma-->
                    <button type="submit" class="btn btn-primary" @click="submitForm()">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactsComponent",
    methods: {
        submitForm() {
            window.alert("Your message has been delivered")
        }
    }
}
</script>

<style scoped>

</style>
