<template>
  <div v-if="carts.length == 0">
    <MustPurchasedCard />
  </div>

  <div v-else>
    <BillingConfirm />
  </div>
</template>

<script>
import BillingConfirm from '../components/BillingConfirm.vue'
import MustPurchasedCard from '../components/MustPurchasedCard.vue'

import { useShoppingStore } from '../stores/ShoppingStore'
import { storeToRefs } from 'pinia'

export default {
  components: {
    BillingConfirm,
    MustPurchasedCard
  },
  setup() {
    const shoppingStore = useShoppingStore()
    
    const { carts  } = storeToRefs(shoppingStore)

    // console.log(Object.values(carts))
    
    shoppingStore.getCarts()

    return { shoppingStore, carts }

    
  }
}
</script>

<style>

</style>