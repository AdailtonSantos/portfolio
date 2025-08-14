<template>
  <HeaderComponent />
  <MobileHeaderComponent />
  <HomeComponent />
  <Certificacoes />
  <CompetenciasComponent />
  <SobreComponent />
  <ProjetosComponent />
  <FooterComponent />
</template>
<script>
import CompetenciasComponent from '@/components/CompetenciasComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import Certificacoes from '@/components/Certificacoes.vue';
import MobileHeaderComponent from '@/components/MobileHeaderComponent.vue';
import SobreComponent from '@/components/SobreComponent.vue';
import ProjetosComponent from '@/components/ProjetosComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'PrincipalView',
  components: {
    HeaderComponent,
    MobileHeaderComponent,
    HomeComponent,
    Certificacoes,
    CompetenciasComponent,
    SobreComponent,
    ProjetosComponent,
    FooterComponent
  }
}

</script>