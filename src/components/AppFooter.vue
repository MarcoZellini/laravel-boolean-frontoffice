<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row gap-5 justify-content-between align-items-center pt-4">
        <div class="col">
          <h3 class="text-white">Contattaci</h3>
          <ul class="list-unstyled">
            <li class="pb-2">
              <a href="#" class="icon-link text-decoration-none text-white">
                <i class="fa-solid fa-location-dot"></i> Via Roma, 3, Roma, IT
              </a>
            </li>

            <li class="pb-2">
              <a href="#" class="icon-link text-decoration-none text-white">
                <i class="fa-solid fa-phone"></i> 300 123 4567
              </a>
            </li>
            <li class="pb-2">
              <a href="#" class="icon-link text-decoration-none text-white">
                <i class="fa-regular fa-clock"></i>
                <div class="d-flex flex-column">
                  <span>Lun-Ven 11:00-00:00,</span>
                  <span>Sab-Dom 15:00-00:00</span>
                </div>
              </a>
            </li>

            <li>
              <a
                href="mailto:cocktailbar@drunk.it"
                class="icon-link text-decoration-none text-white"
                ><i class="fa-solid fa-envelope"></i> cocktailbar@drunk.it</a
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <h3 class="text-white text-center pb-3">Seguici sui social</h3>
          <ul
            class="list-unstyled d-flex align-items-center gap-4 d-flex justify-content-center"
          >
            <li>
              <font-awesome-icon
                icon="fa-brands fa-instagram"
                size="xl"
                class="color_hover"
              />
            </li>
            <li>
              <font-awesome-icon
                icon="fa-brands fa-facebook"
                size="xl"
                class="color_hover"
              />
            </li>
            <li>
              <font-awesome-icon
                icon="fa-brands fa-pinterest"
                size="xl"
                class="color_hover"
              />
            </li>
            <li>
              <font-awesome-icon
                icon="fa-brands fa-x-twitter"
                size="lg"
                class="color_hover"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
