<template>
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
         <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div class="carousel-inner">
           <div class="carousel-item active">
            <img src="../assets/wakanda.jpg" class="rounded d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
             <img src="../assets/1985.jpg" class="rounded d-block w-100" alt="...">
           </div>
           <div class="carousel-item">
                <img src="../assets/avatar-2.jpg" class=" rounded d-block w-100" alt="...">
           </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
        </div>
        <h1>{{user}} adasda</h1>
        <input v-model="input" id="login">
        <button @click="login()">pinchame</button>
       
    </div>
</template>
<style>
  .container{
    background-color: black;
  }
</style>
<script>


import { useNt2Store } from "../store";

export default {
  setup() {
    //vamos a dejar disponible el state
    const store = useNt2Store();
    return { store };
  },
  
  
  data(){return {user:{},input:""}}
  ,
  methods: {

    async login(){
    let a=await this.store.devolverUser(this.input)
    this.user=a.name
    console.log(a.name)
  }

    }
  
};
</script>