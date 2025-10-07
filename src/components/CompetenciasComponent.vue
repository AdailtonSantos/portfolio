<template>
  <section class="py-20 px-6 bg-[var(--white)]" id="competencias">
    <!-- Título -->
    <h2
      class="text-center mb-12 text-[var(--primary-blue)] flex items-center justify-center gap-3 text-4xl font-bold tracking-tight"
    >
      <PencilIcon class="w-10 h-10 text-[var(--primary-blue)]" />
      Competências Adicionais
    </h2>

    <!-- Grid de competências -->
    <div
      class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto"
    >
      <!-- Card -->
      <div
        v-for="(item, index) in competencias"
        :key="index"
        class="group relative p-[1px] rounded-xl border-1 border-[var(--primary-blue)] shadow-lg"
      >
        <div
          class="bg-white rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 "
        >
          <h3
            class="text-[var(--primary-blue)] font-semibold text-xl mb-3 flex items-center gap-2"
          >
            {{ item.titulo }}
          </h3>
          <ul
            class="p-0 m-0 list-disc list-inside marker:text-[var(--primary-blue)] text-gray-700 leading-relaxed text-left"
          >
            <li v-for="(tec, tIndex) in item.tecnologias" :key="tIndex">
              {{ tec }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PencilIcon } from '@heroicons/vue/24/solid'

const competencias = [
  {
    titulo: 'Backend',
    tecnologias: ['Sequelize', 'JWT', 'Jest e Jest Puppeteer', 'Puppeteer (Web Scraping)', 'WebSocket'],
  },
  {
    titulo: 'Frontend',
    tecnologias: ['Nuxt.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    titulo: 'Aplicações',
    tecnologias: ['N8N', 'Postman', 'Typebot', 'Zabbix', 'Linux'],
  },
]
</script>