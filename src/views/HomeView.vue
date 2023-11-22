<script >

import { store } from '../store';

export default {
    name: 'HomeView',

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
        <h1>HOME</h1>
        <h2><i class="fa-solid fa-martini-glass-citrus"></i> COCKTAILS</h2>
    </section>
</template>

<style lang="scss" scoped></style>