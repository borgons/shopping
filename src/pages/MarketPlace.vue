<template>
  <h1 class="text-center mt-8">Shop Now</h1>

  <v-container class="d-flex flex-row flex-wrap justify-center">
    <ProductCard 
      v-for="(product, i) in products"
      :key="i"
      :product="product"
    />
  </v-container>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  props:['product'],
  components: {
    ProductCard
  },
  data:() => {
    return {
      products: [
        {
          productID: 101,
          productImg: 'https://bocchettaplushtoys.com/wp-content/uploads/2021/01/500_36-Bocchetta-Stretch-Dachshund-Dog-Stuffed-Animal-Soft-Plush-Toy-2-8993462118777.jpg',
          productName: 'Cally the Dachshund(Toy Dog)',
          productDescription:'This toy so fluffy and huggable dog.',
          productPrice: 250.00,
          prdNoStock: 100,
        },
        {
          productID: 102,
          productImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ErdNriFHKcKBC5DcYZYqqRAZsH2uNRaBRw&usqp=CAU',
          productName:'Miyong Miyong(Teddy bear)',
          productDescription:'This toy so fluffy and huggable dog.',
          productPrice: 350.00,
          prdNoStock: 100,
        },
        {
          productID: 103,
          productImg: 'https://images.squarespace-cdn.com/content/v1/5df19c1679484348e13e68ce/1600842526771-6VLS76NC5NKSHQ5JAU44/200601+UNIVERSAL+-+Dust+Pan-3small.jpg?format=750w',
          productName:'Ultimate Dustpan',
          productDescription:'For your house accessories(cleaning).',
          productPrice: 50.00,
          prdNoStock: 100,
        },
        {
          productID: 104,
          productImg: 'https://hips.hearstapps.com/hmg-prod/images/mini-laptops-2023-641b6830e952b.jpg?crop=1.00xw:0.505xh;0,0.246xh&resize=1200:*',
          productName:'Dell Laptops',
          productDescription:'For your productivity and gaming experience.',
          productPrice: 50000.00,
          prdNoStock: 100,
        },
        {
          productID: 105,
          productImg: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/lenovo_61ecgar2us_27_thinkvision_qhd_hdmi_led_1614775564_1622721.jpg',
          productName:'Lenovo ThinkPad Monitor',
          productDescription:'For your productivity and gaming experience.',
          productPrice: 5000.00,
          prdNoStock: 100,
        },
        {
          productID: 106,
          productImg: 'https://media.istockphoto.com/id/110916336/photo/toy-mobile-phone.jpg?s=612x612&w=0&k=20&c=eW3p6Be6bsx0J-aD5QF-xj0PW1LOywAYJVPiFqq5hRM=',
          productName:'Nokla',
          productDescription:'Used for calls, internet and some others.',
          productPrice: 300.00,
          prdNoStock: 100,
        },
      ],
    }
  }
}
</script>

<style>

</style>