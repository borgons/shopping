<template>
  <v-container class="d-flex flex-row flex-wrap justify-center">
    <v-card 
      class="mx-auto flex flex-col w-50 mb-8 pa-8" 
      color="grey-darken-4"

      max-width="550"
    >
      <h4 class="text-h4 mb-3">{{product.productName}}</h4>

      <h6 class="text-h6 mb-6">{{product.productDescription}}</h6>

      <h4 class="text-h4 mb-3">$ {{snippet.toFixed(2)}}</h4>
      <!-- <h4 class="text-h4 mb-3">$ {{product.productPrice.toFixed(2)}}</h4> -->

      <form @submit.prevent="submit">
        <v-text-field
          v-model="cartProdName.value.value"
          :error-messages="cartProdName.errorMessage.value"
        >
        </v-text-field>
        
        <v-text-field
          v-model="cartProdID.value.value"
          :error-messages="cartProdID.errorMessage.value"
        >
        </v-text-field>

        <v-text-field
            type="number"
            v-model.number="cartProdPrice.value.value"
            prepend-icon="fas fa-dollar-sign"
            :error-messages="cartProdPrice.errorMessage.value"
            >
          <v-icon>
          </v-icon>
        </v-text-field>

        <v-text-field
          type="number"
          min="1"
          max="20"
          v-model.number="cartProdQuantity.value.value"
        >
        </v-text-field>

        <v-select
          v-model="cartProdSize.value.value"
          :items="items"
          :error-messages="cartProdSize.errorMessage.value"
          label="Select"
          
        ></v-select>

        <v-row class="justify-end">
          <v-btn
          class="me-4"
          type="submit"
          color="orange-lighten-2"
          >
          <v-icon class="me-3" icon="fas fa-shopping-cart"></v-icon>
            <span class="text-menu text-capitalized">Add Cart</span>
          </v-btn>
        </v-row>
      </form>
    </v-card>

    <v-card  
      max-width="550"
    >
    <v-img
      :src="product.productImg"
      height="450px"
      width="450px"
      cover
    > 
    </v-img>
    </v-card>
      
  </v-container>

</template>

<script>
import { ref, computed } from 'vue'
import { useField, useForm } from 'vee-validate'

import { useShoppingStore } from '../stores/ShoppingStore'

export default {
  props: ['product'],
  data() {
    return {
      select: { color: 'Red'},
      items: [
        { color: 'Red' },
        { color: 'Yellow' },
        { color: 'Orange' },
        { color: 'Blue' },
        { color: 'Green' },
      ],
    }
  },
  setup (props) {

      const shoppingStore = useShoppingStore()
       // const quantity = ref(1);

      const { handleSubmit } = useForm({
        validationSchema: {
          cartProdName (value) {
            if (value) return true
            return 'ProductName needs to be at least 10 characters'
          },

          cartProdID (value) {
            if (value) return true
            return 'Product ID needs to be at least 10 characters'
          },

          cartProdPrice (value) {
            if (value) return true
            return 'Type a Price'
          },

          cartProdSize (value) {
            if (value) return true

            return 'Select a size listed'
          },
        },
        initialValues: {
          cartProdName: props.product.productName,
          cartProdID: props.product.productID,
          cartProdPrice: props.product.productPrice.toFixed(2) ,
          cartProdQuantity: 1
        }
      })
      const cartProdName = useField('cartProdName')
      const cartProdID = useField('cartProdID')
      const cartProdPrice = useField('cartProdPrice')
      const cartProdQuantity = useField('cartProdQuantity')
      const cartProdSize = useField('cartProdSize')

      const items = ref([
        'small',
        'large',
        'x-large',
      ])

      const snippet = computed(() => {
        return props.product.productPrice * cartProdQuantity.value.value
      })

      const submit = handleSubmit(values => {
        setTimeout(myURL, 4000)
        shoppingStore.addCarts(values)
      })

      const myURL = () => {
        window.location.href = '#/shoppingCart'
      }


      return { 
        cartProdName,
        cartProdID, 
        cartProdPrice,
        cartProdQuantity, 
        cartProdSize,  
        items, 
        submit,
        snippet
      }
    },
}
</script>

<style>

</style>