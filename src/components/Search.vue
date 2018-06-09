<template>
  <div class="search-container">
    <form @submit.prevent="search">
        <div class="field">
            <input name="search" autofocus placeholder="Search..." autocomplete="off" spellcheck="false" v-model="input" />
            <span v-if="isLoading" class="loader">
                <font-awesome-icon :icon="star" spin />
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
        star () {
            return faSpinner
        },
    },
    props: ['user', 'isLoading'],
    data() {
        return {
            input: this.user.name
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
        input: function (newQuestion, oldQuestion) {
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
        width: calc(100% - 40px);
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        outline: none;
        background-color: #323333;
        color: #F0F0F0;
        margin: 0;
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