import React from 'react';

import React from 'react'
//    event.preventDefault();
function Form() {
  
    function handleContinue (e) {
        //get input from name input
        e.preventDefault();
        const inputName = document.getElementById('name').value;
        console.log('inputName: ', inputName);
        let petPicture = 1;
        //get input from whichever picture is chosen
        // if (document.getElementById('pet1')) petPicture = 1;
        // if (document.getElementById('pet2')) petPicture = 2;
        // if (document.getElementById('pet3')) petPicture = 3;
        
        //send this data on POST request body
        fetch('http://localhost:3000/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: {name: inputName, picture: petPicture}
            
        })
        //THEN invoke react router for PetPage
            .then(() => {
                fetch('http://localhost:3000/create/pets', {
                    method: 'GET',
                    mode: 'cors'
                })
            })
            .catch((error) => console.log('this is not working', error))
    }
  
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

        <div id='pet-box'>
          <picture>
            <source srcSet='https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg' />
            <img
              src='https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg'
              alt='shark'
              style={{ width: '48px', height: '48px' }}
            />
          </picture>
          <label htmlFor='pet2'>Pet 2</label>
          <input type='radio' id='pet2' name='petName' value='pet2' />
        </div>

        <div id='pet-box'>
          <picture>
            <source srcSet='https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg' />
            <img
              src='https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg'
              alt='shark'
              style={{ width: '48px', height: '48px' }}
            />
          </picture>
          <label htmlFor='pet3'>Pet 3</label>
          <input type='radio' id='pet3' name='petName' value='pet3' />
        </div>
      </fieldset>

        <button onClick={handleContinue}>Continue</button>
    </form>
  );
}

export default Form;
