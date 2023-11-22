<script >

export default {
    name: 'CocktailCard',

    props: {
        // THIS WLL NEED THE PROPS TO RENDER THE COMPONENT FROM API DATA
    },

    mounted() {

    },

    methods: {

    }

}

</script>

<template>
    <div class="col-3">
        <div class="card">
            <img class="card-img-top img-fluid" src="https://picsum.photos/id/237/200/300" alt="Title">
            <div class="card-body">
                <h4 class="card-title">Cocktail Name</h4>
                <p>Category</p>
                <p>Tags (ARRAY)</p>
                <p>Glass Type</p>
                <p>Ingredients (OBJECTS ARRAY)</p>
                <p>Alcholic (BOOLEAN)</p>
                <p>Recipe</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>