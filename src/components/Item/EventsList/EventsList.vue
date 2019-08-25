<template>
  <div>
    <div v-if="events.length === 0" class="empty-section">
      <span>No commits</span>
    </div>
    <div v-for="event in events" v-else :key="event.id">
      <Commit :commit="event" :user="user" />
    </div>
  </div>
</template>

<script>
import Commit from '../Commit/Commit'

export default {
  components: {
    Commit
  },
  props: {
    events: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
