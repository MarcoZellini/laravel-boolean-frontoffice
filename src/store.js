import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
  cocktailsUrl: "http://127.0.0.1:8000/api/cocktails",
  cocktails: null,

  getCocktails() {
    axios
      .get(this.cocktailsUrl)
      .then((response) => {
        this.cocktails = response.data.result.data;
        console.log("Cocktails list:", this.cocktails);
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
