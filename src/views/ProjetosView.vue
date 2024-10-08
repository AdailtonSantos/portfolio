<template>
  <section>
    <section class="projetos-publicos">
      <h1>PROJETOS - Públicos</h1>
      <div class="projects-list">
        <div v-for="project of projects" :key="project.name">
          <img :src="project.thumb" alt="site soluciona"><br>
          <div>
            <span>{{ project.tipo }}</span>
            <p>{{ project.nome }}</p>
            <a :href="project.link" target="_blank"><button>Acessar</button></a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>

export default {
  name: 'ProjetosView',
  components: {
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('projetos.json').then((response) => response.json()).then((response) => {
      this.projects = response
    })
  }
}

</script>

<style scoped>
.projetos-publicos {
  color: white;
  font-size: 1.2em;
  margin-top: 60px;
  margin-left: 150px;
  margin-right: 150px;
}

.projetos-publicos h1 {
  color: #5670E7;
  font-size: 2em;
  margin-top: 0;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 100px;
}

.projects-list div {
  background-color: white;
  border-radius: 15px;
}
.projects-list div div {
  padding: 0 15px;
}

.projects-list img {
  border-radius: 15px;
  object-fit: cover;
  width: 400px;
}

.projects-list span {
  color: #E5C3C3;
}

.projects-list p {
  color: black;
  margin-top: 0;
  margin-bottom: 15px;
}

.projects-list button {
  background-color: #5670E7;
  color: white;
  text-align: center;
  border: 0;
  border-radius: 5px;
  padding: 2px 0;
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
}
</style>