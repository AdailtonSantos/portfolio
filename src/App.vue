<template>
  <section>
    <HeaderComponent />
    <MobileHeaderComponent />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import MobileHeaderComponent from '@/components/MobileHeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    MobileHeaderComponent,
  },
  data() {
    return {
      routes: ['/', '/sobre', '/projetos'],
    }
  },
  mounted() {},
  methods: {}
}

</script>

<style>
* {
  font-family: "Trispace", sans-serif;
  font-optical-sizing: auto;
  font-weight: 00;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url('../public/background.jpg') repeat-y center center;
  background-size: cover;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease-out;
}
</style>
