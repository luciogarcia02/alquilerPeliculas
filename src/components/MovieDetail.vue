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
  <h6> CALIFICACION PROMEDIO: {{this.scoreProm}}</h6>
      <h5>SINOPSIS</h5>
 <p>{{this.detalles.description}}</p>
 <button type="button" class="btn btn-secondary" @click="alquilar()">Alquilar</button>
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
    return {
     
      id:this.$route.params.id,
      detalles: Object,
      genreName: '',
      scoreProm:0
    } }
  ,
  
  methods: {
   validar(){
    if(this.store.user.id===-1){ 
      alert("inicia sesion ")
      this.$router.push(`/login`);
    }
  }
  ,
  async alquilar(){
  let a=await this.store.alquilarPelicula(this.id)

  if(a==null){
    alert("ya fue alquilada no se puede volver a Alquilar")
  }
  
  else{
    alert("Se alquiló la pelicula correctamente " + this.detalles.name)
    console.log(this.id) }
    this.$router.push(`/user`);
}
,
    async getGenreName(id){

     const result = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/genres/'+id);
    const data = await result.json();
   return data.name
return id
    }
  ,
  getImage () {
   
      var a = this.detalles.url;
      let img = document.createElement("img");
      img.src = a;
      return img;
    },
    async bajarPelis(){
    let peliculas = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies/'+this.id)
    this.detalles = await peliculas.json()
    this.detalles.score=this.store.scoreame(a.id)
  }
    },
    async mounted() {
      this.scoreProm=await this.store.scoreame(this.id)
  this.validar()
      this.bajarPelis()
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