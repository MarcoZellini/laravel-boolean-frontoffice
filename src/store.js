import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
  cocktailsUrl: "http://127.0.0.1:8000/api/cocktails",
  cocktails: null,
  pageLinks: null,
  currentPage: null,
  
    getCocktails() {

        axios.get(this.cocktailsUrl)
            .then(response => {

                // console.log('response:', response);

                this.cocktails = response.data.result.data;
                console.log('Cocktails list:', this.cocktails);

                this.pageLinks = response.data.result.links;
                console.log('Pagination links', this.pageLinks);

                this.currentPage = response.data.result.currentPage;
                console.log('Current page', this.currentPage);

            })
            .catch(err => {
                console.error(err);
            })

    },

    // PAGE NAVIGATROR
    navigate(url) {
        axios.get(url)
            .then(response => {

                console.log(response);

                this.cocktails = response.data.result.data;
                console.log('Cocktails list:', this.cocktails);

                this.pageLinks = response.data.result.links;
                console.log('Pagination links', this.pageLinks);

                this.currentPage = response.data.result.currentPage;

                console.log('Current page', this.currentPage);

            }).catch(err => {
                console.error(err);
            })

    },

})
