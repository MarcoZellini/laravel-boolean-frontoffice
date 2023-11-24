<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <header class="pb-2">
    <nav class="navbar navbar-expand-lg p-3">
      <div class="container justify-content-start gap-4">
        <font-awesome-icon
          icon="fa-solid fa-martini-glass-citrus"
          size="xl"
          style="color: #ffffff;"
        />
        <RouterLink to="/" class="nav-link text-white">
          Home
        </RouterLink>
        <RouterLink to="/chi-siamo" class="nav-link text-white">
          Chi Siamo
        </RouterLink>
        <RouterLink to="/contatti" class="nav-link text-white">
          Contatti
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
