<template>
  <section class="general">
    <div>
      <section class="principal">
        <p>Olá, meu nome é <span>Adailton Santos</span>, tenho 20 anos e sou
          desenvolvedor <span>Full-Stack</span>.</p>
        <div class="techs">
          <img src="logos/logoVue.png" alt="logo vuejs">
          <img src="logos/logoNode.png" alt="logo nodejs">
          <img src="logos/logoPhp.png" alt="logo php">
        </div>
        <p>Minha stack principal de desenvolvimento é VueJS e NodeJs, mas
          também possuo conhecimento e experiência em PHP.</p>
      </section>

      <section class="extra">
        <p> Competências adicionais </p>
        <div>
          <img v-for="competence of competences" :src="competence.image" alt="" :key="competence.tec"
            class="competence-logo">
        </div>
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
  data() {
    return {
      competences: []
    }
  },
  mounted() {
    this.getCompetences()
  },
  methods: {
    getCompetences() {
      fetch('competencias.json').then(res => res.json()).then(data => {
        this.competences = data
      })
    }
  }
}

</script>

<style scoped>
.general {
  height: 90dvh;
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
  margin-top: 50px;
  text-align: center;
  max-width: 60ch;
  line-height: 30px;
  border: 1px solid white;
  border-radius: 25px;
}

.extra div {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 25px;
  align-items: center;
  justify-content: center;
}

.info {
  position: absolute;
  color: white;
  bottom: 40px;
  right: 150px;
}

.competence-logo {
  transition: transform .3s ease;
  cursor: pointer;
}

.competence-logo:hover {
  transform: translateY(-30%);
}

@media (max-width: 1598px) {
  .scroll-gif {
    margin-right: 5vw;
  }

  .principal p {
    font-size: 0.9em;
  }

  .techs img {
    margin: 0 5px;
    width: 80px;
  }

  .extra div img {
    width: 100px;
  }
}

@media (max-width: 1234px) {
  .scroll-gif {
    display: none;
  }

  .general {
    justify-content: center;
    text-align: center;
  }

  .general div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .principal {
    margin-left: initial
  }

  .extra {
    margin-left: initial;
    margin-top: initial;
  }

  .info {
    position: inherit;
    padding: 15px;
    text-align: center;
  }
}

@media (max-width: 857px) {

  .general {
    height: initial
  }

  .general div:nth-child(1) {
    width: 100%;
    padding: 15px
  }

  .extra {
    border: none;
  }
}

</style>
