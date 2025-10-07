<template>
  <section class="py-24" id="sobre">
    <h2
      class="text-center mb-12 text-[var(--primary-blue)] flex items-center justify-center gap-3 text-4xl font-bold tracking-tight">
      <UserIcon class="w-10 h-10 text-[var(--primary-blue)]" />
      Sobre Mim
    </h2>
    <section class="flex justify-evenly flex-wrap mx-4">
      <div class="max-w-[60ch] shadow-[0_4px_0_4px_whitesmoke] p-6 rounded-lg">
        <h3 class="font-bold mb-2">Quem sou eu?</h3>
        <p class="leading-6">
          Atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Nove de Julho (Uninove). <br>
          Trabalho há {{ tempoExperiencia }} com desenvolvimento full-stack, buscando sempre aumentar o meu repertório
          de
          competências. <br><br>

          Possuo diversos projetos desenvolvidos para clientes. Sempre participo integralmente do processo de
          desenvolvimento, desde a reunião inicial para levantamento de requisitos, até o deploy, treinamento e suporte
          pós entrega do projeto. Busco sempre entender a fundo o negócio do cliente, para ser capaz de entregar valor
          em cada feature desenvolvida.
        </p>
      </div>
      <div>
        <div class="shadow-[0_4px_0_4px_whitesmoke] p-6 rounded-lg mb-10">
          <h3
            class="text-center text-[var(--primary-blue)] flex items-center mb-2 gap-3 text-1xl font-bold tracking-tight">
            <BriefcaseIcon class="w-5 h-5 text-[var(--primary-blue)]" />
            Experiência Profissional
          </h3>

          <p class="mb-0 font-medium">Desenvolvedor Fullstack</p>
          <span class="text-gray-500 font-bold text-sm">Soluciona Assessoria • 2022 - Presente</span>

          <p class="mb-0 font-medium">Analista de Suporte N1</p>
          <span class="text-gray-500 font-bold text-sm">Soluciona Assessoria • 2021 - 2022</span>
        </div>
        <div class="shadow-[0_4px_0_4px_whitesmoke] p-6 rounded-lg">
          <h3
            class="text-center text-[var(--primary-blue)] flex items-center mb-2 gap-3 text-1xl font-bold tracking-tight">
            <AcademicCapIcon class="w-5 h-5 text-[var(--primary-blue)]" />
            Educação
          </h3>

          <p class="mb-0 font-medium">Análise e Desenvolvimento de Sistemas</p>
          <span class="text-gray-500 font-bold text-sm">Universidade Nove de Julho - Uninove • 2024 - 2026</span>

          <p class="mb-0 font-medium">MTEC - Desenvolvimento de Jogos Digitais</p>
          <span class="text-gray-500 font-bold text-sm">Etec Adhemar Batista Heméritas • 2019 - 2021</span>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { AcademicCapIcon, BriefcaseIcon, UserIcon } from '@heroicons/vue/24/solid';


export default {
  name: 'SobreComponent',
  components: {
    UserIcon,
    BriefcaseIcon,
    AcademicCapIcon
  },
  computed: {
    tempoExperiencia() {
      const dataInicio = new Date("06-15-2022")
      const dataAtual = new Date()

      const diferencaAnos = dataAtual.getFullYear() - dataInicio.getFullYear() + " anos"
      if (dataInicio.getMonth() === dataAtual.getMonth()) {
        return `${diferencaAnos} e meio`
      } else {
        return diferencaAnos
      }
    }
  }
}

</script>