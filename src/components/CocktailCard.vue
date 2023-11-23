<script >

export default {
    name: 'CocktailCard',

    props: {
        cocktail: Object,
    },

}

</script>

<template>
    <div class="col">
        <div class="card h-100 shadow">
            <img class="card-img-top img-fluid object-fit-cover" :src="cocktail.thumb" :alt="cocktail.name">

            <div class="card-body">

                <h4 class="card-title"><strong>{{ cocktail.name }}</strong></h4>

                <p><strong>Category: </strong> {{ cocktail.category }}</p>

                <p v-if="cocktail.tags"><strong>Tags: </strong><span v-for="tag in cocktail.tags"> <span
                            class="badge bg-primary mx-1">{{ tag }}</span> </span></p>

                <p v-if="cocktail.glass_type"><strong>Glass Type: </strong><span v-for="glass in cocktail.glass_type">
                        {{ glass }}</span></p>

                <p class><strong>Ingredients: </strong>

                <ul class="list-unstyled">
                    <li v-for="ingredient in cocktail.ingredients">
                        {{ ingredient.name }}: {{ ingredient.measure }}
                    </li>
                </ul>

                </p>

                <p><strong>{{ cocktail.is_alcoholic ? 'Alcolico' : 'Analcolico' }}</strong></p>

                <p class="mb-0"><strong>Recipe: </strong></p>
                <span>{{ cocktail.instructions }}</span>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>