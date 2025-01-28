<template>
  <section>
    <section class="projetos">
      <h1>PROJETOS - Públicos</h1>
      <div class="public-projects-list">
        <div v-for="project of publicProjects" :key="project.name" class="project-card">
          <img :src="project.thumb" alt="site soluciona">
          <div class="project-content">
            <span>{{ project.tipo }}</span>
            <p class="project-title">{{ project.nome }}</p>
            <p class="project-description" v-html="project.description"></p>
            <a :href="project.link" target="_blank" class="project-link">
              <button>Acessar</button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <hr class="divider">

    <section class="projetos" style="padding-bottom: 100px;">
      <h1>PROJETOS - Privados</h1>
      <div class="private-projects-list">
        <div v-for="project of privateProjects" :key="project.name" class="info">
          <div class="video-container">
            <video controls>
              <source :src="project.video" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="project-details">
            <span>{{ project.tipo }}</span>
            <p class="project-name">{{ project.nome }}</p>
            <hr style="width: 100%;">
            <p v-html="project.description" class="project-description"></p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ProjetosView',
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
  font-size: clamp(1rem, 2vw, 1.2em);
  margin: clamp(20px, 5vw, 60px) clamp(15px, 10vw, 150px);
}

.projetos h1 {
  color: #5670E7;
  font-size: clamp(1.5em, 3vw, 2em);
  margin-top: 0;
  text-align: left;
}

.divider {
  border: 0;
  background-color: rgb(43 40 40);
  height: 1px;
  margin: 2rem auto;
  width: 90%;
}

/* Public Projects */
.public-projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.project-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s ease;
  margin: 0 auto;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

.project-content {
  display: flex;
  flex-direction: column;
  padding: clamp(12px, 2vw, 24px);
  flex-grow: 1;
}

.project-content span {
  color: #E5C3C3;
  font-size: 0.85em;
}

.project-title {
  color: black;
  margin: 0.5rem 0;
  font-size: 1em;
}

.public-projects-list .project-description {
  color: black;
  margin: 0 0 1rem 0;
  font-size: 0.75em;
  line-height: 1.5;
  flex-grow: 1;
}

.project-link {
  margin-top: auto;
  width: 100%;
}

.project-card button {
  background-color: #5670E7;
  color: white;
  width: 100%;
  padding: 10px;
  border: 1px solid #5670E7;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1em;
}

.project-card button:hover {
  background-color: white;
  color: black;
}

/* Private Projects */
.private-projects-list .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 3rem);
  padding: 15px;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 15px;
}

/* @media (max-width: 768px) {
  .private-projects-list .info {
    max-height: initial;
  }
} */

.video-container {
  width: 100%;
}

@media (min-width: 768px) {
  .video-container {
    width: 50%;
  }
}

.video-container video {
  width: 100%;
  border-radius: 10px;
}

.project-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: clamp(12px, 2vw, 24px);
  flex-grow: 1;
  color: black;
  border-radius: 15px;
}

.project-details span {
  color: black;
  font-weight: bold;
  font-size: 0.9em;
}

.project-name {
  margin: 0.5rem 0;
  color: #ffffff;
  background-color: #5670E7;
  font-size: 0.85em;
  padding: 5px 10px;
  border-radius: 5px;
}

.project-details .project-description {
  margin: 1rem 0;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 1.6;
}

@media (max-width: 480px) {
  .projetos {
    margin: 2rem 1rem;
  }

  .project-card img {
    height: 200px;
  }

  .private-projects-list .info {
    gap: 1rem;
  }
}
</style>
