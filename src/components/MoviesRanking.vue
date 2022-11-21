<template>
  <div class="container">
    <div class="list-group d-grid gap-3">
      <div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle"
          data-toggle="dropdown">
    Género <span class="caret"></span>
  </button>

  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Acción</a></li>
    <li><a href="#">Animación</a></li>
    <li><a href="#">Aventuras</a></li>
    <li><a href="#">Ciencia Ficción</a></li>
    <li><a href="#">Comedia</a></li>
    <li><a href="#">Drama</a></li>
    <li><a href="#">Terror</a></li>
  </ul>
</div>

      <div
        v-for="(movie, index) in movies"
        :key="movie.id"
        @click="goTo(movie.id)"
        class="rounded p-2 bg-dark "
        style="cursor: pointer"
        >{{ movie.name }} {{ movie.score }}</div
      >
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    goTo(id) {
      this.$router.push(`/movies/${id}`);
  }
  },
  async mounted() {
    var peliculas = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies')
    this.movies = await peliculas.json()
  },
};
</script>