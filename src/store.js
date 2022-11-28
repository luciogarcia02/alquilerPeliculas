import { defineStore } from "pinia";

export const useNt2Store = defineStore("nt2", {
  state: () => ({ user: { id: -1, name: "", password: "", movies: [] }, contador: 3, appName: "" }),
  getters: {
    total: (state) => state.contador + 10,
    name: (state) => state.appName,
    movies() {
      return this.user.movies
    }
  },
  actions: {
    incrementar() {
      //hacer mas cosas
      console.log("incrementar");
      this.contador++;
    },
    async scoreame(idPeli) {
      let resultPelicula = await fetch("https://63593c84ff3d7bddb99cca8f.mockapi.io/reviews")
      let peli = await resultPelicula.json()
      let score = peli.filter((a) => a.movieId === idPeli)
      let suma = 0
      let i = 0
      for (i; i < score.length; i++) {
        suma += score[i].scoring
      }
      console.log(suma / score.length)
      return suma / score.length;
    }

    ,
    async bajarAlquileres(id) {
      this.user.movies = []
      let carcajada =await fetch("https://6383e16a3fa7acb14fe98c28.mockapi.io/alquileres")
      let lista=await carcajada.json()
      let filtrado =lista.filter((a)=>a.userId===id)
      filtrado.forEach(async element => {
  await this.alquilarPelicula(element.movieId) 
 });      
      
      
    }

,
    async devolverUser(name, pass) {
      const resultUsers = await fetch("https://63593c84ff3d7bddb99cca8f.mockapi.io/users");
      let lista = await resultUsers.json();
      let filtro = lista.find((a) => a.name === name && a.password === pass);
      
      if(filtro!=undefined){ 
      this.user.id = filtro.id
      this.user.name = filtro.name
      this.user.password = filtro.password
      await this.bajarAlquileres(filtro.id)
      }
      return this.user
    },
    async alquilarPelicula(id) {
      let resultPelicula = await fetch("https://63593c84ff3d7bddb99cca8f.mockapi.io/movies/" + id)
      let peli = await resultPelicula.json()
      if (!this.existeLaPeli(peli.id)) {
        this.user.movies.push(peli)
        await this.subirAlquileres(peli.id)
        return peli
      }
      else {
        return null
      }

    },
    existeLaPeli(id) {
      return this.user.movies.some(a => a.id == id)
    }
    ,
    async subirAlquileres(peli) {
      const Object = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          movieId: peli,
          userId: this.user.id,
        })}
        
      await fetch("https://6383e16a3fa7acb14fe98c28.mockapi.io/alquileres",Object)
    }
  },
});