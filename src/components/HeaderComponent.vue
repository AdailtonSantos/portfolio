<template>
  <header>
    <router-link class="logo" to="/"><img src="logo.png" alt="logo-name-adailton-santos"></router-link>
    <router-link to="/sobre">Sobre Mim</router-link>
    <router-link to="/projetos">Projetos</router-link>
    <router-link to="/curriculo">Curriculo</router-link>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    padding: 0 150px;
    padding-top: 40px;
    gap: 15px;
  }
  .logo {
    margin-right: auto;
  }

  header * {
    color: white;
    text-decoration: none;
  }
</style>
