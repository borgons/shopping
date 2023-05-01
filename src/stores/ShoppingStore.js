import { defineStore } from 'pinia'

import { toast } from 'vue3-toastify'

import { db } from '../firebase-config'
import { 
  collection,
  addDoc, 
  getDocs,
  deleteDoc,
  doc,
  query,
} from 'firebase/firestore'

const cartCollectionRef = collection(db, 'carts')

const orderCollectionRef = collection(db, 'orders')

const clientsCollectionRef = collection(db, 'clients')

const confirmCollectionRef = collection(db, 'confirmations')

export const useShoppingStore = defineStore('shoppingStore', {
  state: () => ({
    products: [],
    clients: [],
    orders: [],
    carts: [], // shopping cart
    orderConfirms: [],
    loading: false,
  }),


  actions: {
    async getCarts() {
      this.loading = true

      const cartts = query(collection(db, 'carts'))
      this.carts = []

      const querySnapshot = await getDocs(cartts)
      
      querySnapshot.forEach((doc) => {
        let cart = doc.data()
        cart.cartProdID = doc.id
        this.carts.push(cart)

        // console.log(Object.values(doc.data().cartProdPrice).reduce((total, price) => total + price, 0))
        // console.log(doc.data().cartProdPrice).reduce((total, price) => total + price)
      })


      this.loading = false
    },

    async addCarts (newCarts){
      addDoc(cartCollectionRef, newCarts)

      toast.success("Cart Added!!!", {
        autoClose: 3000,
        theme: 'dark',
        hideProgressBar: false
      }); // 
    },
    
    async deleteCart(id) {
      const cartDoc = doc(db, 'carts', id)
      deleteDoc(cartDoc)

      
      toast.success("Cart Removed!!!", {
        autoClose: 3000,
        theme: 'dark',
        hideProgressBar: false
      }); // ToastOptions
      
      this.getCarts()
    },
    
    async addClients (newClients) {
      addDoc(clientsCollectionRef, newClients)
    },

    async addOrders (newOrders){
      addDoc(orderCollectionRef, newOrders)
    },

    async addConfirmation (newConfirm) {
      addDoc(confirmCollectionRef, newConfirm)

      toast.success("Order Confirmation Completed", {
        autoClose: 3000,
        theme: 'dark',
        hideProgressBar: false
      }); 
    }
  }
  
})