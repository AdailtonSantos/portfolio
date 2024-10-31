<template>
  <header>
    <router-link class="logo" to="/"><img src="logo.png" alt="logo-name-adailton-santos"></router-link>
    <router-link to="/">Início</router-link>
    <router-link to="/sobre">Sobre Mim</router-link>
    <router-link to="/projetos">Projetos</router-link>
    <a href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view?usp=sharing" target="_blank">Curriculo</a>
    <a href="https://www.linkedin.com/in/adailton-aparecido-dos-santos-751bb922b/" target="_blank" class="social">Linkedin</a>
    <a href="https://github.com/AdailtonSantos" target="_blank" class="social">GitHub</a>
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

  header .social {
    background-color: #5670E7;
    padding: 10px 25px;
    border: 1px solid #5670E7;
    border-radius: 15px;
    transition: all .2s;
  }

  header .social:hover {
    border: 1px solid white;
    border-radius: 15px;
    background-color: transparent
  }

  @media (max-width: 959px) {
    header {
      display: none;
    }
  }

</style>
