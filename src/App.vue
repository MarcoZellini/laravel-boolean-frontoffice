<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppJumbotron from "./components/AppJumbotron.vue";

export default {
  name: "App",
  data() {
    return {};
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
  <AppJumbotron></AppJumbotron>
  <main style="height: 200px;"></main>
  <AppFooter></AppFooter>
</template>

<style></style>
