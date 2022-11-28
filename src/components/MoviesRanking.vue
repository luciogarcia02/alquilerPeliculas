<template>
  <div class="container">
    <div class="list-group d-grid gap-3">
      <div class="btn-group">
  <button type="button" class="btn btn-secondary" @click="setFilter('score')">Ordenar por score</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('nombre')">Ordenar por nombre</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('Acción')">Accion</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('Animación')">Animación</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('Aventuras')">Aventuras</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('Ciencia Ficción')">Ciencia Ficción</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('Comedia')">Comedia</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('Drama')">Drama</button>
  <button type="button" class="btn btn-secondary" @click="setFilter('Terror')">Terror</button>
</div>
<div
        v-for="movie in filters"
        :key="movie.id"
        @click="goTo(movie.id)"
        class="rounded p-2 bg-dark "
        style="cursor: pointer"
        >{{ movie.name }} score:{{ movie.score }} </div
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
      movies: [],
      moviesAux: [],
      filter:''
    };
  },
  computed: {
      filters(){
        let peliculasFiltradas=this.movies
        if(this.filter==='score') peliculasFiltradas=this.movies.sort((a, b)=>{return b.score-a.score});
        if(this.filter==='nombre') peliculasFiltradas=this.movies.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
        if(this.filter==='Acción') peliculasFiltradas=this.movies.filter((a=>a.genre===1));
        if(this.filter==='Animación') peliculasFiltradas=this.movies.filter((a=>a.genre===2));
        if(this.filter==='Aventuras') peliculasFiltradas=this.movies.filter((a=>a.genre===3));
        if(this.filter==='Ciencia Ficción') peliculasFiltradas=this.movies.filter((a=>a.genre===4));
        if(this.filter==='Comedia') peliculasFiltradas=this.movies.filter((a=>a.genre===5));
        if(this.filter==='Drama') peliculasFiltradas=this.movies.filter((a=>a.genre===6));
        if(this.filter==='Terror') peliculasFiltradas=this.movies.filter((a=>a.genre===7));
        return peliculasFiltradas
      }
},
  methods: {
    setFilter(string){
      this.filter=string
    }
    ,
    goTo(id) {
      this.$router.push(`/movies/${id}`);
  },
  validar(){
    if(this.store.user.id===-1){ 
      alert("inicia sesion antes de proseguir")
      this.$router.push(`/login`);
    }
  },
  },
  async mounted() {
    var peliculas = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies')
    this.movies = await peliculas.json()
    this.validar()
    
    
  },
};
</script>