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
import Repo from './shared/Repo.class.js'

export default {
    name: 'app',
    methods: {
        loadUser: async function(value) {

            this.notFound = null;

            let urls = [
                `https://api.github.com/users/${value}`,
                `https://api.github.com/users/${value}/repos`
            ]

            let promises = urls.map(url => fetch(url).then(y => y.json()))

            Promise.all(promises)
                .then(results => {
                    let
                        user = results[0],
                        repos = results[1]

                        if (!user.hasOwnProperty('login')) throw new Error('NOT_FOUND')

                        repos = repos.map(repo => new Repo(repo));


                        this.notFound = false;
                        this.user = new User(user, repos);
                        console.log(this.user);


                })
                .catch(e => { if (error.message === 'NOT_FOUND') this.notFound = true })
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
