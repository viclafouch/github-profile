import moment from 'moment'

export default class User {
  name = ''

  constructor(user = {}, repos = [], starred = [], events = []) {
    this.name = user.name || null
    this.id = user.id || null
    this.company = user.company || null
    this.avatar_url = user.avatar_url || null
    this.bio = user.bio || null
    this.email = user.email || null
    this.created_at = moment(user.created_at) || null
    this.followers = user.followers || null
    this.following = user.following || null
    this.html_url = user.html_url || null
    this.location = user.location || null
    this.login = user.login || null

    this.repos = repos
    this.starred = starred
    this.events = events
  }
}
