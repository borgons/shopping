<template>
  <h1 class="text-center mt-6">Personal Data</h1>

  <v-container>
    <v-card
      class="mx-auto flex flex-col w-50 mb-8 pa-8"
      color="grey-darken-4"
      max-width="600"
    >

    <form @submit.prevent="submit">
      <v-text-field
        v-model="clientID.value.value"
        :error-messages="clientID.errorMessage.value"
        placeholder="Client's ID"
      >
      </v-text-field>
      
      <v-text-field
        v-model="clientFirst.value.value"
        :error-messages="clientFirst.errorMessage.value"
        placeholder="Client's First Name"
      >
      </v-text-field>
      
      <v-text-field
        v-model="clientLast.value.value"
        :error-messages="clientLast.errorMessage.value"
        placeholder="Client's Last Name"
      >
      </v-text-field>
      
      <v-text-field
        v-model="clientAddress.value.value"
        :error-messages="clientAddress.errorMessage.value"
        placeholder="Client's Address"
      >
      </v-text-field>

      <v-row class="justify-center">
        <v-btn
          class="me-4"
          type="submit"
          color="orange-lighten-2"
        >
          <v-icon class="me-3" icon="fas fa-shopping-cart"></v-icon>
          <span class="text-menu text-capitalized">Submit</span>
        </v-btn>
      </v-row>

    </form>
    </v-card>
  </v-container>

</template>

<script>
import { useField, useForm } from 'vee-validate'

import { useShoppingStore } from '../stores/ShoppingStore'

export default {

  setup() {

    const shoppingStore = useShoppingStore()

    const { handleSubmit } = useForm({
      validationSchema: {
        clientID (value) {
          if(value) return true
          return 'Client ID needs to inputted'
        },
        clientFirst (value) {
          if(value) return true
          return 'Client FirstName needs to inputted'
        },
        clientLast (value) {
          if(value) return true
          return 'Client LastName needs to inputted'
        },
        clientAddress (value) {
          if(value) return true
          return 'Client Address needs to inputted'
        },
      },
      initialValues: {
        clientID: '',
        clientFirst: '',
        clientLast: '',
        clientAddress: '',
      }
    })

    const clientID = useField('clientID')
    const clientFirst = useField('clientFirst')
    const clientLast = useField('clientLast')
    const clientAddress = useField('clientAddress')

    const submit = handleSubmit(values => {
      setTimeout(myURL, 4000)
      shoppingStore.addClients(values)
    })

    const myURL = () => {
      window.location.href = '#/billingConfirm'
    }

    return  {
      clientID, 
      clientFirst, 
      clientLast, 
      clientAddress, 
      submit
    }
  }
}
</script>

<style>

</style>