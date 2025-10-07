<template>
  <header role="banner" class="mobile-header">
    <section class="flex justify-around items-center w-full border-b border-white py-6">
      <img src="/images/logo.png" alt="Imagem escrito 'Adailton Santos'" class="w-[220px]">
      <Bars3Icon class="w-8 h-8 text-black cursor-pointer" @click="this.openMenu = true"/>
    </section>
  </header>
  <MobileMenuComponent @toggleVisibility="this.openMenu = false" v-if="this.openMenu"/>
</template>

<script>
import { Bars3Icon } from '@heroicons/vue/24/solid';
import MobileMenuComponent from './MobileMenuComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MobileMenuComponent,
    Bars3Icon
  },
  data() {
    return {
      openMenu: false
    }
  }
}
</script>

<style scoped>
.mobile-header {
  display: none
}

@media (max-width: 1076px) {
  .mobile-header {
    display: block
  }
}

</style>
