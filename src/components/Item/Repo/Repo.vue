<template>
  <article class="repo">
    <div>
      <header>
        <h3>
          <a :href="repo.html_url">
            <span>{{ type !== 'star' ? user.login : repo.ownerLogin }} /</span>
            {{ repo.name }}
          </a>
        </h3>
        <a :href="repo.html_url"
          ><button><font-awesome-icon :icon="star" /> Star</button>
        </a>
      </header>
      <div class="desc-container mgi-0">
        <p>{{ repo.description }}</p>
      </div>
      <footer>
        <a :href="repo.html_url + '/stargazers'"><font-awesome-icon :icon="star" /> {{ repo.stargazers_count }}</a>
        <a :href="repo.html_url + '/network'"><font-awesome-icon :icon="network" /> {{ repo.forks_count }}</a>
        <a v-if="repo.homepage" :href="repo.homepage"> <font-awesome-icon :icon="link" /> Project URL </a>
        <span>Updated {{ repo.updated_at.fromNow() }} </span>
      </footer>
    </div>
  </article>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'
import faEye from '@fortawesome/fontawesome-free-solid/faEye'

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    repo: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    star() {
      return faStar
    },
    network() {
      return faCodeBranch
    },
    link() {
      return faLink
    },
    eye() {
      return faEye
    }
  }
}
</script>

<style scoped>
article.repo {
  margin-top: 8px !important;
  padding: 16px !important;
  background-color: #fff;
  border-bottom: 1px #e1e4e8 solid !important;
  border-radius: 3px;
}

article.repo header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

article.repo header h3 {
  font-size: 20px;
  font-weight: 600;
}

article.repo header h3 a {
  text-decoration: none;
  color: #0366d6;
}

article.repo header h3 span:first-child {
  font-weight: 400 !important;
}

article.repo header h3 a:hover {
  text-decoration: underline;
}

article.repo .desc-container {
  max-width: 500px;
  font-size: 14px;
}

article.repo footer {
  margin-top: 9px !important;
  font-size: 12px !important;
  color: #586069 !important;
}

article.repo footer a {
  margin-right: 16px;
  text-decoration: none;
  color: inherit;
}
article.repo footer a:hover {
  color: #0366d6 !important;
}
</style>
