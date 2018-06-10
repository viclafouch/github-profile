<template>
    <div class="search-container">
        <form @submit.prevent="search">
            <div class="field">
                <input name="search" autofocus placeholder="Search..." autocomplete="off" spellcheck="false" v-model="input" />
                <span v-if="isLoading" class="loader">
                    <font-awesome-icon :icon="spinner" spin />
                </span>
            </div>
        </form>
    </div>
</template>

<script>

import Card from './Card.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

export default {
    name: 'Search',
    components: {
        Card,
        FontAwesomeIcon,
    },
    computed: {
        spinner () {
            return faSpinner
        },
    },
    props: ['isLoading'],
    data() {
        return {
            input: ''
        }
    },
    methods: {
        search() {
            this.$emit('formSubmit', this.input)
        }
    },
    created: function () {
        this.debouncedGetAnswer = this.$lodash.debounce(this.search, 500)
    },
    watch: {
        input: function () {
            this.input && this.debouncedGetAnswer();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    form {
        margin-bottom: 1.5rem;
    }

    input {
        width: 100%;
        border: 2px solid transparent;
        padding: 20px;
        padding-right: 70px;
        box-sizing: border-box;
        font-size: 1.3em;
        outline: none;
        background-color: #323333;
        color: #F0F0F0;
        margin: 0;
        transition: border-color 0.3s;
    }

    input:focus {
        border-color: #1155cc;
    }

    .field {
        position: relative;
    }

    .loader {
        position: absolute;
        right: 20px;
        color: #FFF;
        top: 50%;
        transform: translateY(-50%);
    }
</style>