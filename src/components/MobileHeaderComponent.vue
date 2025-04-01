<template>
  <header role="banner" class="mobile-header">
    <section class="menu">
      <img src="logo.png" alt="logo-nome-soluciona">
      <i class="bi bi-list" @click="this.openMenu = true"></i>
    </section>
  </header>
  <MobileMenuComponent @toggleVisibility="this.openMenu = false" v-if="this.openMenu"/>
</template>

<script>
import MobileMenuComponent from './MobileMenuComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MobileMenuComponent
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

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid white;
  padding: 25px 0;
}

.menu img {
  width: 220px;
}

.contact-info-bar .button {
  background-color: #E7CD56;
  border: 1px solid #222220;
  border-radius: 15px;
  color: black;
  padding: 5px 15px;
  margin: auto 2px;
  transition: all .2s;
}

.contact-info-bar .button:hover {
  background-color: white;
}

.bi-list {
  font-size: 2em;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 5px;
  background-color: white
}

@media (max-width: 959px) {
  .mobile-header {
    display: block
  }
}

</style>
