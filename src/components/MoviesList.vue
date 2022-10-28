<template>
    <div>
      <div class="list-group">
        <div
          v-for="(movie, index) in movies"
          :key="movie.id"
          @click="goTo(movie.id, movie.name)"
          class="list-group-item list-group-item-action"
          style="cursor: pointer"
          >{{ movie.name }}</div
        >
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        peliculas: [],
      };
    },
    methods: {
      

      goTo(idp, moviename,movielink) {
        console.log("lo llamo")
      this.$router.push("/movies/"+idp+"/"+moviename);

      
    },
    },
    created() {
      this.movies = [
        { id: 1, name: "Duro de matar"},
        { id: 2, name: "Kill bill" },
        { id: 3, name: "Shrek" },
      ];
    },
  };
  </script>