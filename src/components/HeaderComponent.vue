<template>
  <header role="banner">
    <img src="logo.png" alt="Nome do dono do portifólio, Adailton Santos">
    <nav role="navigation">
      <router-link to="/">Início</router-link>
      <router-link to="/competencias">Competências</router-link>
      <router-link to="/sobre">Sobre mim</router-link>
      <router-link to="/projetos">Projetos</router-link>
      <a href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view?usp=sharing"
        target="_blank">Curriculo</a>
      <a href="https://www.linkedin.com/in/adailton-aparecido-dos-santos-751bb922b/" target="_blank"
        class="social">Linkedin</a>
      <a href="https://github.com/AdailtonSantos" target="_blank" class="social">GitHub</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
header {
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 15px;
}

nav {
  display: flex;
  gap: 15px;
  align-items: center;
}

header * {
  color: black;
  text-decoration: none;
}

header .social {
  background-color: #5670E7;
  padding: 10px 25px;
  border: 1px solid #5670E7;
  border-radius: 15px;
  transition: all .2s;
  color: white;
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
