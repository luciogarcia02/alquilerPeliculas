import { defineStore } from "pinia";

export const useNt2Store = defineStore("nt2", {
  state: () => ({ user:{}, contador: 3, peliculas: [], appName: "" }),
  getters: {
    total: (state) => state.contador + 10,
    name: (state) => state.appName,
  },
  actions: {
    incrementar() {
      //hacer mas cosas
      this.contador++;
    },
    alquilar(id){
        this.peliculas[id].alquilada = this.user.id
    },
    iniciarSesion(nombre){
      if (nombre == "prueba"){
         this.user = {
          id:1
         }
        } else {
          this.incrementar();
        }
    },
    async init() {
      const result = await fetch(
      this.peliculas = "https://6368585dd1d09a8fa6240285.mockapi.io/Pelicula"
      );
      const data = await result.json();
      this.appName = data.name;
    },
  },
});

