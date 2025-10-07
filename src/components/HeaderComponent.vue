<template>
  <header role="banner" class="header md:flex justify-around items-center p-5 bg-white gap-4">
    <img src="/images/logo.png" alt="Nome do dono do portifólio, Adailton Santos">
    <nav role="navigation" class="flex gap-4 items-center font-bold">
      <a href="#inicio" class="text-black hover:text-[#274beb] transition-colors duration-100">Início</a>
      <a href="#especializacoes" class="text-black hover:text-[#274beb] transition-colors duration-100">Especializações</a>
      <a href="#competencias" class="text-black hover:text-[#274beb] transition-colors duration-100">Competências</a>
      <a href="#sobre" class="text-black hover:text-[#274beb] transition-colors duration-100">Sobre mim</a>
      <a href="#projetos" class="text-black hover:text-[#274beb] transition-colors duration-100">Projetos</a>
      <a href="https://drive.google.com/file/d/1I2x4d1e9cJSbL8eYvnsnbAl19uWh8GQ-/view?usp=sharing"
        target="_blank" rel="noreferrer noopener" class="text-black hover:text-[#274beb] transition-colors duration-100">Curriculo</a>
      <a href="https://www.linkedin.com/in/adailtonapsantos/" target="_blank" rel="noreferrer noopener"
        class="bg-[#5670E7] px-6 py-2.5 rounded-2xl text-white hover:text-[var(--black)] border border-[#5670E7] transition-all duration-200 hover:bg-transparent hover:border-[#274beb] focus:bg-transparent focus:border-[#274beb] focus:text-[#274beb]">Linkedin</a>
      <a href="https://github.com/AdailtonSantos" target="_blank" rel="noreferrer noopener"
        class="bg-[#5670E7] px-6 py-2.5 rounded-2xl text-white hover:text-[var(--black)] border border-[#5670E7] transition-all duration-200 hover:bg-transparent hover:border-[#274beb] focus:bg-transparent focus:border-[#274beb] focus:text-[#274beb]">GitHub</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style>
.header {
  display: none;
}

@media (min-width: 1077px) {
  .header {
    display: flex;
  }
}
</style>