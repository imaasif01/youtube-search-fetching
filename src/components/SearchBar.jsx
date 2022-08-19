import React, { Component } from "react";
import "./Styles.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
    };
    this.inputRef = React.createRef();
  }
  onHandlerChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  componentDidMount() {
    this.inputRef.current.focus();
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    // todo: Make sure we call
    this.props.onFormSubmit(this.state.term);
    // callback from parent component
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label"> video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onHandlerChange}
              ref={this.inputRef}
              placeholder="Search videos"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
