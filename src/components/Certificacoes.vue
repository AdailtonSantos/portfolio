<template>
  <section class="bg-[#f5f8ff] py-20 px-5" id="especializacoes">
    <h2 class="text-center mb-8 text-[var(--primary-blue)] flex items-center justify-center gap-2 text-4xl font-bold">
      <StarIcon class="w-10 h-10" />
      Especializações
    </h2>
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="(cert, index) in certificados"
        :key="index"
        class="w-[400px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center p-6"
      >
        <img :src="cert.imagem" :alt="cert.titulo" class="w-[30%] block" />
        <div class="mt-4">
          <h3 class="text-lg font-bold mb-2">{{ cert.titulo }}</h3>
          <span class="text-sm text-gray-600">Emitido por: {{ cert.emissor }}</span><br>
          <span class="text-sm text-gray-600">Concluído em: {{ cert.data }}</span><br><br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { StarIcon } from "@heroicons/vue/24/solid";
import certificados from "../../public/json/certificados.json";

export default {
  name: "CertificacoesComponent",
  components: {
    StarIcon
  },
  data() {
    return {
      certificados
    };
  }
};
</script>