<template>
  <div class="container">
    <div class="list-group d-grid gap-3">
      <div class="btn-group">
        <div class="dropdown">
   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     Ordenar por:
   </button>
   <ul class="dropdown-menu dropdown-menu-dark">
     <li><a  class="dropdown-item" @click="setFilter('score')">Ordenar por score</a></li>
      <li><a type="button" class="dropdown-item" @click="setFilter('nombre')">Ordenar por nombre</a></li>
      
   </ul>
  </div>
  <div class="dropdown">
   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     Filtrar por:
   </button>
   <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item" @click="setFilter('Acción')">Accion</a></li>
      <li><a  class="dropdown-item" @click="setFilter('Animación')">Animación</a></li>
      <li><a  class="dropdown-item" @click="setFilter('Aventuras')">Aventuras</a></li>
      <li><a  class="dropdown-item" @click="setFilter('Ciencia Ficción')">Ciencia Ficción</a></li>
      <li><a  class="dropdown-item" @click="setFilter('Comedia')">Comedia</a></li>
      <li><a  class="dropdown-item" @click="setFilter('Drama')">Drama</a></li>
      <li><a  class="dropdown-item" @click="setFilter('Terror')">Terror</a></li>
   </ul>
  </div>
</div>
<div class="card-deck">
     <div class="row">
         <div class="col-sm-3" v-for="movie in filters" :key="movie.id">
             <div class="card bg-dark mb-3">
                 <div>
                     <div class="card-body" style="margin: 0 auto;width: 90%; max-width: 1200px;">
                    <img class="rounded card-img-top" :src = "movie.url" alt="Card image cap">
                      <div class="card-body">
                      <h5 class="card-title">{{ movie.name }}</h5>
                      <p class="card-text">Score: {{ movie.score }}<img src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" width="12" height="12" style="vertical-align:baseline"></p>
                      <a class="btn btn-secondary" @click="goTo(movie.id)">Alquilar</a>
                      </div>
                     </div>
                  </div>
             </div>
         </div>
     </div>
  </div>
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