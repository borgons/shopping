<template>

  <v-container>
    <v-card
      class="mx-auto flex flex-col w-50 mb-8 pa-8"
      color="grey-darken-4"
      max-width="600"
      >
      <v-row class="justify-center">
        <v-img
          class="mb-8"
          src="https://www.svgrepo.com/show/402882/warning.svg"
          aspect-ratio="16/9"
          height="150px"
          width="150px"
        > 
        </v-img>

        <p class="text-center text-h6 mb-8">
          You need to purchased product first before you proceed!!!
        </p>


        <router-link to="/marketPlace">
          <v-btn
            class="me-4"
            type="submit"
            color="orange-lighten-2"
          >
            <v-icon class="me-3" icon="fas fa-shopping-cart"></v-icon>
            <span class="text-menu text-capitalized">Shop Now</span>
          </v-btn>
        </router-link>
      </v-row>

    </v-card>
  </v-container>

</template>

<script>
export default {

}
</script>

<style>

</style>