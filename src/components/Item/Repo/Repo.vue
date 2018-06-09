<template>
    <article>
        <div>
            <header>
                <h3>
                    <a :href="repo.html_url">
                        <span>{{ user.login }} /</span>
                        {{ repo.name }}
                    </a>
                </h3>
                <button>Stars <font-awesome-icon :icon="star" /></button>
            </header>
            <div class="desc-container mgi-0">
                <p>{{ repo.description }}</p>
            </div>
            <footer>
                <a :href="repo.html_url + '/stargazers'"><font-awesome-icon :icon="star" /> {{ repo.stargazers_count }}</a>
                <a :href="repo.html_url + '/network'"><font-awesome-icon :icon="network" /> {{ repo.stargazers_count }}</a>
                <a v-if="repo.homepage" :href="repo.homepage">
                    <font-awesome-icon :icon="link" /> Project URL
                </a>
            </footer>
        </div>
    </article>

</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'

export default {
    name: 'Repo',
    props: ['repo', 'user'],
    created() {
        console.log(this.repo)
    },
    computed: {
        star () {
            return faStar
        },
        network () {
            return faCodeBranch
        },
        link () {
            return faLink
        }
    },

    components: {
        FontAwesomeIcon
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    article {
        margin-top: 8px !important;
        padding: 16px !important;
        background-color: #fff;
        border-bottom: 1px #e1e4e8 solid !important;
        border-radius: 3px;
    }

    article header {
        display: flex;
        justify-content: space-between
    }

    article header h3 {
        font-size: 20px;
        font-weight: 600;
    }

    article header h3 a {
        text-decoration: none;
        color: #0366d6
    }

    article header h3 span:first-child {
        font-weight: 400 !important;
    }

     article header h3 a:hover {
        text-decoration: underline
     }

    article header button {
        padding: 3px 10px;
        font-size: 12px;
        height: auto;
        text-transform: none;
        line-height: 20px;
        color: #24292e;
        background-color: #eff3f6;
        background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    }

    article .desc-container {
        max-width: 500px;
        font-size: 14px;
    }

    article footer {
        margin-top: 9px!important;
        font-size: 12px!important;
        color: #586069 !important;
    }

    article footer a {
       margin-right: 16px;
       text-decoration: none;
       color: inherit;
    }
    article footer a:hover {
       color: #0366d6 !important;
    }
</style>