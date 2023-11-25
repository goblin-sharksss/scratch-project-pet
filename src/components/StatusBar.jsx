import React from 'react'

function StatusBar () {
    return( 
    <div>
        <span id="hunger">Hunger:</span>
        <progress value="35" max="100"></progress>
        <br />
        <span id="thirst">Thirst:</span>
        <progress value="35" max="100"></progress>

    </div>
    )



}

export default StatusBar