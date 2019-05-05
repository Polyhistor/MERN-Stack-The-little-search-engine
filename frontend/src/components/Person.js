import React from "react";
import { connect } from "react-redux";

const Person = props => {
  // checking to see if there is no result and showing the relevant message
  if (props.people.data.length === 0) {
    return (
      <div
        style={{ textAlign: "center", padding: "60px" }}
        className="container"
      >
        <h1 className="ui header">No results for the query</h1>
      </div>
    );
  } else {
    // populating the list
    return props.people.data.map(person => {
      return (
        <div key={person._id} className="ui card">
          <div className="content">
            <h3 className="header">{person.name}</h3>
            <div className="meta">
              <span className="date">{person.age}</span>
            </div>
          </div>
          <div className="extra content">
            <i className="user icon" />
            {person.gender}
          </div>
        </div>
      );
    });
  }
};

const mapStatetoProps = ({ people }) => {
  return { people };
};

export default connect(mapStatetoProps)(Person);
