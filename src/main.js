import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Movies from "./components/Movies.vue";
import MoviesList from "./components/MoviesList.vue";
import MovieDetail from "./components/MovieDetail.vue";
import MoviesRanking from "./components/MoviesRanking.vue";
import User from "./components/User.vue";
import UserMovies from "./components/UserMovies.vue";
import Login from "./components/Login.vue";


import { PiniaVuePlugin, createPinia } from "pinia";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "dropdown";



const routes = [
  { path: "/", component: Home },
  {
    path: "/login",
    component: Login
   
  },

  {
    path: "/movies",
    component: Movies,
    children: [
      { path: "", component: MoviesList },
      { path: ":id/", component: MovieDetail },
    ],
  },
  ,
  {
    path: "/user",
    component: User,
    children: [
      { path: "", component: UserMovies }, 
    ],
  },
  {
    path: "/ranking", component: MoviesRanking,
    children: [
      { path: ":id/", component: MovieDetail },
    ],
  },
  {
    path: "/movieDetail", component: MovieDetail
  },
  {
    path: "*",
    redirect: "/",
  },
];

//paso 2
const router = new VueRouter({
  routes,
});

//paso 3
Vue.use(VueRouter); //injecta algunos utiles.


new Vue({
  router,
  pinia, //paso 4
  render: (h) => h(App),
}).$mount("#app");