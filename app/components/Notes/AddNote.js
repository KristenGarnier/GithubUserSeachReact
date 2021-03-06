import React from 'react';

class AddNote extends React.Component {
    handleSubmit() {
        var note = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(note);
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="add new note"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}> Submit
                    </button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default AddNote;
