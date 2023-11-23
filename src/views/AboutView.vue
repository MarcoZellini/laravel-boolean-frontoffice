<script>
export default {
  name: "AboutView",
};
</script>

<template>
  <section id="about" class="">
    <div class="container my-4 py-5 d-flex justify-content-evely text-center">
      <div class="row gap-5">
        <div class="col-6">
          <h2>Chi siamo?</h2>
          <p class="fs-4 mt-5">
            "It'Cocktail è un luogo d’incontro, uno spazio di condivisione in
            cui cucina, musica e ospitalità si fondono in un intreccio
            inestricabile. Dall’aperitivo al cocktail after dinner, dalla
            selezione di vinili in vendita alla musica live serale, dalla cena
            conviviale al Tapa Bistrot all’esperienza sensoriale dello
            Sperimentale, Moebius è in costante divenire."
          </p>
        </div>
        <div class="col-4 align-self-end">
          <img
            class="rounded-start-pill"
            src="../assets/img/different-cocktails.webp"
            alt="different-cocktails"
            srcset=""
          />
        </div>

        <hr />

        <div class="col-6 align-self-end">
          <img
            class="rounded-end-pill border-1 shadow"
            src="../assets/img/LesserKnownCocktails_HERO_062223_55394.webp"
            alt="different-cocktails"
            srcset=""
          />
        </div>
        <div class="col-4">
          <h2>Cosa proproniamo?</h2>
          <p class="fs-4 mt-5">
            "It's Cocktail propone una vastissima quantita' di cocktails e
            ricette con cui sperimentare e scprire nuovi sapori "
          </p>
        </div>

        <hr />

        <button class="rounded btn w-25 py-2 m-auto btn-dark">
          Scopri di piu'!
          <!-- <router-link class="nav-link light" to="/projects"
          >Scopri di piu'!</router-link
        > -->
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 60vh;
}

img:hover {
  transform: translateY(0) scale(1.1);
}

button:hover {
  transform: translateY(0) scale(1.2);
}

hr {
  color: rgb(24, 24, 24);
  font-weight: 700;
}
</style>
