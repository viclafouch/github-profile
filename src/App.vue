<template>
  <div id="app" class="container">
    <div class="title">
        <h1>Github Profile</h1>
    </div>
    <Search v-on:formSubmit="loadUser" v-bind:user="user" />

    <div v-if="notFound === null">load</div>
    <div v-else-if="notFound">Non trouvé</div>
    <div v-else-if="user.id">
        <Card :user="user" />
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Card from './components/Card.vue'
import User from './shared/User.class.js'

export default {
    name: 'app',
    methods: {
        loadUser: async function(value) {

            this.notFound = null;

            let url = new Request(`https://api.github.com/users/${value}`)

            await new Promise(resolve => setTimeout(resolve, 1000));

            fetch(url)
                .then(response => response.json() )
                .then(object => {
                    if (!object.hasOwnProperty('login')) throw new Error('NOT_FOUND')

                    this.notFound = false;
                    console.log(object);

                    this.user = new User(object);
                    console.log(this.user);

                })
                .catch(error => {
                    if (error.message === 'NOT_FOUND') this.notFound = true;
                })
        },
    },
    data() {
        return {
            notFound: false,
            user: new User()
        }
    },
    components: {
        Search,
        Card
    },
}
</script>

<style>

    h1 {
        padding: 20px 0;
        text-align: center;
    }

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

    body {
        background-color: #EEEEEE;
        font-family: 'Montserrat', sans-serif;
    }
</style>
