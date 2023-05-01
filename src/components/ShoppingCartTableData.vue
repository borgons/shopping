  <script>
  import { useShoppingStore } from '../stores/ShoppingStore'
  
  export default {
    props:['cart'],
    setup(){
      const shoppingStore = useShoppingStore()



      return { shoppingStore }
    }
  }
  </script>


<template>
  <td>{{cart.cartProdID}}</td>
  <td>{{cart.cartProdName}}</td>
  <td>{{cart.cartProdQuantity}}</td>
  <td>{{cart.cartProdSize}}</td>
  <td>${{cart.cartProdPrice}}</td>
  <td>
    <v-btn
      type="submit"
      color="red-darken-3"
      @click="shoppingStore.deleteCart(cart.cartProdID) "
    >
      <v-icon icon="fa fa-trash"></v-icon>
    </v-btn>
  </td>

</template>


<style>

</style>