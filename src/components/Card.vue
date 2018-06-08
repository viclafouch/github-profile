<template>
    <transition name="alert-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <div class="card">
            <header class="row">
                <img :src="user.avatar_url" class="avatar" alt="">
                <div class="field-container">
                    <h3>{{ user.name || 'No Name'}}</h3>
                    <p>{{ user.bio || 'No bio' }}</p>
                    <hr />
                    <div class="field-important">
                        <p><span class="label">Company :</span> {{ user.company || 'none'}}</p>
                        <p><span class="label">Followers :</span>&nbsp;<span class="counter">{{ user.followers || 0 }}</span></p>
                        <p><span class="label">Following :</span>&nbsp;<span class="counter">{{ user.following || 0}}</span></p>
                    </div>
                </div>
            </header>
        </div>
    </transition>
</template>

<script>

import User from '../shared/User.class.js'

export default {
    name: 'Card',
    props: ['user'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .card {
        padding: 10px;
        background: #FFFFFF;
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

    header img.avatar { height: 100%; border-radius: 6px !important;}

    @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

</style>