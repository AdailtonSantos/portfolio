<template>
  <HeaderComponent />
  <MobileHeaderComponent />
  <HomeComponent />
  <CompetenciasComponent />
  <SobreComponent />
  <ProjetosComponent />
  <FooterComponent />
</template>
<script>
import CompetenciasComponent from '@/components/CompetenciasComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
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
    CompetenciasComponent,
    SobreComponent,
    ProjetosComponent,
    FooterComponent
  }
}

</script>

<style scoped>

.principal {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80dvh;

  background-color: #EEF2FF;
}

.content {
  color: black;
  max-width: 65ch;
}

h1 {
  font-size: 2em;
}

span {
  color: #2463EB;
}

p {
  font-size: 1.2em;
}

button {
  padding: 10px 25px;
  border: 1px solid rgba(0, 0, 0, 0.414);
  margin: 0 5px;
  border-radius: 5px;

  cursor: pointer;
}

button.to-projects {
  background-color: #2463EB;
}

button.to-projects {
  color: white;
}

button.to-curriculum {
  background-color: white;
}

button.to-curriculum {
  font-weight: bold;
}

img {
  border-radius: 50%;
  width: 400px;
}

</style>