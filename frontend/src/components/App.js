import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import WithStyles from "./Loader";
import Person from "./Person";

// using class based components because we will use lifecycle methods
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: ""
    };
    this.baseState = this.state;
  }

  // dispatching action after render() method
  componentDidMount() {
    this.props.fetchPeople();
  }

  resetForm = () => {
    this.setState(this.baseState);
  };

  // making a controlled component
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // submitting the form
  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchPeople({ ...this.state });
  };

  // making sure that is is aware of what's happening
  renderContent() {
    switch (this.props.people) {
      case null:
        return <WithStyles />;
      default:
        return this.renderList();
    }
  }

  // rendering the list
  renderList() {
    return <Person />;
  }

  render() {
    // the form, ideally could have it's own component
    return (
      <div className="ui container">
        <div className="row" />
        <div className="row">
          <div className="ui two column centered grid">
            <div className="column">
              <div className="ui form">
                <form className="ui form" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <select
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                    >
                      <option value="">Select Age Range</option>
                      <option value="_gte=20">Above 20</option>
                      <option value="_lt=20">Below 20</option>
                    </select>
                  </div>
                  <div className="field">
                    <select
                      className="ui fluid dropdown"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  </div>
                  <div className="ui buttons">
                    <button type="submit" className="ui positive button active">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="ui link cards">{this.renderContent()}</div>
      </div>
    );
  }
}

// getting the store and deconstructing its query
const mapStatetoProps = ({ people }) => {
  return { people };
};

// mapping react to redux
export default connect(
  mapStatetoProps,
  actions
)(App);
