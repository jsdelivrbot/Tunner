import React, { Component } from 'react';

import { Input } from 'reactstrap';

export class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            seachText: ''
        }
    }

    onFieldChange(event) {
        this.setState({
            seachText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Input
                    placeholder="Search Vedio"
                    onChange={this.onFieldChange.bind(this)} />
                {this.state.seachText}
            </div>
        )
    }
}