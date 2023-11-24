<script>
export default {
  name: "AboutView",
};
</script>

<template>
  <section id="about" class="bg-color-dark text-light">
    <div class="container py-5 about px-4">
      <div class="row gap-5 justify-content-between">
        <div class="col-12 col-md-4">
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
        <div class="col-12 col-md-6 align-self-center">
          <img
            class="rounded-circle shadow"
            src="../assets/img/different-cocktails.webp"
            alt="different-cocktails"
            srcset=""
          />
        </div>

        <hr />

        <div class="col-12 col-md-6 align-self-center">
          <img
            class="rounded-circle shadow"
            src="../assets/img/LesserKnownCocktails_HERO_062223.webp"
            alt="different-cocktails"
            srcset=""
          />
        </div>
        <div class="col-12 col-md-4">
          <h2>Cosa proproniamo?</h2>
          <p class="fs-4 mt-5">
            "It's Cocktail propone una vastissima quantita' di cocktails e
            ricette con cui sperimentare e scprire nuovi sapori "
          </p>
        </div>

        <hr />

        <div class="row mb-2">
          <div class="col-12 col-md-3 collage mb-3">
            <img src="../assets/img/cocktail-party_web.webp" alt="" srcset="" />
          </div>
          <div class="col-12 col-md-3 collage mb-3">
            <img
              src="../assets/img/Bacardi-s-top-5-cocktail-trends-for-2022.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-12 col-md-3 collage mb-3">
            <img
              src="../assets/img/classic-drinks-to-learn-at-onlin.webp"
              alt=""
              srcset=""
            />
          </div>
          <div class="col-12 col-md-3 collage mb-3">
            <img
              src="../assets/img/iStock-508704770 (1).jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <button class="rounded btn w-25 py-2 m-auto btn-dark">
          <a href="https://www.instagram.com"> Scopri di piu'!</a>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  object-fit: cover;
}

a {
  color: white !important;
  text-decoration: none;
}
.collage:hover {
  transform: translateY(0) scale(1.1);
}

button:hover {
  transform: translateY(0) scale(1.2);
}

hr {
  color: rgb(255, 255, 255);
  height: 2px;
}
</style>
