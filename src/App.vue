<script>

import { store } from './store.js'

export default {
    name: 'App',

    components: {
        // MAYBE YOU WILL NEED A NAVBAR COMPONENT?
    },

    data() {
        return {
            store
        }

    },

    mounted() {

    },

    methods: {

    }

}
</script>

<template>
    <header>

        <!-- NAVBAR -->
        <nav class="nav justify-content-center  ">

            <router-link class="nav-link" to="/">Home</router-link>

            <router-link class="nav-link" to="/chi-siamo">Chi Siamo</router-link>

            <router-link class="nav-link" to="/contatti">Contatti</router-link>

        </nav>

    </header>

    <main>

        <!-- VIEWS -->
        <router-view></router-view>
    </main>

    <!-- FOOTER -->
    <footer>
        <h3>FOOTER</h3>

    </footer>
</template>

<style scoped></style>
