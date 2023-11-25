import React from 'react'

function Form() {
   return(
   <form id="create pet">
   
        <label htmlFor="name">Pet's name</label>
        <input type="text" id="name"/> 

        
        <picture>
            <source srcSet="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg" />
            <img src="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg" alt="shark" style={{width: '48px', height: '48px'}}/>
        </picture>
        <label htmlFor="pet1">Pet 1</label>
        <input type="radio" id="pet1" name="petName" value="pet1"/> 

        <picture>
            <source srcSet="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg"/>
            <img src="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg" alt="shark" style={{width: '48px', height: '48px'}}/>

        </picture>
        <label htmlFor="pet2">Pet 2</label>
        <input type="radio" id="pet2" name="petName" value="pet2"/>
       
        <picture>
            <source srcSet="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg"/>
            <img src="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg" alt="shark" style={{width: '48px', height: '48px'}}/>
            </picture>
        <label htmlFor="pet3">Pet 3</label>
        <input type="radio" id="pet3" name="petName" value="pet3"/>

        <button>Continue</button>
    </form>

    )};

export default Form;