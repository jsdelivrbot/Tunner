import React from "react";

import { Jumbotron } from "reactstrap";

export class HeaderBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Jumbotron className="header-edges">
        <h1 className="display-2">Video Quest</h1>
        <h3>- Dipali Biradar</h3>
      </Jumbotron>
    );
  }
}
