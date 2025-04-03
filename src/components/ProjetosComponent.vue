<template>
  <section class="general" id="projetos">
    <h2>Meus projetos</h2>
    <section class="principal">
      <div class="card" v-for="projeto of projetos" :key="projeto.nome">
        <div>
          <img v-if="!projeto.capa.includes('.mp4')" :src="projeto.capa" alt="">
          <video style="width: 100%; min-height: 170px;" v-else controls>
            <source :src="projeto.capa" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <h3>{{ projeto.nome }}</h3>
          <p>{{ projeto.descricao }}</p>
          <span v-for="tecnologia of projeto.tecnologias" :key="tecnologia">
            {{ tecnologia }}
          </span><br><br>
        </div>
        <div class="actions">
          <a v-if="projeto.acesso" :href="projeto.acesso" target="_blank"><i class="bi bi-eye-fill"></i> Ver projeto</a>&nbsp;
          <a v-if="projeto.codigo" :href="projeto.codigo" target="_blank"><i class="bi bi-github"></i> Código</a>
        </div>
      </div>
    </section>
  </section>
</template>
<script>

export default {
  name: 'SobreComponent',
  data() {
    return {
      projetos: []
    }
  },
  mounted() {
    this.listarProjetos()
  },
  methods: {
    async listarProjetos() {
      fetch('/json/projetos.json').then((response) => response.json()).then((response) => {
        this.projetos = response
      })
    }
  }
}

</script>

<style scoped>
.general {
  padding: 50px 20px;
  background-color: #f9f9f9;
}

.general h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.principal {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.principal .card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.principal img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;

  min-height: 170px;
}

.principal h3 {
  font-size: 1.2rem;
  color: #222;
}

.principal p {
  font-size: 1rem;
  color: #555;
  margin: 10px 0;
}

.principal span {
  display: inline-block;
  background: #99afc7;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  margin: 5px;
}

.principal a {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  margin: px 5px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.principal a:hover {
  background: #0056b3;
}

@media (max-width: 384px) {
  .actions a {
    font-size: 3dvw;
  }
}
</style>
