import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {

    const [color, setColor] = useState('white');

  return <div>
    {color}

    <button onClick={()=> setColor('black')}>change to black</button>
    <button onClick={()=> setColor('white')}>change to white</button>
    
  </div>;
}

export default ColorBox;
