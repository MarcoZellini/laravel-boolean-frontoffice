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
        store.getCocktails()
    },

}

</script>

<template>
    <section id="home" class="">
        <div class="container">
            <h1 class="text-center">HOME</h1>
            <h2 class="text-center"><i class="fa-solid fa-martini-glass-citrus"></i> COCKTAILS</h2>


            <!-- PAGINATION -->
            <!-- PUOI AGGIUNGERE v-if="store.currentPage > 1" PER FARLA SPARIRE QUANDO NON CI SONO ABBSTANZA PAGINE -->
            <nav aria-label="Page navigation" class="my-3">

                <ul class="pagination">

                    <li class="page-item" v-for="link in store.pageLinks" :class="(link.label == store.currentPage ? 'active' : ''),
                        (link.url == null ? 'disabled' : '')" :key="link.id" aria-current="page">

                        <a class="page-link" href="#home" @click="store.navigate(link.url)" v-html="link.label"></a>

                    </li>

                </ul>

            </nav>

            <div class="row row-cols-1 row-cols-md-3 d-flex justify-content-center py-3 g-3">

                <!-- COCKTAIL CARDS -->
                <CocktailCard :cocktail="cocktail" v-for="cocktail in store.cocktails" />

            </div>
        </div>


    </section>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;

#home {
    background-color: $appBg;
}
</style>