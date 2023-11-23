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
      <div class="container-fluid">
        <div class="navbar-brand" href="#">
          <font-awesome-icon
            icon="fa-solid fa-martini-glass-citrus"
            size="xl"
            style="color: #ffffff;"
          />
        </div>
        <button
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!--    <RouterLink to="" class="nav-link" aria-current="page">
                Home
              </RouterLink> -->
              <a
                class="nav-link text-white active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <!--    <RouterLink to="" class="nav-link" aria-current="page">
                About
              </RouterLink> -->
              <a class="nav-link text-white" href="#">About</a>
            </li>
            <li class="nav-item">
              <!--    <RouterLink to="" class="nav-link" aria-current="page">
                Contact
              </RouterLink> -->
              <a class="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
