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