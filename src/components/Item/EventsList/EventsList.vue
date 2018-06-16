<template>
   <div>
        <div class="empty-section" v-if="events.length === 0">
            <span>No commits</span>
        </div>
        <div v-else v-for="event in events" :key="event.id">
            <Commit :commit="event" :user="user" />
        </div>
    </div>
</template>

<script>

import Commit from '../Commit/Commit.vue'

export default {
    name: 'EventsList',
    props: ['events', 'user'],
    components: {
        Commit
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>