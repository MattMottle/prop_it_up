import React, { useState } from 'react';


const Personcard = (props) => {
    const [ age, setAge ] = useState( props.initialAge )
    
    return(
        <div>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick= { (event) => setAge( age + 1)}> Happy Birthday { props.firstName }!</button>
        </div>
    )
}

export default Personcard