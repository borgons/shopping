<template>
  <Banner class="mb-9" />

  <Welcome class="mb-9" />

  <Contact class="mb-9"  />

</template>

<script>
import Banner from '../layouts/Banner.vue'
import Welcome from '../layouts/Welcome.vue'
import Contact from '../layouts/Contact.vue'

export default {
  name: "Dashboard",
  components: {
    Banner,
    Welcome,
    Contact
  }
}
</script>

<style>

</style>