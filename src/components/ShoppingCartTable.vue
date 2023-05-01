<script>

import { useShoppingStore } from '../stores/ShoppingStore'
import { storeToRefs } from 'pinia'

import ShoppingCartTableData  from './ShoppingCartTableData.vue'
import MustPurchasedCard from './MustPurchasedCard.vue'

import OrderForm from '../components/OrderForm.vue'


export default {
  
  components: { ShoppingCartTableData, OrderForm, MustPurchasedCard },
  setup() {
    const shoppingStore = useShoppingStore()
    
    const { carts, loading  } = storeToRefs(shoppingStore)

    // console.log(Object.values(carts))
    
    shoppingStore.getCarts()

    return { shoppingStore, carts, loading }

    
  }
}
</script>

<template>
  <div class="text-center mt-8">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="green"
    ></v-progress-circular>
  </div>

  
  <v-container class="mt-3">
    <h1 class="text-center mb-8">You Ordered</h1>
    <v-table height="300px" class="mb-7">
      <thead class="bg-green-darken-4">
        <tr>
          <th class="text-center text-white">
            Order Product Id
          </th>
          <th class="text-center text-white">
            Order Product Name
          </th>
          <th class="text-center text-white">
            Order Quantity
          </th>
          <th class="text-center text-white">
            Order Size
          </th>
          <th class="text-center text-white">
            Order Price
          </th>
          <th class="text-center text-white">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="cart in carts"
          :key="cart.id"
          class="text-center"
        >
          <ShoppingCartTableData :cart="cart" />
        </tr>
      </tbody>
    </v-table>
    
    <hr />
    <div  v-if="carts.length == 0">
      <MustPurchasedCard />
    </div>

    <div v-else>
      <OrderForm :carts="carts"/>
    </div>
  
  </v-container>
</template>


<style>

</style>