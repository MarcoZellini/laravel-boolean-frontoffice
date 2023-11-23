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
      <div class="d-flex gap-5 justify-content-evenly pt-4">
        <ul class="list-unstyled ps-4">
          <li class="pb-2">
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              size="lg"
              style="color: #ffffff;"
            />
            <span class="ps-3">Via Roma 5</span>
          </li>
          <li class="pb-2">
            <font-awesome-icon
              icon="fa-brands fa-whatsapp"
              size="lg"
              style="color: #ffffff;"
            />
            <span class="ps-3">+39 355 886 4545</span>
          </li>
          <li>
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              size="lg"
              style="color: #ffffff;"
            />
            <span class="ps-3"> CocktailBar@gmail.com</span>
          </li>
        </ul>
        <ul class="list-unstyled d-flex align-items-center gap-4">
          <li>
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              size="xl"
              style="color: #ffffff;"
            />
          </li>
          <li>
            <font-awesome-icon
              icon="fa-brands fa-facebook"
              size="xl"
              style="color: #ffffff;"
            />
          </li>
          <li>
            <font-awesome-icon
              icon="fa-brands fa-pinterest"
              size="xl"
              style="color: #ffffff;"
            />
          </li>
          <li>
            <font-awesome-icon
              icon="fa-brands fa-x-twitter"
              size="lg"
              style="color: #ffffff;"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
