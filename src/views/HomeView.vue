<template>
  <section class="general">
    <div>
      <section class="principal">
        <p>Olá, meu nome é <span>Adailton Santos</span>, tenho 20 anos e sou
          desenvolvedor <span>Full-Stack</span>.</p>
        <div class="techs">
          <img src="vue.png" alt="logo vuejs">
          <img src="node.png" alt="logo nodejs">
          <img src="php.png" alt="logo php">
        </div>
        <p>Minha stack principal de desenvolvimento é VueJS e NodeJs, mas
          também possuo conhecimento e experiência em PHP.</p>
      </section>

      <section class="extra">
        <p> Competências adicionais <br>
          Linux, SQL, DevOps, PBX Cloud e Puppeteer. </p>
      </section>
      <div class="info">
        <p>São Paulo / SP</p>
        <p>adailtonaparecido69@gmail.com</p>
      </div>
    </div>
    <div class="scroll-gif">
      <img src="scrolldown.gif" alt="gif scroll down">
      <p>Use o Scroll para navegar</p>
    </div>
  </section>
</template>
<script>

export default {
  name: 'HomeView',
  components: {
  }
}

</script>

<style scoped>
.general {
  height: 86.5dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.scroll-gif {
  margin-right: 300px;
  color: white;
  text-align: center;
}

.scroll-gif img {
  width: 100px;
}

.principal {
  color: white;
  font-size: 1.2em;
  font-weight: 300;
  margin-left: 150px;
  max-width: 60ch;
  line-height: 20px;
}

.principal span {
  color: #5670E7;
}

.techs img {
  margin: 0 5px;
}

.extra {
  color: white;
  margin-left: 150px;
  text-align: center;
  max-width: 60ch;
  line-height: 30px;
}

.next {
  margin-top: 40px;
  margin-left: 150px;
  width: fit-content;
}

.next button {
  background-color: #5670E7;
  padding: 5px 15px;
  border: 0;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
}

.info {
  position: absolute;
  color: white;
  bottom: 40px;
  right: 150px;
}
</style>
