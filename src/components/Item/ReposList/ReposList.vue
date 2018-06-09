<template>
    <div>
        <article v-for="repo in repos" :key="repo.id">
            <div>
                <header>
                    <a :href="repo.html_url">
                        {{ repo.full_name }}
                    </a>
                    <button>Stars</button>
                </header>
            </div>
            {{ repo.name }}
        </article>
    </div>
</template>

<script>

export default {
    name: 'ReposList',
    props: ['repos', 'user'],
    created() {;
        console.log(this.repos)
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    article {
        margin-top: 8px !important;
        padding: 16px !important;
        background-color: #fff;
        border: 1px solid #d1d5da;
        border-radius: 3px;
    }

    article header {
        display: flex;
        justify-content: space-between
    }
</style>