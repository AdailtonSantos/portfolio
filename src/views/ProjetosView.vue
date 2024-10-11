<template>
  <section>

    <section class="projetos">
      <h1>PROJETOS - Públicos</h1>
      <div class="public-projects-list">
        <div v-for="project of publicProjects" :key="project.name">
          <img :src="project.thumb" alt="site soluciona">
          <div>
            <span>{{ project.tipo }}</span>
            <p>{{ project.nome }}</p>
            <p style="font-size: 0.8em;" v-html="project.description"></p>
            <a :href="project.link" target="_blank" style="margin-top: auto;"><button>Acessar</button></a>
          </div>
        </div>
      </div>
    </section>

    <hr style="border: 0; background-color: rgb(43 40 40); height: 1px;">
    <section class="projetos">
      <h1>PROJETOS - Privados</h1>
      <div class="private-projects-list">
        <div v-for="project of privateProjects" :key="project.name" class="info">
          <video controls>
            <source :src="project.video" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div>
            <span>{{ project.tipo }}</span>
            <p>{{ project.nome }}</p>
            <hr style="border: 0; background-color: rgb(43 40 40); height: 1px;">
            <p>{{ project.description }}</p>
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
      publicProjects: [],
      privateProjects: []
    }
  },
  mounted() {
    fetch('publicos.json').then((response) => response.json()).then((response) => {
      this.publicProjects = response
    })

    fetch('privados.json').then((response) => response.json()).then((response) => {
      this.privateProjects = response
    })
  }
}

</script>

<style scoped>
.projetos {
  color: white;
  font-size: 1.2em;
  margin: 60px 150px;
}

.projetos h1 {
  color: #5670E7;
  font-size: 2em;
  margin-top: 0;
}

.public-projects-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 100px;
}

.public-projects-list div {
  display: flex;
  background-color: white;
  border-radius: 15px;
}

.public-projects-list div div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 15px;
  padding-top: 35px;
  width: 100%;
}

.public-projects-list img {
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  width: 550px;
  margin-bottom: 15px;
}

.public-projects-list span {
  color: #E5C3C3;
}

.public-projects-list p {
  color: black;
  margin-top: 0;
  margin-bottom: 15px;
}

.public-projects-list button {
  background-color: #5670E7;
  color: white;
  text-align: center;
  border: 0;
  border-radius: 5px;
  padding: 10px 0;
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all .2s ease;
  border: 1px solid #5670E7;
}

.public-projects-list button:hover {
  background-color: white;
  color: black;
}

.private-projects-list .info  {
  display: flex;
  gap: 50px;
  margin-bottom: 15px;
}

.private-projects-list video {
  width: 50%;
  margin-bottom: 60px;
}

.private-projects-list span {
  color: #E5C3C3;
  font-size: 0.9em;
}

.private-projects-list p:nth-child(2) {
  margin-top: 10px;
  color: #E5C3C3;
}

.private-projects-list p {
  margin-top: 5px;
  font-size: 0.9em;
  margin-bottom: 15px;
  line-height: 28px;
}
</style>