import moment from 'moment'
import Commit from './Commit.class';

export default class PushEvent {

    constructor(
        pushEvent
    ) {
        this.id = pushEvent.id || null
        this.created_at = moment(pushEvent.created_at) || null
        this.repo = pushEvent.repo || null
        this.commits = pushEvent.payload.commits.map(c => new Commit(c));
    }
}