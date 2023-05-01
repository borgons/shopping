<template>
  <h1 class="text-center mt-6">Order Form</h1>
  
  <v-container>
    <v-card 
      class="mx-auto flex flex-col w-50 mb-8 pa-8" 
      color="grey-darken-4"
      max-width="550"
    >

      <form @submit.prevent="submit">
          <v-text-field
            v-model="orderID.value.value"
            :error-messages="orderID.errorMessage.value"
            placeholder="Order ID"
          >
          </v-text-field>
          
          <v-text-field
            v-model="orderTotal.value.value"
            prepend-icon="fas fa-dollar-sign"
            :error-messages="orderTotal.errorMessage.value"
            class="mb-8"
            placeholder="Total Price"
          >
            <v-icon>
            </v-icon>
          </v-text-field>

          <input type="hidden" :value="orderDate.value.value">

          <v-row class="justify-center">
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
  </v-container>
</template>

<script>
import { useField, useForm } from 'vee-validate'
// import { computed } from 'vue'

import { useShoppingStore } from '../stores/ShoppingStore'

export default {
  // props:['cart'],
  setup() {

    const shoppingStore = useShoppingStore()

    const { handleSubmit } = useForm({
      validationSchema: {
        orderID (value) {
          if(value) return true
          return 'OrderID needs to be inputted'
        },

        orderTotal (value) {
          if(value) return true
          return 'Total Price needs to be inputted'
        }
      },
      initialValues : {
        orderID: '',
        orderTotal: '',
        orderDate: new Date().toISOString()
      }
    })

    const orderID = useField('orderID')
    const orderTotal = useField('orderTotal')
    const orderDate = useField('orderDate')

    const submit = handleSubmit(values => {
      setTimeout(myURL, 4000);
      shoppingStore.addOrders(values)
    })

    const myURL = () => {
      window.location.href = '#/personalInfo'
    }

    // const snippet = computed(() => {
    //      //return props.product.productPrice * cartProdQuantity.value.value
    //     const totalPrice = props.cart.cartProdPrice.split()
    //     return totalPrice.reduce((total, price) => total + price, 0)
    // })

    return {
      orderID,
      orderTotal, 
      orderDate,
      submit
    }
  }
}
</script>

<style>

</style>