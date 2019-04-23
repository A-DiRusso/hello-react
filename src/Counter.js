import React from 'react';



// Do this instead

//If a component needs to remember stuff then you need 
// A Class
class Counter extends React.Component {
    //define how the instance gets created
    // including initial value
    constructor(props) {
        // activate the super powers from
        //react.component
        super(props);
        //is always an object
        //where the component stores key value pairs
        this.state = {
            number: 0
        };
    }
    // do more set up when the 
    //component gets drawn to the page
    componentDidMount() {
        console.log("hi, I am you console.log");
        //YOU CAN NOT MUTATE STATE DIRECTLY
        //this.state.number++ NONONONONONONOOOOOOO
        
        setInterval(() => {
            //safely change state using this.setState()
            //it accepts an object with updated key/value pairs
            this.setState({ number: this.state.number + 1 })
        }, 1000);
        
    }
    // define what will be drawn with method
    render() {
        return (
            <h2>
                { this.state.number }
            </h2>
        )
    }
}


// BAD
// let badBadBad = 13;// don't do it this way
// setInterval(() => {badBadBad++}, 1000);// don't do it this way
// function Counter(props) {
//     return (
//         <h2>
//             { props.number }
//         </h2>
//     )
// }

export default Counter;