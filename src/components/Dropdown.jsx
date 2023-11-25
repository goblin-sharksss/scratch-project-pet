import React from 'react'

function Dropdown() {
return( 
    <div>
    <label htmlFor="dog-names">Select another pet</label> 
    <select name="pet-names" id="pet-names"> 
    <option value="Nurse Shark">Nurse Shark</option> 
    <option value="Whale Shark">Whale Shark</option> 
    <option value="Hammerhead Shark">Hammerhead Shark</option> 
    <option value="Great White Shark">Great White Shark</option> 
    </select>
    </div>

)};

export default Dropdown;

