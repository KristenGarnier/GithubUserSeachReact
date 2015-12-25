var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
    mixins: [Router.History],
    handleSubmit: function () {
        var username = this.refs.username.getDOMNode().value;
        this.refs.username.getDOMNode().value = '';
        this.history.pushState(null, `/profile/${username}`);
    },
    render: function () {
        return (
            <div className="col-md-12 ">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref="username"/>
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary"> Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = SearchGithub;
