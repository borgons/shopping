<script>
export default {

}
</script>

<template>
  <section id="contacts">
    <h3 class="text-h3 text-center font-weight-bold mb-8">Contact us</h3>
    <v-container class="mb-6">
      <v-row
        justify="center"
        no-gutters
      >
        <v-col cols="6" align="center">
          <img class="h-50 w-50" src="https://www.svgrepo.com/show/211577/telephone-phone.svg" alt="telephone" >
        </v-col>
        <v-sheet color="grey-darken-4" class="rounded w-50 h-50 pa-5">
          <div class="text-center">
            <img class="contacts" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="facebook">  <h5 class="text-h5">facebook.com/rrborgonia</h5>
            <img class="contacts" src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="instagram">  <h5 class="text-h5">instagram.com/rrborgonia</h5>
            <img class="contacts" src="https://www.svgrepo.com/show/396567/globe-with-meridians.svg" alt="website">  <h5 class="text-h5">rrborgonia.com/store</h5>
          </div>
        </v-sheet>
      </v-row>

    </v-container>
  </section>
</template>


<style>
  .contacts {
    width: 50px;
  }
</style>