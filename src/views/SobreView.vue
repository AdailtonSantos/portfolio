<template>
  <section class="general">
    <div>
      <section class="principal">
        <h1>SOBRE MIM</h1>
        <p>Atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Nove de Julho (Uninove). <br><br>

          Trabalho há 2 e meio anos com desenvolvimento web, focado no desenvolvimento de sites, sistemas e automações com
          Puppeteer. <br><br>
          
          Possuo diversos projetos desenvolvidos para clientes. Sempre participo integralmente do processo inteiro do desenvolvimento,
          desde a reunião inicial para levantamento de requisitos, até o deploy, treinamento e suporte pós entrega do projeto. Busco sempre 
          entender a fundo o negócio do cliente, para ser capaz de entregar valor em cada feature que eu desenvolver.</p>
      </section>
      <div class="info">
        <p>São Paulo / SP</p>
        <p>contato.adailtonapsantos@gmail.com</p>
      </div>
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
  line-height: 25px;
}

.principal h1 {
  color: #5670E7;
  font-size: 2em;
  margin-top: 0;
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

@media (max-width: 1598px) {
  .scroll-gif {
    margin-right: 5vw;
  }
}

@media (max-width: 1307px) {
  .scroll-gif {
    display: none;
  }
}


@media (max-width: 1061px) {
  .general {
    height: initial;
    align-items: initial;
    justify-content: center;
    padding: 15px;
    margin-top: 50px;
    font-size: 0.9em;
  }

  .principal {
    margin-left: 0;
  }

  .info {
    position: initial;
    color: white;
    text-align: center;
    margin-top: 50px
  }
}
</style>
