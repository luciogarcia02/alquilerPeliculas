<template>
    <div>
        <p>Seleccionaste la pelicula {{ $route.params.name }}</p>
      <p>id: {{ $route.params.id }}</p>
      <router-link to="/movies">Volver</router-link>
    </div>
  </template>

