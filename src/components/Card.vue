<template>
    <transition name="alert-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <div class="card">
            <div class="card-body">
                <header class="row">
                    <img :src="user.avatar_url" class="avatar" alt="">
                    <div class="field-container">
                        <h3>{{ user.name || 'No Name'}}</h3>
                        <p>{{ user.bio || 'No bio' }}</p>
                        <hr class="intermediaire" />
                        <div class="field-important">
                            <p><span class="label bold">Company :</span> {{ user.company || 'none'}}</p>
                            <p><span class="label bold">Followers :</span>&nbsp;<span class="counter">{{ user.followers || 0 }}</span></p>
                            <p><span class="label bold">Following :</span>&nbsp;<span class="counter">{{ user.following || 0}}</span></p>
                        </div>
                    </div>
                </header>
            </div>
            <hr/>
            <div class="card-body row menu-container">
                <div v-bind:class="{ active: activeMenu === 0 }">
                    <span v-on:click="activeMenu = 0">Last repositories</span>
                </div>
                <div v-bind:class="{ active: activeMenu === 1 }">
                    <span v-on:click="activeMenu = 1">Last stars</span>
                </div>
                <div>
                    <span>Last Datas</span>
                </div>
            </div>
            <hr/>
            <div class="card-body row container">
                <ReposList v-if="this.activeMenu === 0" :repos="user.repos" :user="user"/>
                <ReposList v-if="this.activeMenu === 1" :repos="user.starred" :user="user"/>
            </div>
        </div>
    </transition>
</template>

<script>

import User from '../shared/User.class.js'
import ReposList from './Item/ReposList/ReposList.vue'

export default {
    name: 'Card',
    props: ['user'],
    components: {
        ReposList,
    },
    computed: {

    },
    data() {
        return {
            activeMenu: 0
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .card {
        background: #FFFFFF;
        margin: 20px 0;
        border: 2px solid #cecece;
    }

    .card-body {
        background: #FFFFFF;
        padding: 10px;
    }

    .menu-container {
        display: flex;
    }

    .menu-container > div {
        flex: 1;
        text-align: center;
    }

    hr:not(.intermediaire) {
        margin: 0!important;
        border: 1px solid #cecece;
    }

    hr {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .field-container {
        flex: 1;
        margin-left: 20px;
    }

    header {
        display: flex;
        height: 270px;
    }

    .field-important p {
        margin-bottom: 10px;
    }

    p { margin: 0; }

    .counter {
        display: inline-block;
        padding: 2px 5px;
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
        color: #586069;
        background-color: rgba(27,31,35,0.08);
        border-radius: 20px;
    }

    .menu-container > div span {
        color: #586069;
        opacity: 0.70;
        cursor: default;
    }
    .menu-container > div.active span {
        color: #000!important;
        opacity: 1;
    }

    header img.avatar { height: 100%; border-radius: 6px !important;}

    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

</style>