import React from 'react';

class DecrementCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                    <button
                        onClick={this._decrementNumber}
                    >-</button>
            </div>
        )
    }
    _decrementNumber = () => {
        this.setState({
            number: this.state.number - 1
        })
        
    }
}

export default DecrementCounter;