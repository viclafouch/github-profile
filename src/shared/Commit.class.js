export default class Commit {
  constructor(commit = {}) {
    this.url = commit.url || null
    this.message = commit.message || null
    this.sha = commit.sha || null
  }
}
