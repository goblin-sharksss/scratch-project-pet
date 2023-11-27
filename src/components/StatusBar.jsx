import React, { useState, useEffect } from 'react';

function StatusBar() {
  // set states for both hunger and thirst
  const [hunger, setHunger] = useState(0);
  const [thirst, setThirst] = useState(0);
  // handle feed and hydrate button click
  const handleFeedButton = () => {
    setHunger((prevHunger) => Math.min(prevHunger + 10, 100));
    updateServerValues({ hunger: hunger + 10 }, thirst);
  };

  const handleHydrateButton = () => {
    setThirst((prevThirst) => Math.min(prevThirst + 10), 100);
    updateServerValues(hunger, { thirst: thirst + 10 });
  };

  // useEffect
  // fetch the initial values from the server/database
  // use the fetched value to update the state
  // decrement of hunger and thirst over time
  useEffect(() => {
    fetch('http://localhost:3000/createRouter/pets')
      .then((data) => {
        data.json();
      })
      .then((data) => {
        setHunger(data.hunger);
        setThirst(data.thirst);
      })
      .catch((error) => console.log('Error fetching values:', error));

    const decreaseHungerThirst = setInterval(() => {
      setHunger((prevHunger) => Math.max(prevHunger - 5), 0);
      setThirst((prevThirst) => Math.max(prevThirst - 5), 0);
    }, 5000);

    return () => clearInterval(decreaseHungerThirst);
  }, []);

  // update the server side values
  const updateServerValues = (id, updatedValues) => {
    fetch(`http://localhost:3000/createRouter/pets/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedValues),
    });
  };
  // render

  return (
    <div>
      <>
        <span id='hunger'>Hunger:</span>
        <progress value={hunger} max='100'></progress>
        <br />
        <button onClick={handleFeedButton}>Feed</button>
      </>
      <>
        <span id='thirst'>Thirst:</span>
        <progress value={thirst} max='100'></progress>
        <br />
        <button onClick={handleHydrateButton}>Hydrate</button>
      </>
    </div>
  );
}

export default StatusBar;
