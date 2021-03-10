import { useState } from "react";

export default function DominantFlavors({
  updateDominantFlavors,
  grape,
  wineDB,
}) {
  const [flavors, setFlavors] = useState({});

  function updateFlavors(flavor) {
    if (flavors[flavor]) {
      delete flavors[flavor];
      setFlavors((prev) => ({
        ...prev,
      }));
    } else {
      setFlavors((prev) => ({
        ...prev,
        [flavor]: flavor,
      }));
    }
  }

  return (<div>

    <div className={"centered__container__dominant__flavors"}>
      <span className="dominant__flavor__headline">
        <h2>dominant flavors in {grape}</h2>
      </span>
      <div className='container__and__button'>
        <div className="dominant__flavors__container">
          {wineDB[grape].dominantFlavors.map((flavor) => (
            <div onClick={() => updateFlavors(flavor)} className={(flavors[flavor] === flavor ? 'dominant__flavors__box__toggled' : 'dominant__flavors__box')}>{flavor}</div>

          ))}

        </div>
        <button
          className='dominant__flavor__btn'
          onClick={() =>
            updateDominantFlavors({ ratingCompleted: true, flavors: flavors })
          }
        >
          next
        </button>
      </div>
    </div>
  </div>
  );
}
