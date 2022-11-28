<template>
    <div>
      <div class="container">
      <div class="row">
        <div class="col-sm">
          <router-link to="/movies"><button type="button" class="btn btn-dark">Volver</button></router-link>

        </div>
      </div>
   

   
  
  <div class="row">
    <div class="col-sm-5">
<img class="movieImage" :src="detalles.url">

</div>
    <div v-if="detalles" class="col-sm-7">
      <h2>{{  this.detalles.name }} ( {{this.detalles.year}})</h2>

  <h6> GÉNERO: {{ this.genreName  }} </h6>
  <h6> DURACIÓN: {{this.detalles.duration}}</h6>
  <h6> CLASIFICACIÓN: {{this.detalles.classification}}</h6>
  <h6> DIRECTOR: {{this.detalles.director}}</h6>
  <h6> CALIFICACION DE LOS: {{this.detalles.score}}</h6>
      <h5>SINOPSIS</h5>
 <p>{{this.detalles.description}}</p>
 <input type="number" name="ranking" min="1" max="10" v-model="this.score">
 <button id="confirmar" @click="scores()">puntuar</button>
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
data(){
  return { id:this.$route.params.id ,score:1,
      detalles: Object,
      genreName: ''}
}
,
methods:{
  validar(){
    if(this.store.user.id===-1){ 
      alert("inicia sesion antes de proseguir perra")
      this.$router.push(`/#`);
    }
  }
  ,
  scores(){
    alert("validame esta perra ")
  },
  async getGenreName(id){

const result = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/genres/'+id);
const data = await result.json();
return data.name
return id

  }, 
  getImage () {
   
   var a = this.detalles.url;
   let img = document.createElement("img");
   img.src = a;
   return img;
 }
 
 },
 async mounted() {
  this.validar()
      var detallesPelicula = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies/'+this.id)
this.detalles = await detallesPelicula.json();
this.genreName = await this.getGenreName(this.detalles.genre)
    },

};

</script>
<style scoped>
.movieImage{
  width: 350px;
  height: 500px;
}

</style>