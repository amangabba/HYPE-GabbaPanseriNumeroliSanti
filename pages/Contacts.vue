<template>
    <!-- Wrapper container -->
    <div class="container py-4">
        <div class="mb-3">Contact us:</div>
        <div class="mb-3">Email: lambrate.hypermedia@gmail.com</div>
        <div class="mb-3">Phone number: +39 3451234567</div>
        <div class="mb-3">Address: Piazza Leonardo da Vinci, 32</div>
        <h3 class="mb-3">Form</h3>
        <!-- Bootstrap 5 starter form -->
        <form>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control w-50">
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control w-50">
            </div>
            <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea class="form-control w-50" rows="4"></textarea>
            </div>
            <!--ToDo: chiedi come si fa per implementare la funzione che restituisce la stringa di conferma-->
            <button type="submit" class="btn btn-primary" onclick="submitForm()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Contacts",
    methods: {
        submitForm() {
            window.alert("Your message has been delivered")
        }
    }
}
</script>

<style scoped>

</style>
