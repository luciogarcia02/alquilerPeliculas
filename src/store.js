import { defineStore } from "pinia";

export const useNt2Store = defineStore("nt2", {
  state: () => ({ pelis:[],user:{},contador: 3, appName: "" }),
  getters: {
    total: (state) => state.contador + 10,
    name: (state) => state.appName,
  },
  actions: {
    incrementar() {
      //hacer mas cosas
      console.log("incrementar");
      this.contador++;
    },
   /* goto(id){
      this.user.pelicula=[]
this.pelis.find(id)
    }
    para mostrar haremos una computada para que cuando se actualize la info se cargue en tiempo real 
    ,
    */
    async init() {
      const result = await fetch(
        "https://63593c84ff3d7bddb99cca8f.mockapi.io/users");
       this.user = await result.json();
      
      
    },
    devolverUser(id){
      return this.user[id];
    }
  },
});