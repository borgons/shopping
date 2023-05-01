<template>
    <h1 class="text-center mt-6">Sign Up</h1>

    <v-container>
      <v-card
        class="mx-auto flex flex-col w-50 mb-8 pa-8"
        color="grey-darken-4"
        max-width="600"
      >

        <form @submit.prevent="submit">
          <v-text-field
            v-model="userEmail.value.value"
            :error-messages="userEmail.errorMessage.value"
            placeholder="User Email Address"
          >
          </v-text-field>

          <v-text-field
            type="password"
            v-model="userPassword.value.value"
            :error-messages="userPassword.errorMessage.value"
            placeholder="User Password"
            autocomplete="on"
          >
          </v-text-field>

          <v-text-field
            type="password"
            v-model="userConfirmPassword.value.value"
            :error-messages="userConfirmPassword.errorMessage.value"
            placeholder="User Confirmation Password"
            autocomplete="on"
          >
          </v-text-field>

          <!-- <hr class="mb-5" />

          <h4 class="text-center text-h4 text--white mb-5">Personal Info</h4>
          
          <v-text-field
            v-model="userID.value.value"
            :error-messages="userID.errorMessage.value"
            placeholder="User ID"
          >
          </v-text-field>

          <v-text-field
            v-model="userFirstName.value.value"
            :error-messages="userFirstName.errorMessage.value"
            placeholder="User FirstName"
          >
          </v-text-field>
          
          <v-text-field
            v-model="userLastName.value.value"
            :error-messages="userLastName.errorMessage.value"
            placeholder="User LastName"
          >
          </v-text-field>

          <v-text-field
            v-model="userAddress.value.value"
            :error-messages="userAddress.errorMessage.value"
            placeholder="Users Address"
          >
          </v-text-field>

          <v-text-field
            v-model="userBirthday.value.value"
            :error-messages="userBirthday.errorMessage.value"
            placeholder="Users MM/DD/YYYY"
          >
          </v-text-field> -->

          <p v-if="errors" class="text-red mt-5">{{ errors }}</p>
          <v-row class="justify-center mt-5">
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

import { useAuthStore } from '../../stores/AuthenticationStore.js'
import { storeToRefs } from 'pinia'

import { toast } from 'vue3-toastify'


export default {

  setup(){

    const authStore = useAuthStore()

    const { errors } = storeToRefs(authStore)

    const { handleSubmit } = useForm({
      validationSchema: {
        userEmail (value) {
          if(value) return true
          return 'User Email needs to be inputted'
        },
        userPassword (value) {
          if(value) return true
          return 'User Password must be required'
        },
        userConfirmPassword (value) {
          if(value) return true
          return 'User Confirm Password must be required'
        },
        // userConfirmPassword () {
        //   if(userConfirmPassword.value.value != userPassword.value.value) return true
        //   return 'User Confirm Password can\'t be matched'
        // },
        // userID (value) {
        //   if(value) return true
        //   return 'User ID must be inputted'
        // },
        // userFirstName (value) {
        //   if(value) return true
        //   return 'User FirstName must be inputted'
        // },
        // userLastName (value) {
        //   if(value) return true
        //   return 'Client Address needs to inputted'
        // },
        // userAddress (value) {
        //   if(value) return true
        //   return 'Client Address needs to inputted'
        // },
        // userBirthday (value) {
        //   if(value) return true
        //   return 'Client Address needs to inputted'
        // },
      },
      initialValues: {
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        // userID: '',
        // userFirstName: '',
        // userLastName: '',
        // userAddress: '',
        // userBirthday: '',
        // userDateRegistered: new Date().toISOString()
      }
    })

    const userEmail = useField('userEmail')
    const userPassword = useField('userPassword')
    const userConfirmPassword = useField('userConfirmPassword')
    // const userID = useField('userID')
    // const userFirstName = useField('userFirstName')
    // const userLastName = useField('userLastName')
    // const userBirthday = useField('userBirthday')
    // const userAddress = useField('userAddress')

    const submit = handleSubmit(values => {

      // Password does not matched
      if(values.userConfirmPassword != values.userPassword) {
        toast.error("Password does not matched", {
          autoClose: 3000,
          theme: 'dark',
          hideProgressBar: false
        }); 
      } else {
        authStore.signUp({
          email: values.userEmail, 
          password: values.userPassword
        })

      }


    })


    return {
      userEmail, 
      userPassword, 
      userConfirmPassword,
      // userID, 
      // userFirstName, 
      // userLastName, 
      // userBirthday,
      // userAddress,
      errors,
      submit
    }
  }
}
</script>

<style>

</style>