<template>

  <div id="app" >
  <div class="container">
    <nav   class=" rounded navbar navbar-expand-lg ">
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
       
       
      </ul>
    </div>
  </div>

</nav>
</div>
<body>
   
 
      
  
    <router-view id="router"></router-view>
  </body>
  </div>

</template>
<style>
        .navbar{
          background-color: #757575;
        }
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