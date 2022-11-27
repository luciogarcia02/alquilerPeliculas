<template>
  <div class="container">
    <div class="list-group d-grid gap-3">
      <div class="btn-group">
  <button type="button" class="btn btn-secondary" @click="setMierda('score')">Ordenar por score</button>
  <button type="button" class="btn btn-secondary" @click="setMierda('nombre')">Ordenar por nombre</button>
  <button type="button" class="btn btn-secondary" @click="setMierda('Acción')">Accion</button>
  <button type="button" class="btn btn-secondary" @click="setMierda('Drama')">Drama</button>
</div>
<div
        v-for="movie in listaPelisDePutaMadre"
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
      listaPelisDePutaMadre(){
        let perra=this.movies
        if(this.filter==='score') perra=this.movies.sort((a, b)=>{return b.score-a.score});
        if(this.filter==='nombre') perra=this.movies.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
        if(this.filter==='Drama') perra=this.movies.filter((a=>a.genre===6));
        if(this.filter==='Acción') perra=this.movies.filter((a=>a.genre===1));
        return perra
      }
},
  methods: {
    setMierda(string){
      this.filter=string
    }
    ,
    goTo(id) {
      this.$router.push(`/ranking/${id}`);
  },

  validar(){
    if(!this.store.sesion){ 
      this.$router.push(`/#`);
    }
  }
  ,
  },
  async mounted() {
    var peliculas = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies')
    this.movies = await peliculas.json()
    this.validar()
    
    
  },
};
</script>