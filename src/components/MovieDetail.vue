<template>
    <div>
        <p>Seleccionaste la pelicula {{ $route.params.id }} </p>
        <router-link to="/movies"><button type="button" class="btn btn-dark">Volver</button></router-link>
      <button type="button" class="btn btn-secondary">Alquilar</button>
    </div>
  </template>

