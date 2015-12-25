import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import helpers from './utils/helpers';


var Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function () {
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },
    init: function () {
        var childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes');

        console.log(this.props.params.username);

        helpers.getGithubInfos(this.props.params.username)
            .then(function(data){
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                });
                console.log(data);
            }.bind(this));
    },
    componentDidMount: function(){
        this.ref = new Firebase('https://github-note-taker-kr.firebaseio.com/');
        this.init();
    },
    componentWillUnmount: function(){
        this.unbind('notes');
    },
    handleAddNote: function (newNote) {
        this.ref.child(this.props.params.username).set(this.state.notes.concat([newNote]));
    },
    componentWillReceiveProps: function () {
        this.init();
    },
    render: function () {
        var username = this.props.params.username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes} addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
});

module.exports = Profile;