import React, { Component } from "react";

import { Input } from "reactstrap";

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
  }

  onQuestTextEnter(searchText) {
    this.setState({
      searchText: searchText
    });
    this.props.onQuestTextChange(this.state.searchText);
  }

  render() {
    return (
      <div>
        <Input
          placeholder="Search More...."
          onChange={event => this.onQuestTextEnter(event.target.value)}
        />
      </div>
    );
  }
}
