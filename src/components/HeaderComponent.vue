<template>
  <header>
    <router-link class="logo" to="/"><img src="logo.png" alt="logo-name-adailton-santos"></router-link>
    <router-link to="/sobre">Sobre Mim</router-link>
    <router-link to="/projetos">Projetos</router-link>
    <a href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view?usp=sharing" target="_blank">Curriculo</a>
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

  @media (max-width: 959px) {
    header {
      display: none;
    }
  }

</style>
