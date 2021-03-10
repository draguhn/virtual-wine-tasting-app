import { useState } from 'react';

export default function PossibleFlavors({ updatePossibleFlavors, grape, wineDB }) {

  const [fruitFlavors, setFruitFlavors] = useState({});
  const [dryFruitFlavors, setDryFruitFlavors] = useState({});
  const [floralFlavors, setFloralFlavors] = useState({});
  const [herbalFlavors, setHerbalFlavors] = useState({});
  const [spiceFlavors, setSpiceFlavors] = useState({});
  const [earthFlavors, setEarthFlavors] = useState({});
  const [otherFlavors, setOtherFlavors] = useState({});

  function updateFruitFlavors(fruit) {
    if (fruitFlavors[fruit] === fruit) {
      delete fruitFlavors[fruit]
      setFruitFlavors(prev => ({
        ...prev
      }))
    } else {
      setFruitFlavors(prev => ({
        ...prev,
        [fruit]: fruit
      }))
    }
  }

  function updateDryFruitFlavors(dryFruit) {
    if (dryFruitFlavors[dryFruit] === dryFruit) {
      delete dryFruitFlavors[dryFruit]
      setDryFruitFlavors(prev => ({
        ...prev
      }))
    } else {
      setDryFruitFlavors(prev => ({
        ...prev,
        [dryFruit]: dryFruit
      }))
    }
  }

  function updateFloralFlavors(floral) {
    if (floralFlavors[floral] === floral) {
      delete floralFlavors[floral]
      setFloralFlavors(prev => ({
        ...prev
      }))
    } else {
      setFloralFlavors(prev => ({
        ...prev,
        [floral]: floral
      }))
    }
  }

  function updateHerbalFlavors(herbal) {
    if (herbalFlavors[herbal] === herbal) {
      delete herbalFlavors[herbal]
      setHerbalFlavors(prev => ({
        ...prev
      }))
    } else {
      setHerbalFlavors(prev => ({
        ...prev,
        [herbal]: herbal
      }))
    }
  }

  function updateSpiceFlavors(spice) {
    if (spiceFlavors[spice] === spice) {
      delete spiceFlavors[spice]
      setSpiceFlavors(prev => ({
        ...prev
      }))
    } else {
      setSpiceFlavors(prev => ({
        ...prev,
        [spice]: spice
      }))
    }
  }

  function updateEarthFlavors(earth) {
    if (earthFlavors[earth] === earth) {
      delete earthFlavors[earth]
      setEarthFlavors(prev => ({
        ...prev
      }))
    } else {
      setEarthFlavors(prev => ({
        ...prev,
        [earth]: earth
      }))
    }
  }

  function updateOtherFlavors(other) {
    if (otherFlavors[other] === other) {
      delete otherFlavors[other]
      setOtherFlavors(prev => ({
        ...prev
      }))
    } else {
      setOtherFlavors(prev => ({
        ...prev,
        [other]: other
      }))
    }
  }

  return (<div>

    <div className={"centered__container__possible__flavors"}>
      <div>
        <span className='possible__flavor__headline'>
          <h2>possible flavors in {grape}</h2>
        </span>
        <div className='possible__flavors'>
          {wineDB[grape].possibleFlavors.fruits.map((fruit) => <div
            onClick={() => updateFruitFlavors(fruit)}
            className={(fruitFlavors[fruit] === fruit ? 'toggled__flavor__box' : '') + ' flavor__box'} ><h6 className='fruit'>fruit flavor</h6>{fruit}</div>)}

          {wineDB[grape].possibleFlavors.dryFruits.map((dryFruit) => <div
            onClick={() => updateDryFruitFlavors(dryFruit)}
            className={(dryFruitFlavors[dryFruit] === dryFruit ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='dry__fruit'>dry fruit flavor</h6>{dryFruit}</div>)}

          {wineDB[grape].possibleFlavors.florals.map((floral) => <div
            onClick={() => updateFloralFlavors(floral)}
            className={(floralFlavors[floral] === floral ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='floral'>floral flavor</h6>{floral}</div>)}

          {wineDB[grape].possibleFlavors.herbs.map((herb) => <div
            onClick={() => updateHerbalFlavors(herb)}
            className={(herbalFlavors[herb] === herb ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='herbal'>herbal flavor</h6>{herb}</div>)}

          {wineDB[grape].possibleFlavors.spices.map((spice) => <div
            onClick={() => updateSpiceFlavors(spice)}
            className={(spiceFlavors[spice] === spice ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='spice'>spice flavor</h6>{spice}</div>)}

          {wineDB[grape].possibleFlavors.earthFlavors.map((earthFlavor) => <div
            onClick={() => updateEarthFlavors(earthFlavor)}
            className={(earthFlavors[earthFlavor] === earthFlavor ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='earth'>eath flavor</h6>{earthFlavor}</div>)}

          {wineDB[grape].possibleFlavors.others.map((other) => <div
            onClick={() => updateOtherFlavors(other)}
            className={(otherFlavors[other] === other ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='other'>other flavor</h6>{other}</div>)}
        </div>
        <button onClick={() =>
          updatePossibleFlavors({ fruitFlavors, dryFruitFlavors, floralFlavors, herbalFlavors, spiceFlavors, earthFlavors, otherFlavors, ratingCompleted: true })}
          className='possible__flavors__button'>next</button>
      </div>
    </div>
  </div>

  );
}

