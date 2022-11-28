<template>
  <div class="container">
    
  <div class="card-deck">
   <div class="row">
       <div class="col-sm-4" v-for="movie in movies" :key="movie.id">
           <div class="card bg-dark mb-3">
               <div>
                   <div class="card-body" style="margin: 0 auto;width: 90%; max-width: 1200px;">
                  <img class="rounded card-img-top" :src = "movie.url" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">{{ movie.name }}</h5>
                    <p class="card-text">desc?</p>
                    <a class="btn btn-secondary" @click="goTo(movie.id)">Alquilar</a>
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
  }
  ,
  data() {
    return {
      movies: this.store.user.movies,
    };
  },
  methods: {
    goTo(id) {
      console.log("lo llamo")
      this.$router.push(`/user/${id}`);
  }, 
  validar(){
    if(this.store.user.id===-1){ 
      alert("inicia sesion antes de proseguir perra")
      this.$router.push(`/#`);
    }
  }
  },
  async mounted() {
    var peliculas = await this.store.user.peliculas
    this.validar()
    
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