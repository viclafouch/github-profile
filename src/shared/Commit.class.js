export default class Commit {
    constructor(
        commit = {}
    ) {
        this.url = commit.url
        this.message = commit.message
    }
}