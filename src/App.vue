<template>
  <main role="main">
    <router-view />
  </main>
</template>

<script>

export default {
  name: 'HomeView',
}

</script>

<style>
* {
  font-family: "Trispace", sans-serif;
  font-optical-sizing: auto;
  font-weight: 00;
  font-style: normal;
  font-variation-settings: "wdth" 100;

  scroll-behavior: smooth;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>