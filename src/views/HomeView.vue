<script>
import { store } from "../store";

import { Dropdown } from 'bootstrap';

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
        store.getCocktails();
        store.getCategories();
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
            <nav aria-label="Page navigation" class="my-3 d-inline-block">

                <ul class="pagination">

                    <li class="page-item" v-for="link in store.pageLinks" :class="(link.label == store.currentPage ? 'active' : ''),
                        (link.url == null ? 'disabled' : '')" :key="link.id" aria-current="page">

                        <a class="page-link" href="#" @click="store.navigate(link.url)" v-html="link.label"></a>

                    </li>

                </ul>

            </nav>

            <!-- CATEGORY  DROPDOWN FILTER -->
            <div class="dropdown open d-inline-block ms-4">
                <button class="btn btn-primary dropdown-toggle border border-black shadow" type="button" id="categoryfilter"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filtra per Categoria
                </button>
                <ul class="dropdown-menu border border-black shadow">

                    <router-link class="dropdown-item" v-for="category in store.categories" :to="{
                        name: 'category',
                        params: { slug: category.slug }
                    }">
                        {{ category.name }}
                    </router-link>

                </ul>
            </div>

            <div class="row row-cols-1 row-cols-md-3 d-flex justify-content-center py-3 g-3">

                <!-- COCKTAIL CARDS -->
                <CocktailCard :cocktail="cocktail" v-for="cocktail in store.cocktails" />

            </div>
        </div>

    </section>
</template>

<style lang="scss"></style>

