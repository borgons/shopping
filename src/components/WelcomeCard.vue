<template>
  <v-card
    class="mx-auto flex flex-col w-50"
    color="grey-darken-4"
    max-width="344"
    v-for="(card,i) in cards"
    :key="i"
  >
    <v-img
      :src="card.cardImg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{card.cardTitle}}
    </v-card-title>

    <v-card-subtitle>
      {{card.cardSubTitle}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'fa fa-chevron-up' : ' fa fa-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ card.cardContent }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>


export default {
  data:() => {
    return {
      show: false,
      cards: [
      {
        cardImg: 'https://images.pexels.com/photos/1656665/pexels-photo-1656665.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Affordable Price',
        cardSubTitle: 'Our products is very affordable and reasonable price.',
        cardContent: 'I\'m a thing. But, like most politicians, he promised more than he could deliver. You won\'t have time for sleeping, soldier, not with all the bed making you\'ll be doing. Then we\'ll go with that data file! Hey, you add a one and two zeros to that or we walk! You\'re going to do his laundry? I\'ve got to find a way to escape.'
      },
      {
        cardImg: 'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Our site is Convenient',
        cardSubTitle: 'Products that you commonly found on some stores',
        cardContent: 'I\'m a thing. But, like most politicians, he promised more than he could deliver. You won\'t have time for sleeping, soldier, not with all the bed making you\'ll be doing. Then we\'ll go with that data file! Hey, you add a one and two zeros to that or we walk! You\'re going to do his laundry? I\'ve got to find a way to escape.'
      },
      {
        cardImg: 'https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=600',
        cardTitle: 'Our app is very easy to use',
        cardSubTitle: 'Our products is very affordable and reasonable price.',
        cardContent: 'I\'m a thing. But, like most politicians, he promised more than he could deliver. You won\'t have time for sleeping, soldier, not with all the bed making you\'ll be doing. Then we\'ll go with that data file! Hey, you add a one and two zeros to that or we walk! You\'re going to do his laundry? I\'ve got to find a way to escape.'
      },
    ]
  }
}

}
</script>

<style>

</style>