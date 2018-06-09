import moment from 'moment'

export default class Repo {

    constructor(
        repo = {}
    ) {
        this.id = repo.id || null
        this.name = repo.name || null
        this.language = repo.language || null
        this.description = repo.description || null
        this.forks_count = repo.forks_count || null
        this.created_at = repo.created_at || null
        this.email = repo.email || null
        this.created_at = moment(repo.created_at) || null
        this.html_url = repo.html_url || null
        this.homepage = repo.homepage || null
        this.watchers_count = repo.watchers_count || null
        this.open_issues_count = repo.open_issues_count || null
        this.full_name = repo.full_name || null
    }
}