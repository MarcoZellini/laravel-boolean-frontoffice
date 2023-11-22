<script >

export default {
    name: 'ContactsView',

    data() {
        return {

        }

    },

    mounted() {

    },

    methods: {

    }

}

</script>

<template>
    <section id="contacts" class="">

        <section id="contacts" class="vh-100 pt-5">
            <div class="container h-100 d-flex flex-column">

                <div class="row justify-content-center">

                    <div class="col shadow rounded p-3">

                        <h3>Contattaci:</h3>

                        <!-- EMAIL FORM -->
                        <form action="">

                            <div class="mb-2">
                                <label for="name" class="form-label"> <strong>Nome:</strong></label>
                                <input type="text" name="name" id="name" class="form-control" placeholder="Fabio Rossi"
                                    aria-describedby="nameHelper">
                                <small id="nameHelper" class="form-text">Inserisci il tuo nome</small>
                            </div>

                            <div class="mb-2">
                                <label for="email" class="form-label"><strong>Email:</strong></label>
                                <input type="email" class="form-control" name="email" id="email"
                                    aria-describedby="emailHelpId" placeholder="fabiorossi@email.it">
                                <small id="emailHelpId" class="form-text">Inserisci il tuo indirizzo e-mail</small>
                            </div>

                            <div class="mb-2">
                                <label for="phone" class="form-label"><strong>Numero di Telefono:</strong></label>
                                <input type="tel" name="phone" id="phone" class="form-control" placeholder="300 123 4567"
                                    aria-describedby="phoneHelper">
                                <small id="phoneHelper" class="form-text">Inserisci il tuo numero di telefono</small>
                            </div>

                            <div class="mb-2">
                                <label for="message" class="form-label"><strong>Messaggio:</strong></label>
                                <textarea class="form-control" name="message" id="message" rows="3"
                                    aria-describedby="messageHelpId"></textarea>
                                <small id="messageHelpId" class="form-text">Lasciaci un messaggio!</small>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </section>

    </section>
</template>

<style lang="scss" scoped></style>