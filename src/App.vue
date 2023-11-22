<script>

import { store } from './store.js'

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',

    components: {
        Navbar,
        Footer
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
        <Navbar />

    </header>

    <main>

        <!-- VIEWS -->
        <router-view></router-view>

    </main>

    <!-- FOOTER -->
    <Footer />
</template>

<style lang="scss">

</style>
