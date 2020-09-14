import React from 'react';
import { Link } from '@reach/router';
// import './App.css';

const ColorWord = props => {
    return(
        <div>
            {/* <style>
                h1{
                    background-color: {props.color2};
                }
            </style> */}
            <h1 style={{backgroundColor: props.color2 }}>The word is <font color={props.color1}>{props.id}</font></h1>
            {/* <Link></Link> */}
        </div>
    )
}


export default ColorWord;