import alt from '../libs/alt';

import NoteActions from '../actions/NoteActions';

export default class NoteStore {
    constructor(actions: Object) {
    this.bindActions(actions);
    this.notes = [];
}
init(data) {
    this.setState(Array.isArray(data && data.notes) ? data : {
        notes: []
    })
}
create(task) {
    const notes = this.notes;
    this.setState({ notes : notes.concat({task}) });
}

update({id, task}) {
    const notes = this.notes;
    notes[id].task = task;
    this.setState({notes});
}
remove(id) {
    const notes = this.notes;
    this.setState({ notes: notes.slice(0, id).concat(notes.slice(id + 1)) });
}

}

export default alt.createStore(NoteStore); //creating our Note store