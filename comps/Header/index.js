//use the same component to change the fontSize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => <div 
    style={{
        // backgroundColor:color, 
        fontSize}}
    className='header'>
    <h1 onMouseOver={onMouseOver} style={{fontSize:fontSize}}>{text}</h1>
</div>

Header.defaultProps = {
    text: "Header",
    fontSize: 30,
    // color: "#ABC",
    // onMouseOver: MouseOver
}

export default Header;

// function MouseOver() {
//     alert("mouse is over");
// }