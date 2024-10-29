<template>
  <section>
    <i class="bi bi-x-circle" style="position: absolute; left: 15px; top: 15px; font-size: 1.8em"
      @click="this.$emit('toggleVisibility')"></i>
    <img src="logo.png" alt="" />
    <div class="menu">
      <span><a href="/">INÍCIO</a></span>
      <span><a href="/sobre">SOBRE MIM</a></span>
      <span><a href="/projetos">PROJETOS</a></span>
      <span><a href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view">CURRICULO</a></span>
    </div>
    <p>CONTATO</p>
    <span class="phones">(11) 95268-0986</span>
    <p>SOCIAL</p>
    <div class="social">
      <a href="https://www.linkedin.com/in/adailton-aparecido-dos-santos-751bb922b/" target="_blank"><i
          class="bi bi-linkedin"></i></a>
      <a href="https://github.com/AdailtonSantos" target="_blank"><i
          class="bi bi-github"></i></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "MobileMenuComponent",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
section {
  display: none;
}

@media screen and (max-width: 1170px) {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    width: 300px;
    background-color: white;
    position: fixed;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 999;

    padding: 35px 15px;
    box-shadow: 0 4px 4px 0 black;
  }

  section img {
    width: 150px;
    margin: 20px auto;
  }

  section .menu {
    display: flex;
    flex-direction: column;
    color: black;
    align-items: center;
    gap: 5px;
  }

  section .menu span {
    border: 2px solid #5670E7;
    border-radius: 10px;
    padding: 3px 25px;
    width: 15ch;
    text-align: center;
    font-weight: 500;
  }

  section .menu a {
    color: black;
  }

  section p {
    font-size: 2em;
    margin: 0;
    font-weight: 500;
  }

  section .social {
    display: flex;
    gap: 4px;
    color: black;
    font-size: 1.5em;
  }

  section .social a {
    color: black;
  }
}
</style>