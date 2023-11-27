import React from 'react'
import StatusBar from './StatusBar'
import Dropdown from './Dropdown'

function PetPage () {
    return(
        <div id="pet-page">
        <Dropdown />
        <StatusBar />
        <picture>
            <source srcSet="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg" />
            <img src="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg" alt="shark" style={{width: '100px', height: '100px'}}/>
        </picture>
        </div>
    )
}

export default PetPage
