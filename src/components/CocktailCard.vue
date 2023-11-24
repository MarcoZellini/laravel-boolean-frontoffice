<script>
export default {
  name: "CocktailCard",
  data() {
    return {
      idHoveredDiv: true,
    };
  },
  props: {
    cocktail: Object,
  },
  methods: {
    hideImage() {
      this.idHoveredDiv = false;
    },
    showImage() {
      this.idHoveredDiv = true;
    },
  },
};
</script>

<template>
  <div class="col">
    <div
      class="card p-0 position-relative h-100"
      @mouseover="hideImage"
      @mouseleave="showImage"
    >
      <img
        class="card-img-top img-fluid object-fit-cover"
        :src="cocktail.thumb"
        :alt="cocktail.name"
      />
      <div class="card-body d-flex flex-column justify-content-between">
        <h4 class="card-title fw-bold">{{ cocktail.name }}</h4>
        <p class="fw-bold">Category: {{ cocktail.category }}</p>
        <div>
          <div class="d-flex flex-column">
            <span class="fw-bold" v-if="cocktail.tags">
              Tags:
              <span v-for="tag in cocktail.tags">
                <span class="badge bg_badge mx-1">{{ tag }}</span>
              </span>
            </span>

            <span class="fw-bold" v-if="cocktail.glass_type">
              Glass Type:
              <span v-for="glass in cocktail.glass_type">
                {{ glass }}
              </span>
            </span>

            <span class="fw-bold">
              Ingredients:
              <ul class="list-unstyled">
                <li v-for="ingredient in cocktail.ingredients">
                  {{ ingredient.ingredient }}: {{ ingredient.measure }}
                </li>
              </ul>
            </span>

            <span class="fw-bold">
              {{ cocktail.is_alcoholic ? "Alcolico" : "Analcolico" }}
            </span>
          </div>
          <div v-show="!idHoveredDiv" class="recipe-overlay">
            <span class="mb-0 fw-bold">Recipe: </span>
            <span>{{ cocktail.instructions }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
