import React from 'react';
import { Link } from '@reach/router';

const Word = props => {
    return(
        <div>
        <h1>The word is {props.word}</h1>
        {/* <Link></Link> */}
    </div>
)
}


export default Word;