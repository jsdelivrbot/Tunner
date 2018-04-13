import React from 'react';

import { Jumbotron } from 'reactstrap';

export class HeaderBar extends React.Component {
    constructor(){
        super();        
    }
    render() {
        return (
            <Jumbotron>
                <h1 className="display-3">
                    Video Tunner
                </h1>
            </Jumbotron>
        )
    }
}


