<template>
  <v-carousel
    hide-delimiters
    cycle
    :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    >
    <div class="carousel-text text-h5 font-weight-medium">{{ item.text }}</div>
  </v-carousel-item>
  </v-carousel>

</template>

<script>
  export default {
    name:"Banner",
    data () {
      return {
        items: [
          {
            src: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
            text: 'Welcome to my online shop. Where everyday is a savings day'
          },
          {
            src: 'https://images.pexels.com/photos/1111319/pexels-photo-1111319.jpeg',
            text: 'Our products are reasonable and affordable price.'
          },
          {
            src: 'https://images.pexels.com/photos/757432/pexels-photo-757432.jpeg',
            text: 'Our shop is one stop shop where you find Home Accessories to Electronics'
          },
          {
            src: 'https://images.pexels.com/photos/220137/pexels-photo-220137.jpeg',
            text: 'And even Toys for kids are available'
          },
        ],
      }
    },
  }

</script>

<style>
  .carousel-text {
    text-align:center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 28%;
    padding: 45px;
    background:rgba(0, 0, 0, 0.823);
    color: #fff
  }
</style>