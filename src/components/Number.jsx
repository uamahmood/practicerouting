import React from 'react';
import { Link } from '@reach/router';
import Word from './Word'

const Number = props => {
    return(
        <div>
            <h1>The number is {props.number}</h1>
        </div>
    )
}
   
export default Number;