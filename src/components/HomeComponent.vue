<template>
  <section id="inicio"
    class="flex flex-col-reverse md:flex-row items-center justify-center md:justify-around h-auto md:h-[60dvh] px-6 py-10 bg-indigo-50 text-center md:text-left"
  >
    <div class="text-black max-w-[70ch] mt-8 md:mt-0">
      <h1 class="text-3xl sm:text-4xl font-medium leading-tight">
        Olá, meu nome é <br>
        <span class="font-light italic">Adailton Santos,</span><br>
      </h1>

      <h2 class="text-xl sm:text-2xl font-medium mt-2">
        Sou desenvolvedor Full-Stack com foco em Back-End.
      </h2>

      <h3 class="text-base sm:text-lg my-4 font-bold">
        - Seja bem-vindo ao meu portfólio.
      </h3>

      <p class="flex items-center justify-center md:justify-start text-[var(--gray)] mb-2 font-bold">
        <MapPinIcon class="w-5 h-5 text-[var(--gray)] mr-2" />
        São Paulo, Brasil
      </p>

      <p class="flex items-center justify-center md:justify-start text-[var(--gray)] mb-2 font-bold">
        <ClockIcon class="w-5 h-5 text-[var(--gray)] mr-2" />
        {{ tempoExperiencia }} desenvolvendo sistemas para diversos seguimentos
      </p>

      <p class="flex items-center justify-center md:justify-start text-[var(--gray)] mb-6 font-bold">
        <WrenchScrewdriverIcon class="w-5 h-5 text-[var(--gray)] mr-2" />
        NodeJs, ExpressJs, NestJs, TypeORM, TypeScript, Vue3, TailwindCSS, MySQL, Docker, Azure Cloud, Git
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
        <a href="#projetos" aria-hidden="true" tabindex="-1">
          <button
            class="px-6 py-2.5 border border-black/40 rounded cursor-pointer bg-blue-600 text-white hover:bg-white hover:text-black transition-all duration-150"
          >
            Ver projetos
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view"
          target="_blank"
          aria-hidden="true"
          tabindex="-1"
        >
          <button
            class="px-6 py-2.5 border border-black/40 rounded cursor-pointer bg-white font-bold hover:border-black transition-all duration-150"
          >
            Ver currículo
          </button>
        </a>
      </div>
    </div>

    <img
      class="rounded-full w-48 sm:w-64 md:w-80 lg:w-[400px] shadow-lg transition-transform duration-300 ease-in-out animate-float"
      src="/images/perfil.png"
      alt="Foto do dono do portfólio. Um rapaz negro, com barba e cabelo curto, usando jaqueta clara de gola alta."
    />
  </section>
</template>

<script>
import { ClockIcon, MapPinIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'HomeComponent',
  components: {
    MapPinIcon,
    ClockIcon,
    WrenchScrewdriverIcon,
  },
  computed: {
    tempoExperiencia() {
      const dataInicio = new Date('06-15-2022')
      const dataAtual = new Date()
      const anos = dataAtual.getFullYear() - dataInicio.getFullYear()
      const meses = dataAtual.getMonth() - dataInicio.getMonth()
      return meses >= 6 ? `${anos} anos e meio` : `${anos} anos`
    },
  },
}
</script>