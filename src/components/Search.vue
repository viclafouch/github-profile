<template>
  <div class="search-container">
    <form @submit.prevent="search">
      <div class="field">
        <input v-model="value" name="search" autofocus placeholder="Search by login..." autocomplete="off" spellcheck="false" />
        <span v-show="isLoading" class="loader">
          <font-awesome-icon :icon="spinner" spin />
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    spinner() {
      return faSpinner
    }
  },
  watch: {
    value(val) {
      val && this.debouncedGetAnswer()
    }
  },
  created() {
    this.debouncedGetAnswer = this.$lodash.debounce(this.search, 500)
  },
  methods: {
    search() {
      this.$emit('formSubmit', this.value)
    }
  }
}
</script>

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
  color: #f0f0f0;
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
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
}
</style>
