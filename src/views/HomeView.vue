<template>
  <section class="principal">
    <div class="content">
      <h1>Olá, meu nome é <span>Adailton Santos</span><br>
      sou <span>Desenvolvedor Fullstack</span></h1>
      <p>Possuo dois anos e meio de experiência como desenvolvedor, minha stack de desenvolvimento é VueJS e NodeJs e atualmente estou
        realizando um curso de C#.
      </p>
      <a href="#projetos"><button class="to-projects">Ver projetos</button></a>
      <a href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view" target="_blank"><button class="to-curriculum">Ver currículo</button></a>
    </div>
    <img src="perfil.jpeg" alt="Foto do dono do portifólio. Um rapaz negro, utilizando tranças nagô e uma camisa social. Ele possui uma aliança no dedo. A foto está sendo tirada na frente de um espelho redondo.">
  </section>  
</template>
<script>

export default {
  name: 'HomeView',
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
}

button.to-curriculum {
  background-color: white;
}

button.to-curriculum {
  font-weight: bold;
}

img {
  border-radius: 50%;
  width: 400px;
}

</style>