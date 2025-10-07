<template>
  <section class="py-12 px-5 bg-gray-50" id="projetos">
    <h2
      class="text-center mb-12 text-[var(--primary-blue)] flex items-center justify-center gap-3 text-4xl font-bold tracking-tight">
      <WrenchIcon class="w-10 h-10 text-[var(--primary-blue)]" />
      Meus Projetos
    </h2>
    <section class="flex flex-wrap justify-center gap-5 mx-10">

      <div v-for="projeto of projetos" :key="projeto.nome"
        class="bg-white rounded-lg shadow-md p-6 w-[350px] flex flex-col justify-between">
        <div>
          <img v-if="!projeto.capa.includes('.mp4')" :src="projeto.capa" alt=""
            class="w-full rounded-lg mb-4 min-h-[170px]">
          <video v-else controls class="w-full min-h-[170px]">
            <source :src="projeto.capa" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <h3 class="text-xl text-gray-800">{{ projeto.nome }}</h3>
          <p class="text-base text-gray-600 my-3">{{ projeto.descricao }}</p>
          <span v-for="tecnologia of projeto.tecnologias" :key="tecnologia"
            class="inline-block bg-[#99afc7] text-black px-3 py-1 rounded text-sm m-1">
            {{ tecnologia }}
          </span>
          <br><br>
        </div>
        <div class="actions">
          <a v-if="projeto.acesso" :href="projeto.acesso" target="_blank" rel="noreferrer noopener"
            class="flex items-center justify-center my-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            &nbsp; Acessar
          </a>
          <a v-if="projeto.codigo" :href="projeto.codigo" target="_blank" rel="noreferrer noopener"
            class="flex items-center justify-center my-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            <svg class="w-7 h-7 fill-current text-[var(--white)]" role="img" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg> &nbsp; Código
          </a>
        </div>
      </div>

    </section>
  </section>
</template>
<script>
import { WrenchIcon } from '@heroicons/vue/24/solid';


export default {
  name: 'SobreComponent',
  components: {
    WrenchIcon
  },
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
