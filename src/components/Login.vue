<template>
    <div class= "container">
        <div>

            <h1><p>Iniciar sesión</p></h1>
<div class="col-md-4">
    <form class="form-horizontal" style="margin:0 auto">
<div class="form-group">

<label  class="col-lg-4 control-label" for="inputUsuario">Usuario</label>
<input  v-model="username"  class="form-control" id="login" placeholder="Ingrese usuario" >

</div>
<div class="form-group">
<label for="inputPassword">Contraseña</label>
<input v-model="password"  class="form-control" id="login" placeholder="Contraseña">
</div>

<button @click="login()" type="submit" class="btn btn-primary">Entrar</button>
</form>
</div>

        </div>
       

     
     
    </div>
</template>

<style>
        .container{
          background-color: #4e4e4e;
          color:#c0c0c0;
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


data(){return {user:this.store.user.name,username:"",password:""}}
,
methods: {
  async login(){
    console.log(this.username,this.password)
  let a=await this.store.devolverUser(this.username,this.password)
  this.user=a.name
alert('Bienvenido! Usuario: ' + this.username)
  this.$router.push(`/movies/`);
  
}

  }

};
</script>