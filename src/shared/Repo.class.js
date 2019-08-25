import moment from 'moment'

export default class Repo {
  constructor(repo = {}) {
    this.id = repo.id || null
    this.name = repo.name || null
    this.language = repo.language || null
    this.description = repo.description || null
    this.email = repo.email || null
    this.created_at = moment(repo.created_at) || null
    this.updated_at = moment(repo.updated_at) || null
    this.html_url = repo.html_url || null
    this.language = repo.language || null
    this.homepage = repo.homepage || null
    this.full_name = repo.full_name || null
    this.stargazers_count = repo.stargazers_count || 0
    this.forks_count = repo.forks_count || 0
    this.watchers_count = repo.watchers_count || 0
    this.ownerLogin = repo.owner.login
  }
}
