import React from 'react';
import Note from './Note';
import Notes from './Notes';

export default class App extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      notes: [{
        task: 'Learn webpacks'
      }, {
        task: 'Learn React'
      }, {
        task: 'Do laundry'
      }]
    };
  }
	
	
	render() {
		var notes = this.state.notes;
		return (
		  <div>
			<button onClick= {()=>this.addItem()}> + </button>
			<Notes items = {notes}
			onEdit = {(i, task) => this.itemEdited(i, task)} 
			removeItem = {(i) => this.removeItem(i)} 
			 />

			</div>
			);	
	}
	
	itemEdited(i, task) {
    var notes = this.state.notes;

    if(task) {
      notes[i].task = task;
    }
    else {
      notes = notes.slice(0, i).concat(notes.slice(i + 1));
    }

    this.setState({
      notes: notes
    });
  }


	addItem() {
		this.setState({
		notes : this.state.notes.concat([{
			task : 'New Task'
		}])
		
		});
	}

	removeItem(i) {
	var notes = this.state.notes;
	notes = notes.slice(0, i).concat(notes.slice(i + 1));
	this.setState({
		notes : notes
	});
	}
}