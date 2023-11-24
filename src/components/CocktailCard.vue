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
        <div class="card p-0 position-relative h-100 border-black shadow" @mouseover="hideImage" @mouseleave="showImage">

            <img class="card-img-top img-fluid object-fit-cover" :src="cocktail.thumb" :alt="cocktail.name" />

            <div class="card-body d-flex flex-column">

                <h4 class="card-title fw-bold">{{ cocktail.name }}</h4>

                <p v-if="cocktail.category" class="fw-bold">Category: {{ cocktail.category.name }}</p>

                <div>

                    <div class="d-flex flex-column">

                        <span class="fw-bold">
                            {{ cocktail.is_alcoholic ? "Alcolico" : "Analcolico" }}
                        </span>

                        <span class="fw-bold" v-if="cocktail.tags">
                            Tag:
                            <span v-for="tag in cocktail.tags">
                                <span class="badge bg_badge mx-1">{{ tag }}</span>
                            </span>
                        </span>

                    </div>

                    <div v-show="!idHoveredDiv">

                        <div class="recipe-overlay text-start d-flex flex-column align-items-start justify-content-start">
                            <span v-if="cocktail.glass_type" class="mb-3"><strong>Bicchiere: </strong>

                                <span v-for="glass in cocktail.glass_type">
                                    {{ glass }}
                                </span>

                            </span>

                            <span class="fw-bold">Ingredienti:</span>

                            <ul class="list-unstyled">
                                <li v-for="ingredient in cocktail.ingredients">
                                    {{ ingredient.name }}: {{ ingredient.measure }}
                                </li>
                            </ul>

                            <span class="mb-0 fw-bold">Preparazione: </span>
                            <span>{{ cocktail.instructions }}</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
