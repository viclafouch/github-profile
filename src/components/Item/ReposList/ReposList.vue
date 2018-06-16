<template>
    <div>
         <div class="empty-section" v-if="repos.length === 0">
            <span v-if="type">No stars</span>
            <span v-else>No repositories</span>
        </div>
        <div v-for="repo in repos" :key="repo.id">
            <Repo :repo="repo" :user="user" :type="type"/>
        </div>
    </div>
</template>

<script>

import Repo from '../Repo/Repo.vue'

export default {
    name: 'ReposList',
    props: ['repos', 'user', 'type'],
    components: {
        Repo
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>