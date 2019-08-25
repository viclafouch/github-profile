<template>
  <div>
    <div v-if="repos.length === 0" class="empty-section">
      <span v-if="type">No stars</span>
      <span v-else>No repositories</span>
    </div>
    <div v-for="repo in repos" :key="repo.id">
      <Repo :repo="repo" :user="user" :type="type" />
    </div>
  </div>
</template>

<script>
import Repo from '../Repo/Repo.vue'

export default {
  components: {
    Repo
  },
  props: {
    repos: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
