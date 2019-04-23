// Your custom components always are caplitalized
//#1 Import React
import React from 'react';

function excitedName(aName) {
    return aName.toUpperCase();
}

//#3 declare your componenet
function Greet(props) {
    //Every component must return a React Element
    return (
        <h1>    
            Hello {props.whom ? excitedName(props.whom) : excitedName('you')}! 
        </h1>
    );
}


//#2 Export your component
export default Greet; //make the file name match the component name
//By default if someone imports from Greet they should recieve our Greet component