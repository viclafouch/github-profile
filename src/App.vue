<template>
  <div id="app" class="container">
    <div class="title">
      <h1>Github Profile</h1>
    </div>
    <Search :is-loading="isLoading" @formSubmit="loadUser" />
    <div v-if="notFound" class="notFound">
      <font-awesome-icon :icon="frown" size="10x" />
      <p>Sorry, not found</p>
    </div>
    <transition name="alert-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
      <Card v-if="user" :key="user.id" :user="user" />
    </transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import Search from './components/Search'
import Card from './components/Card'
import User from './shared/User.class'
import Repo from './shared/Repo.class'
import PushEvent from './shared/PushEvent.class'

export default {
  components: {
    Search,
    Card,
    FontAwesomeIcon
  },
  data() {
    return {
      notFound: false,
      user: null,
      isLoading: false
    }
  },
  computed: {
    frown() {
      return faFrown
    }
  },
  methods: {
    async loadUser(value) {
      this.notFound = false
      if (value.trim() === '') {
        this.user = null
        return
      }

      try {
        this.isLoading = true
        await new Promise(resolve => setTimeout(resolve, 500))
        const urls = [
          `https://api.github.com/users/${value}`,
          `https://api.github.com/users/${value}/repos`,
          `https://api.github.com/users/${value}/starred`,
          `https://api.github.com/users/${value}/events`
        ]
        const promises = urls.map(url => fetch(url).then(response => response.json()))
        const results = await Promise.all(promises)

        const user = results[0]
        let repos = results[1]
        let starred = results[2]
        const events = results[3]

        if (!user.login) throw new Error('NOT_FOUND')

        repos = repos.map(repo => new Repo(repo))
        starred = starred.map(repo => new Repo(repo))
        let pushEvents = events.filter(e => e.type === 'PushEvent').map(e => new PushEvent(e))

        repos = repos
          .sort((left, right) => this.$moment.utc(right.created_at).diff(this.$moment.utc(left.created_at)))
          .slice(0, 5)

        starred = starred
          .sort((left, right) => this.$moment.utc(right.created_at).diff(this.$moment.utc(left.created_at)))
          .slice(0, 5)

        pushEvents = pushEvents
          .sort((left, right) => this.$moment.utc(right.created_at).diff(this.$moment.utc(left.created_at)))
          .slice(0, 5)

        this.notFound = false
        this.user = new User(user, repos, starred, pushEvents)
      } catch (error) {
        this.notFound = error.message === 'NOT_FOUND'
        this.user = null
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

.empty-section {
  text-align: center;
}

h1 {
  padding: 20px 0;
  text-align: center;
}

body {
  background-color: #f1f1f1;
  color: #24292e;
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
}

.notFound {
  margin-top: 2em;
  text-align: center;
}

.notFound svg {
  color: #cecece;
}
.notFound p {
  margin: 10px 0;
  font-size: 18px;
}

.field-container > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

button {
  padding: 3px 10px !important;
  font-size: 12px;
  height: auto;
  color: #24292e;
  text-transform: none;
  line-height: 20px;
  color: #24292e;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
}

button:hover {
  background-color: #e6ebf1;
  background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
  background-position: -0.5em;
  border-color: rgba(27, 31, 35, 0.35);
}
</style>
