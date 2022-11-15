<template>
  <div class="container">
    <div class="list-group d-grid gap-3">
      <div
        v-for="(movie, index) in moviess"
        :key="movie.id"
        @click="goTo(movie.id)"
        class="rounded p-2 bg-dark "
        style="cursor: pointer"
        >{{ movie.name }}</div
      >
    
  </div>
  </div>
</template>

<script>

import { useNt2Store } from "../store";

export default {
  setup() {
    //vamos a dejar disponible el state
    const store = useNt2Store();
    return { store };
  },

  
  data() {
    return {
      moviess: this.store.user.peliculas
    };
  },
  methods: {
    goTo(id) {
      console.log("lo llamo")
      this.$router.push(`/movies/${id}`);

  },
  },
  async mounted() {
    var peliculas = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies')
    console.log(this.moviess.lenght)
    
    

   // this.movies = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies')
   // .then(response => response.json())
   // .then(response => response.data)
    
  },
};
</script>

<style>
  .container{
    background-color: #4e4e4e;
  }
  .movieItem{
    background-color:red
  }
</style>