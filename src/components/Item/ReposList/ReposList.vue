<template>
    <div>
        <div v-for="repo in repos" :key="repo.id">
            <Repo :repo="repo" :user="user" />
        </div>
    </div>
</template>

<script>

import Repo from '../Repo/Repo.vue'

export default {
    name: 'ReposList',
    props: ['repos', 'user'],
    created() {
        console.log(this.repos)
    },

    components: {
        Repo
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>