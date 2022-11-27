<template>

  <div id="app" >
  <div class="container">
    <nav   class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Rent a Movie</a>
    <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
         <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/movies">Movies</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/User">User</router-link>
        </li>
       <li> <router-link class="nav-link" to="/ranking">Ranking</router-link></li>
      </ul>
    </div>
  </div>

</nav>
</div>

    <router-view id="router"></router-view>

  </div>

</template>
<style>
        
        #app{
          background-color: #4e4e4e;
          color:#c0c0c0;
        }
</style>

<script>
import { useNt2Store } from "./store";
export default {
  setup() {
    //vamos a dejar disponible el state
    const store = useNt2Store();
    return { store };
  },
  
};
</script>

