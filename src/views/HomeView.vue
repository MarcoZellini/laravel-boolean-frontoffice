<script >

import { store } from '../store';

import CocktailCard from "../components/CocktailCard.vue";

export default {
    name: 'HomeView',

    components: {
        CocktailCard
    },

    data() {
        return {
            store,
        }

    },

    mounted() {
        // GET COCKTAILS LIST
    },

    methods: {

    }

}

</script>

<template>
    <section id="home" class="">
        <div class="container">
            <h1>HOME</h1>
            <h2><i class="fa-solid fa-martini-glass-citrus"></i> COCKTAILS</h2>
            <div class="row d-flex justify-content-center">
                <CocktailCard />
            </div>
        </div>


    </section>
</template>

<style lang="scss" scoped></style>