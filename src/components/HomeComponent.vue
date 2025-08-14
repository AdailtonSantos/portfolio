<template>
  <section class="principal" id="inicio">
    <div class="content">
      <h1>Olá, meu nome é <span>Adailton Santos,</span><br>
        sou <span>Desenvolvedor Fullstack</span></h1>
      <p>Possuo {{ tempoExperiencia }} de experiência como desenvolvedor e minha stack de desenvolvimento é Vue.js e Nest.Js com TypeORM.
      </p>
      <a aria-hidden="true" tabindex="-1" href="#projetos"><button class="to-projects">Ver projetos</button></a>
      <a aria-hidden="true" tabindex="-1" href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view"
        target="_blank"><button class="to-curriculum">Ver currículo</button></a>
    </div>
    <img class="perfil-image" src="/images/perfil.jpeg"
      alt="Foto do dono do portifólio. Um rapaz negro, utilizando tranças nagô e uma camisa social. Ele possui uma aliança no dedo. A foto está sendo tirada na frente de um espelho redondo.">
  </section>
</template>
<script>

export default {
  name: 'HomeComponent',
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
  },
}

</script>

<style scoped>
.principal {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80dvh;

  background-color: #EEF2FF;
}

.content {
  color: black;
  max-width: 65ch;
}

h1 {
  font-size: 2em;
}

span {
  color: #2463EB;
}

p {
  font-size: 1.2em;
}

button {
  padding: 10px 25px;
  border: 1px solid rgba(0, 0, 0, 0.414);
  margin: 0 5px;
  border-radius: 5px;

  cursor: pointer;
}

button.to-projects {
  background-color: #2463EB;
}

button.to-projects {
  color: white;
  transition: all .1s ease-in-out;
}

button.to-curriculum {
  background-color: white;
  font-weight: bold;
}

.to-projects:hover,
.to-projects:focus {
  background-color: white;
  color: black;
}

.to-curriculum:hover,
.to-curriculum:focus {
  border: 1px solid black;
}

.perfil-image {
  border-radius: 50%;
  width: 400px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: float 4s ease-in-out infinite;
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
    transform: rotate(-2deg);
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.3);
  }

  50% {
    transform: translateY(-8px);
    transform: rotate(2deg);
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.3);
  }
}

@media (max-width: 1086px) {
  .principal {
    flex-direction: column-reverse;
    height: initial;
    background-color: white;
    margin: 0 15px;
  }

  .perfil-image {
    width: 300px;
  }
}
</style>