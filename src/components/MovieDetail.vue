<template>
    <div>
        <p>Seleccionaste la pelicula {{ id }} </p>
        <router-link to="/movies"><button type="button" class="btn btn-dark">Volver</button></router-link>
      <button type="button" class="btn btn-secondary" @click="alquilar()">Alquilar</button>
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
    return { id:this.$route.params.id}
  }
  ,
  methods: {
    
    async alquilar(){
    let a=await this.store.alquilarPelicula(this.id)
    console.log(a) 
  }

    }
  
};
</script>