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
        <div class="card shadow">
            <img class="card-img-top img-fluid object-fit-cover" src="https://picsum.photos/id/237/200/300" alt="Title"
                style="height: 300px;">
            <div class="card-body">
                <h4 class="card-title"><strong>Cocktail Name</strong></h4>
                <p><strong>Category: </strong>(STRING)</p>
                <p><strong>Tags: </strong>(ARRAY)</p>
                <p><strong>Glass Type: </strong>(STRING)</p>
                <p><strong>Ingredients: </strong> (OBJECTS ARRAY)</p>
                <p><strong>Alcholic: </strong>(BOOLEAN)</p>
                <p><strong>Recipe: </strong>(STRING)</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>