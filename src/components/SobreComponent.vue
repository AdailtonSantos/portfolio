<template>
  <section class="general" id="sobre">
    <h2>Sobre Mim</h2>
    <section class="principal">
      <div class="who-am-i">
        <h3>Quem sou eu</h3>
        <p>
          Atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Nove de Julho (Uninove). <br>
          Trabalho há {{ tempoExperiencia }} com desenvolvimento full-stack, buscando sempre aumentar o meu repertório de
          competências. <br><br>

          Possuo diversos projetos desenvolvidos para clientes. Sempre participo integralmente do processo de
          desenvolvimento, desde a reunião inicial para levantamento de requisitos, até o deploy, treinamento e suporte
          pós entrega do projeto. Busco sempre entender a fundo o negócio do cliente, para ser capaz de entregar valor
          em cada feature desenvolvida.
        </p>
      </div>
      <div class="two-cards">
        <div class="card-one">
          <h3><i class="bi bi-wallet-fill"></i> Experiência</h3>

          <p>Desenvolvedor Fullstack</p>
          <span>Soluciona Assessoria • 2022 - Presente</span>

          <p>Analista de Suporte N1</p>
          <span>Soluciona Assessoria • 2021 - 2022</span>
        </div>
        <div class="card-two">
          <h3><i class="bi bi-highlighter"></i> Educação</h3>

          <p>Análise e Desenvolvimento de Sistemas</p>
          <span>Universidade Nove de Julho - Uninove • 2024 - 2026</span>

          <p>MTEC - Desenvolvimento de Jogos Digitais</p>
          <span>Etec Adhemar Batista Heméritas • 2019 - 2021</span>
        </div>
      </div>
    </section>
  </section>
</template>
<script>

export default {
  name: 'SobreComponent',
  computed: {
    tempoExperiencia() {
      const dataInicio = new Date("06-15-2022")
      const dataAtual = new Date()
      
      const diferencaAnos = dataAtual.getFullYear() - dataInicio.getFullYear() + " anos"
      if(dataInicio.getMonth() === dataAtual.getMonth()){
        return `${diferencaAnos} e meio`
      } else {
        return diferencaAnos 
      }
    }
  }
}

</script>

<style scoped>

.general {
  padding: 100px 0;
}

.principal {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 15px;
}

h2 {
  text-align: center;
}

.who-am-i,
.card-one,
.card-two {
  box-shadow: 0 4px 0 4px whitesmoke;
  padding: 25px 35px;
  border-radius: 10px;
}

.bi {
  color: #2463EB;
}

.two-cards p {
  margin-bottom: 0;
  font-weight: 500;
}

.two-cards h3 {
  margin-top: 0;
}

.card-one {
  margin-bottom: 40px;
}

span {
  color: grey;
  font-weight: bold;
  font-size: 0.85em;
}

.who-am-i {
  max-width: 60ch;
  line-height: 23px;
}
</style>
