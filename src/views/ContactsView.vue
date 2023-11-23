<script >

import axios from 'axios'

export default {
    name: 'ContactsView',

    data() {
        return {

            loading: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            success: null,

        }

    },

    mounted() {

    },

    methods: {

        sendForm() {

            this.errors = [];

            this.success = null;

            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }

            console.log('payload: ', payload);

            axios.post('http://127.0.0.1:8000/api/contacts', payload).then(response => {

                console.log('response ', response);

                const success = response.data.success;

                console.log('success', success);

                if (!success) {
                    console.log('ERRORI:', response.data.errors);

                    this.errors = response.data.errors;
                } else {

                    console.log('VALIDATION PASSED', response);

                    // SVUOTA I CAMPI
                    this.name = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';

                    this.success = response.data.message;

                }

            })
                .catch(err => {
                    console.error(err);
                })
        }

    }

}

</script>

<template>
    <section id="contacts" class="">

        <section id="contacts" class="pt-5">
            <div class="container h-100 d-flex flex-column">

                <div class="row justify-content-center">

                    <div class="col shadow rounded p-3">

                        <h3>Contattaci:</h3>

                        <!-- EMAIL FORM -->
                        <form action="" v-on:submit.prevent="sendForm()">

                            <div class="mb-2">
                                <label for="name" class="form-label"> <strong>Nome:</strong></label>
                                <input type="text" name="name" id="name" class="form-control" placeholder="Fabio Rossi"
                                    aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }">

                                <small id="nameHelper" class="form-text">Inserisci il tuo nome</small>

                                <small v-if="errors.name" v-for="message in errors.name" id="nameHelper"
                                    class="text-danger d-block"> {{ message }}</small>

                            </div>

                            <div class="mb-2">
                                <label for="email" class="form-label"><strong>Email:</strong></label>
                                <input type="email" class="form-control" name="email" id="email"
                                    aria-describedby="emailHelpId" placeholder="fabiorossi@email.it" v-model="email"
                                    :class="{ 'is-invalid': errors.email }">

                                <small id="emailHelpId" class="form-text">Inserisci il tuo indirizzo e-mail</small>

                                <small v-if="errors.email" v-for="message in errors.email" id="nameHelper"
                                    class="text-danger d-block"> {{ message }}</small>

                            </div>

                            <div class="mb-2">
                                <label for="phone" class="form-label"><strong>Numero di Telefono:</strong></label>
                                <input type="tel" name="phone" id="phone" class="form-control" placeholder="300 123 4567"
                                    aria-describedby="phoneHelper" v-model="phone" :class="{ 'is-invalid': errors.phone }">

                                <small id="phoneHelper" class="form-text">Inserisci il tuo numero di telefono</small>

                                <small v-if="errors.phone" v-for="message in errors.phone" id="nameHelper"
                                    class="text-danger d-block"> {{ message }}</small>
                            </div>

                            <div class="mb-2">
                                <label for="message" class="form-label"><strong>Messaggio:</strong></label>
                                <textarea class="form-control" name="message" id="message" rows="3"
                                    aria-describedby="messageHelpId" v-model="message"
                                    :class="{ 'is-invalid': errors.message }"></textarea>

                                <small id="messageHelpId" class="form-text">Lasciaci un messaggio!</small>

                                <small v-if="errors.phone" v-for="message in errors.phone" id="nameHelper"
                                    class="text-danger d-block"> {{ message }}</small>

                            </div>

                            <button class="btn btn-success w-25" type="submit" :disabled="loading">

                                <span v-if="loading">Sending <i class="fa-solid fa-circle-notch fa-spin"></i></span>

                                <span v-else>Send <i class="fa-solid fa-paper-plane"></i></span>

                            </button> <span v-if="success" class="text-success text-capitalize mx-3"> {{ success }}</span>

                        </form>

                    </div>

                </div>

            </div>
        </section>

    </section>
</template>

<style lang="scss" scoped></style>