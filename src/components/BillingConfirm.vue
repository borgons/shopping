<template>
  <h1 class="text-center mt-6">Billing Confirmation</h1>

  <v-container>
    <v-card
      class="mx-auto flex flex-col w-50 mb-8 pa-8"
      color="grey-darken-4"
      max-width="600">

      <form @submit.prevent="submit">
        <v-text-field
          v-model="confID.value.value"
          :error-messages="confID.errorMessage.value"
          placeholder="Confirmation ID"  
        >
        </v-text-field>

        <v-text-field
          v-model="confOrderID.value.value"
          :error-messages="confOrderID.errorMessage.value"
          placeholder="Order ID"
        >
        </v-text-field>

        <v-select
          v-model="confBillingType.value.value"
          :items="items"
          :error-messages="confBillingType.errorMessage.value"
          label="Confirmation Billing Type"
        >
        </v-select>

        <!-- If Credit Card or Debit Card -->
        <v-text-field
          prepend-icon="fas fa-server"
          v-model="confBillingTypeCard.value.value"
          placeholder="Type your Card Number if you have one"
        >
        </v-text-field>
        
        <v-text-field
          v-model="confClientID.value.value"
          :error-messages="confClientID.errorMessage.value"
          placeholder="Client ID"
        >
        </v-text-field>
      
        <v-text-field
          prepend-icon="fas fa-dollar-sign"
          v-model="confOrderPrice.value.value"
          :error-messages="confOrderPrice.errorMessage.value"
          placeholder="Order Price"
        >
        </v-text-field>

        <input type="hidden" :value="confDate.value.value">

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

import { useShoppingStore } from '../stores/ShoppingStore'

import { ref } from 'vue'

export default {

  setup() {

    const shoppingStore = useShoppingStore()
    
    const { handleSubmit } = useForm({
      validationSchema: {
        confID (value) {
          if(value) return true
          return 'Confirmation ID needs to be inputted'
        },
        confOrderID(value) {
          if(value) return true
          return 'Confirmation Order ID needs to be inputted'
        },
        confBillingType(value) {
          if(value) return true
          return 'Select Billing Type if you have one'
        },
        confClientID(value) {
          if(value) return true
          return 'Confirmation Client ID needs to be inputted'
        },
        confOrderPrice(value) {
          if(value) return true
          return 'Confirmation Order Price needs to be inputted'
        }
      },
      initialValues: {
        confID: '',
        confOrderID: '',
        confBillingType:'',
        confBillingTypeCard:'',
        confClientID: '',
        confOrderPrice: '',
        confDate: new Date().toISOString(),
      }
    })

    const confID = useField('confID')
    const confOrderID = useField('confOrderID')    
    const confBillingType = useField('confBillingType')
    const confBillingTypeCard = useField('confBillingTypeCard')
    const confClientID = useField('confClientID')
    const confOrderPrice = useField('confOrderPrice')
    const confDate = useField('confDate')

    let items = ref([
      'COD',
      'Debit or Credit Card'
    ])
    

    const submit = handleSubmit(values => {
      setTimeout(myURL, 4000)
      shoppingStore.addConfirmation(values)
    })

    const myURL = () => {
      window.location.href= '#/'
    }

    return {
      confID, 
      confOrderID,
      confBillingType, 
      confBillingTypeCard,
      confClientID,
      confOrderPrice,
      items,
      confDate,
      submit
    }
  }
}
</script>

<style>

</style>