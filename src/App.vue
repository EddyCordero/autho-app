<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Auth-App</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/permissions" class="nav-link">Permisos</a>
        </li>
        <!-- <li class="nav-item">
          <a href="/add" class="nav-link">Tipos de Permisos</a>
        </li> -->
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
