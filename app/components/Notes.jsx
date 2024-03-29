﻿import React from 'react';
import Editable from './Editable';

export default class Notes extends React.Component {
  constructor(props: {
    items: Array;
    onEdit: Function;
  }) {
    super(props);
  }
  render() {
    var notes = this.props.items;

    return (
      <ul className='notes'>{notes.map((note, i) =>
        <li className='note' key={'note' + i}>
          <Editable
            value={note.task}
            onEdit={this.props.onEdit.bind(null, i)} />
        </li>
      )}</ul>
    );
  }
}