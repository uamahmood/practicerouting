import React from 'react';
import { Link } from '@reach/router';
import Word from './Word' 
import Number from './Number' 

const NumWord = props => {
    if(isNaN(+props.id) === false){
        console.log(isNaN(+props.id));
        console.log( props.id );
        return(
        <div>
            <Number number={props.id} />
        </div>
    )
    }
    else{
        console.log(isNaN(+"{props.id}"));
        return(
            <div>
                <Word word={props.id} />
            </div>
        )
    }
}

export default NumWord;