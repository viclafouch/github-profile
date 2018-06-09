<template>
  <div id="app" class="container">
    <div class="title">
        <h1>Github Profile</h1>
    </div>
    <Search v-on:formSubmit="loadUser" v-bind:user="user" v-bind:isLoading="isLoading" />

    <div v-if="notFound">Non trouvé</div>
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
            this.isLoading = true;

            await new Promise(resolve => setTimeout(resolve, 1000));

            let urls = [
                `https://api.github.com/users/${value}`,
                `https://api.github.com/users/${value}/repos`,
                `https://api.github.com/users/${value}/starred`
            ]

            let promises = urls.map(url => fetch(url).then(y => y.json()))

            Promise.all(promises)
                .then(results => {
                    let
                        user = results[0],
                        repos = results[1],
                        starred = results[2]

                        if (!user.hasOwnProperty('login')) throw new Error('NOT_FOUND')

                        repos = repos.map(repo => new Repo(repo));
                        starred = starred.map(repo => new Repo(repo));

                        repos = repos.sort((left, right) => this.$moment.utc(right.created_at).diff(this.$moment.utc(left.created_at))).slice(0, 5);

                        starred = starred.sort((left, right) => this.$moment.utc(right.created_at).diff(this.$moment.utc(left.created_at))).slice(0, 5);

                        this.notFound = false;
                        this.user = new User(user, repos, starred);
                        console.log(this.user);


                })
                .catch(e => { if (e.message === 'NOT_FOUND') this.notFound = true })
                .then(e => {
                    this.isLoading = false;
                })
        },
    },
    data() {
        return {
            notFound: false,
            user: new User(),
            isLoading: false
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
        background-color: #f1f1f1;
        color: #24292e;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    }
</style>
