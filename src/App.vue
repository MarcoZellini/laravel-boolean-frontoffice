<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppJumbotron from "./components/AppJumbotron.vue";

import { store } from './store.js'

export default {
  name: "App",
  data() {
    return {
      store
      };
  },
  components: {
    AppHeader,
    AppFooter,
    AppJumbotron,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  
  <main style="height: 200px;">
    <AppJumbotron></AppJumbotron>
    <!-- VIEWS -->
    <router-view></router-view>
  </main>
  <AppFooter></AppFooter>
</template>

<style></style>
