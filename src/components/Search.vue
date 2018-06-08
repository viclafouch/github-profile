<template>
  <div class="search-container">
    <form @submit.prevent="search">
        <input name="search" placeholder="Search..." autocomplete="off" spellcheck="false" v-model="input" />
    </form>
  </div>
</template>

<script>

import Card from './Card.vue'

export default {
    name: 'Search',
    components: {
        Card,
    },
    props: ['user'],
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

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    outline: none;
    background-color: #323333;
    color: #F0F0F0;
  }
</style>