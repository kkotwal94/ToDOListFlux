import AltContainer from 'alt/AltContainer';
import React from 'react';

import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import persist from '../decorators/persist';
import {storage, storageName, getInitialData} from '../libs/storage';


@persist(storage, storageName, () => JSON.parse(alt.takeSnapshot()))
export default class App extends React.Component {
	constructor(props) {
    super();

   
	LaneActions.init(storage.get('LaneStore'));
	
  }

 
	
	render() {
	
		return (
		  <div>
			<button onClick= {()=>this.addLane()}> + </button>
			<AltContainer
				stores={[LaneStore]}
				inject={ {
				items: () => LaneStore.getState().lanes || []
				} }
				>
				<Lanes />
			</AltContainer>
			</div>
			);
			}
	
	addLane() {
		LaneActions.create('New Lane');
	}
	
}
