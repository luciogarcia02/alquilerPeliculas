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
  <h6> CALIFICACION DEl promedio {{this.scoreProm}}</h6>
      <h5>SINOPSIS</h5>
 <p>{{this.detalles.description}}</p>
 <input type="text" v-model="comment" placeholder="Deja tu comentario">
 <input type="number" name="ranking" min="1" max="10" v-model="score" placeholder="Deja tu puntuación">

 <button id="confirmar" @click="validarreview()">puntuar</button>
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
  return { idPeli:this.$route.params.id ,score:1,
      detalles: Object,
      genreName: '',
    userId:"",comment:'',
  listaReview:[],
length:0,
scoreProm:0
}
}
,
methods:{
async validarreview(){

  let b=this.listaReview.find((a)=>{return a.movieId===this.id && a.userId===this.userId})
  
  if(b===undefined){
    this.review()
  }
  else{
    alert("solo un comentario por usuario")
  }
}
  ,
  async actualizar(){
  let listaReview=await fetch("https://63593c84ff3d7bddb99cca8f.mockapi.io/reviews")
  let arra= await listaReview.json()
  this.listaReview=arra
  this.scoreProm=await this.store.scoreame(this.idPeli)
  alert(this.scoreProm)
}

  ,
  validar(){
    if(this.store.user.id===-1){ 
      alert("inicia sesion antes de proseguir")
      this.$router.push(`/login`);
    }
  }
  ,
  async review(){
    alert(this.comment+" "+this.score)
   const Object = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify({movieId: parseInt(this.idPeli),
    review: this.comment,
    userId: parseInt(this.userId),
    id: this.length,
    scoring:parseInt(this.score)})}
    await fetch("https://63593c84ff3d7bddb99cca8f.mockapi.io/reviews",Object) .then( response => response).then(response=>console.log(response))
              this.actualizar()
  },
  async getGenreName(id){

const result = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/genres/'+id);
const data = await result.json();
return data.name

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
    var detallesPelicula = await fetch('https://63593c84ff3d7bddb99cca8f.mockapi.io/movies/'+this.idPeli)
    this.detalles = await detallesPelicula.json();
    this.genreName = await this.getGenreName(this.detalles.genre)
    this.userId=this.store.user.id
    this.actualizar()
    },

};
</script>
<style scoped>
.movieImage{
  width: 350px;
  height: 500px;
}
</style>