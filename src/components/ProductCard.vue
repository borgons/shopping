<template>
  <v-card 
    class="mx-auto flex flex-col w-50 mb-8" 
    color="grey-darken-4"
    max-width="350"
  >
    <v-img
      :src="product.productImg"
      height="300px"
      width="350px"
      cover
    > 
    </v-img>

    <v-card-title>
      {{product.productName}}
    </v-card-title>

    <v-card-subtitle>
      {{ product.productDescription }}
    </v-card-subtitle>

    <v-card-actions>
      <h6 class="text-h6 text-left ms-2">
        P {{ product.productPrice }}
      </h6>

      <v-spacer></v-spacer>


      <!-- DIALOGS PART  -->

      <div class="text-center">
        <v-dialog
          v-model="dialog"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="orange-lighten-2"
              v-bind="props"
            >
              Open Dialog
            </v-btn>
          </template>

          <v-card>
            <v-toolbar 
              color="green-accent-4">

              <v-btn
                icon
                @click="dialog = false"  
              >
                <v-icon icon="fas fa-arrow-left"></v-icon>
              </v-btn>
              <v-toolbar-title>{{product.productName}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
        
              </v-toolbar-items>
            </v-toolbar>

            <v-card-text>
              <ProductInfo :product="product"/>
            </v-card-text>

          </v-card>
        </v-dialog>
      </div>
    </v-card-actions>
  </v-card>
  
</template>

<script>
import ProductInfo from '../components/ProductInfo.vue'

import { ref } from 'vue'


export default {
  props:['product'],
  components: {
    ProductInfo
  },

  setup() {
    const dialog = ref(false);

    return { dialog }
  }
  
}

</script>

<style>
  .menu-btn:hover {
    border-bottom: 0.5px solid rgb(0, 38, 7);
  }

</style>