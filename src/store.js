import { defineStore } from "pinia";

export const useNt2Store = defineStore("nt2", {
  state: () => ({ user:{id:"",name:"",password:"",movies:[]},contador: 3, appName:""}),
  getters: {
    total: (state) => state.contador + 10,
    name: (state) => state.appName,
    movies(){
      return this.user.movies
    }
  },
  actions: {
    incrementar() {
      //hacer mas cosas
      console.log("incrementar");
      this.contador++;
    },

   
    
    

    async devolverUser(name,pass){
      const resultUsers = await fetch("https://63593c84ff3d7bddb99cca8f.mockapi.io/users");
      let lista = await resultUsers.json();
      let filtro=lista.find((a)=>a.name==name&&a.password==pass);
      this.user.id=filtro.id
      this.user.name=filtro.name
      this.user.password=filtro.password
      return this.user
    },
    async alquilarPelicula(id){
      let resultPelicula = await fetch("https://63593c84ff3d7bddb99cca8f.mockapi.io/movies/"+id)
      let peli =await resultPelicula.json()
      if(!this.existeLaPeli(peli.id)){
      this.user.movies.push(peli)
      return peli
    }
      else{
        return null
      }
      
    },
    existeLaPeli(id){
      return this.user.movies.some(a=>a.id==id)
    }
    //para mostrar haremos una computada para que cuando se actualize la info se cargue en tiempo real 
  },
});