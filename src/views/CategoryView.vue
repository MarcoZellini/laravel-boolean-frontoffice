<script >

import { store } from '../store';

import axios from 'axios';

import CocktailCard from "../components/CocktailCard.vue";

export default {
    name: 'CategoryView',

    components: {
        CocktailCard
    },

    data() {
        return {
            store,
            category: null
        }

    },

    mounted() {
        axios.get('http://127.0.0.1:8000/api/cocktails/category/' + `${this.$route.params.slug}`)
            .then(response => {

                console.log('AXIOS RESPONSE:', response.data.success);

                if (response.data.success) {

                    console.log('Categoria:', response.data.result);
                    this.category = response.data.result;
                } else {
                    console.log('SINGLE TYPE QUERY RESULT:', response.data.result);
                    // WE DON'T HAVE A 404 ROUTE
                    // this.$router.push({ name: 'NotFound' })
                }

            }).catch(err => {
                console.error(err);
            })
    },

}

</script>

<template>
    <section>
        <div class="container">
            <h1 class="text-center text-capitalize" v-if="category">{{ $route.params.slug }}</h1>

            <router-link class="btn btn-primary shadow icon-link my-4" to="/">
                <i class="fa-regular fa-circle-left"></i> Back</router-link>

            <div class="row row-cols-1 row-cols-md-3 d-flex justify-content-center py-3 g-3">

                <!-- COCKTAIL CARDS -->
                <CocktailCard :cocktail="cocktail" v-for="cocktail in category" />

            </div>
        </div>

    </section>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables.scss' as *;
</style>