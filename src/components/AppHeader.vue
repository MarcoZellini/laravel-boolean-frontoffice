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
  <header>
    <nav class="navbar navbar-expand-lg p-3">
      <div class="container justify-content-start">
        <div class="navbar-brand" href="#">
          <font-awesome-icon
            icon="fa-solid fa-martini-glass-citrus"
            size="xl"
            style="color: #ffffff;"
          />
        </div>
        <!--     <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
          aria-expanded="false"
          aria-bs-toggle="collapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
 -->
        <div class="" id="navbarNav">
          <ul class="navbar-nav d-flex flex-row gap-4 ps-3">
            <li class="nav-item">
              <RouterLink
                to="/"
                class="nav-link text-white"
                aria-current="page"
              >
                Home
              </RouterLink>
              <!--  <a
                class="nav-link text-white active"
                aria-current="page"
                href="#"
              >
                Home
              </a> -->
            </li>
            <li class="nav-item">
              <RouterLink
                to="/chi-siamo"
                class="nav-link text-white"
                aria-current="page"
              >
                Chi Siamo
              </RouterLink>
              <!-- <a class="nav-link text-white" href="#">About</a> -->
            </li>
            <li class="nav-item">
              <RouterLink
                to="/contatti"
                class="nav-link text-white"
                aria-current="page"
              >
                Contatti
              </RouterLink>
              <!-- <a class="nav-link text-white" href="#">Contact</a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
