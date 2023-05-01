  <script>
  import WelcomeCard from '../components/WelcomeCard.vue'
  export default {
    components: {
      WelcomeCard
    }
  }
  </script>

<template>
  <section id="welcome">
    <h3 class="text-h3 text-center font-weight-bold mb-8">Welcome to my shopping site</h3>

    <v-container class="d-flex flex-row justify-center">
      <WelcomeCard />
    </v-container>
  </section>

</template>


<style>

</style>