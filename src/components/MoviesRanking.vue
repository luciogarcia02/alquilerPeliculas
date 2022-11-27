<template>
  <div class="container">
    <div class="list-group d-grid gap-3">
      <div class="btn-group">
  <button type="button" class="btn btn-secondary" @click="ordenarPorScore()">Ordenar por score</button>
  <button type="button" class="btn btn-secondary" @click="ordenarPorNombre()">Ordenar por nombre</button>
  <button type="button" class="btn btn-secondary" @click="filtrarPorGenero('Acción')">Accion</button>
  <button type="button" class="btn btn-secondary" @click="filtrarPorGenero('Drama')">Drama</button>
</div>
<div
        v-for="(movie, index) in movies"
        :key="movie.id"
        @click="goTo(movie.id)"
        class="rounded p-2 bg-dark "
        style="cursor: pointer"
        >{{ movie.name }} {{ movie.score }} </div
      >
  </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      movies: [],
      moviesAux: [],
    };
  },
  computed: {
      
},
  methods: {
    goTo(id) {
      this.$router.push(`/ranking/${id}`);
  },
  ordenarPorScore(){
   return this.movies.sort(function(a, b){return b.score-a.score});
  },
  ordenarPorNombre(){
    this.movies.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
  },
  async filtrarPorGenero(gnro){
    this.moviesAux = this.movies.filter(movie => movie.genre == gnro)
  },
  },
  async mounted() {
    var peliculas = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies')
    this.movies = await peliculas.json()
    this.moviesAux = this.movies
  },
};
</script>