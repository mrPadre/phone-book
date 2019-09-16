import React, { Component } from 'react';

class CardOption extends Component {
    constructor (props) {
        super (props);
        this.state = {
            options: [] ,
            i: 0
        }

    }
    changeOption = () => {
        this.setState({options: this.props.cardOptions})
    };

    render() {

        return (
            <div className="option__body">
                <img src={this.state.options.avatar} className="option__avatar" alt = '' />
                <div className="option__info">
                    {this.state.options.name}
                    {this.state.options.phone}
                    {this.state.options.email}
                </div>
                <div className="option__interests">
                    {this.state.options.interests}
                </div>
            </div>
        )
    }
}

export default CardOption;