import React from 'react'

function Dropdown() {
return( 
    <div>
    <label htmlFor="dog-names">Choose a dog name:</label> 
    <select name="dog-names" id="dog-names"> 
    <option value="rigatoni">Rigatoni</option> 
    <option value="dave">Dave</option> 
    <option value="pumpernickel">Pumpernickel</option> 
    <option value="reeses">Reeses</option> 
    </select>
    </div>

)};

export default Dropdown;

