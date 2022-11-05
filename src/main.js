import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Movies from "./components/Movies.vue";
import MoviesList from "./components/MoviesList.vue";
import MovieDetail from "./components/MovieDetail.vue";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";



const routes = [
  { path: "/", component: Home },
  {
    path: "/movies",
    component: Movies,
    children: [
      { path: "", component: MoviesList },
      { path: ":id/", component: MovieDetail },
      
    ],
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
  router, //paso 4
  render: (h) => h(App),
}).$mount("#app");