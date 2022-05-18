//  this is the page for a specific event
<template>
  <div class="text-center">
    <div  class="row">
       <h1>{{ title }}</h1>
    <div class="row">
            <b>The event starts on {{ start_date }} and ends on {{ end_date }}</b>
            <p>{{ description }}</p>
            <p>{{ address }} </p>
            <img class="w-50 mx-auto"/>
    </div>

    
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToList"
          >
            Back to list
          </button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img class="rounded-lg-3" :src="img" alt="" width="" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailsPage',
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/cats/' + id)
    return {
      name: data.name,
      breed: data.breed,
      img: data.img,
      description: data.description,
      location: data.location
    }
  },
}
</script>

<style scoped></style>
