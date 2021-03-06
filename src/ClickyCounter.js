import React from 'react';

class ClickyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //the OR operator shorter version of turnerary
            //no need to use this.props becauxe we are inside the construtor
            //that creates the 'this' in the first place
            number: props.startAt || 0
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.number}</h2>
                    <button 
                        onClick={this._incrementNumber}
                    >+</button>
            </div>

        )
        
    }

    _incrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
}

export default ClickyCounter;