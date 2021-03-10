import { useState } from "react";
import FruitRating from "../wineProfile/FruitRating";
import BodyRating from "../wineProfile/BodyRating";
import TanninsRating from "../wineProfile/TanninsRating";
import AcidityRating from "../wineProfile/AcidityRating";
import DominantFlavors from "../wineFlavors/DominantFlavors";
import PossibleFlavors from "../wineFlavors/PossibleFlavors";
import WineDB from "../wineDB/WineDB";
import OverallRating from "../wineOverallRating/OverallRating";

export default function WineTasting({ user }) {

  const [startTasting, setStartTasting] = useState(false);
  const [winery, setWinery] = useState("");
  const [year, setYear] = useState("");
  const [grape, setGrape] = useState("");
  const [error, setError] = useState(false);
  const [body, setBody] = useState(0);
  const [fruit, setFruit] = useState(0);
  const [tannins, setTannins] = useState(0);
  const [acidity, setAcidity] = useState(0);
  const [possibleFlavors, setPossibleFlavors] = useState({});
  const [dominantFlavors, setDominantFlavors] = useState([]);
  const [wineList, setWineList] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    if (winery && year && grape) {
      setWinery(winery);
      setYear(year);
      setGrape(grape.toLowerCase());
      setStartTasting(true);
    } else setError(true);
  }

  function handleChangeWinery(event) {
    if (error) setError(false);
    setWinery(event.target.value);
  }

  function handleChangeYear(event) {
    if (error) setError(false);
    setYear(event.target.value);
  }

  function handleChangeGrape(event) {
    if (error) setError(false);
    setGrape(event.target.value);
  }

  function showRatingOfFruit() {
    return startTasting === true && fruit === 0;
  }

  function showRatingOfAcidity() {
    return fruit !== 0 && acidity === 0;
  }

  function showRatingOfTannins() {
    return acidity !== 0 && tannins === 0;
  }

  function showRatingOfWineBody() {
    return tannins !== 0 && body === 0;
  }

  function updateBody(event, value) {
    setBody(value);
  }

  function updateFruit(event, value) {
    setFruit(value);
  }

  function updateTannins(event, value) {
    setTannins(value);
  }

  function updateAcidity(event, value) {
    setAcidity(value);
  }

  function updateDominantFlavors(flavors) {
    setDominantFlavors(flavors);
  }

  function updatePossibleFlavors(flavors) {
    setPossibleFlavors(flavors);
  }

  function submitRating(value) {

    let arrDominantFlavors = Object.values(dominantFlavors.flavors);
    // PossibleFlavors(Nested Object) will be transformed in an 1 dimensional Array
    let arrPossibleFlavors = (Object.values(possibleFlavors).filter(value => Object.keys(value).length !== 0).map(element => Object.values(element)));

    setWineList(
      {
        userId: user.userId,
        winery: winery,
        year: year,
        grape: grape,
        fruit: fruit,
        acidity: acidity,
        tannins: tannins,
        body: body,
        dominantFlavors: arrDominantFlavors,
        arrPossibleFlavors: arrPossibleFlavors,
        // possibleFlavors: possibleFlavors,
        overallRating: value,
      }
    )
  }

  return (
    <div>
      {startTasting === false ? (<div className='centered__container__start__tasting'>
        {console.log("render happening")}
        <div className="form__container">

          <form onSubmit={handleSubmit}>
            <input
              className="start__tasting__input"
              type="text"
              value={winery}
              onChange={handleChangeWinery}
              placeholder="Type in name of winery ..."
            ></input>
            <input
              className="start__tasting__input"
              type='number'
              min={1930}
              max={2030}
              value={year}
              onChange={handleChangeYear}
              placeholder="Type in year ..."
            ></input>
            <select value={grape} onChange={handleChangeGrape} name="grape" className="start__tasting__input">
              <option disabled={true} value="">select grape variety</option>
              <option name='malbec'>Malbec</option>
              <option name='merlot'>Merlot</option>
              <option name='syrah'>Syrah</option>
              <option name='riesling'>Riesling</option>
              <option name='gewürztraminer'>Gewürztraminer</option>
              <option name='cabernetSauvignon'>CabernetSauvignon</option>
              <option name='pinotNoir'>PinotNoir</option>
            </select>
            <button type="submit" class="start__tasting__btn">start tasting</button>
          </form>
        </div> </div>) : (
        <></>
      )}

      {showRatingOfFruit() ? (
        <FruitRating fruit={fruit} updateFruit={updateFruit} />
      ) : (
        <></>
      )}

      {showRatingOfAcidity() ? (
        <AcidityRating acidity={acidity} updateAcidity={updateAcidity} />
      ) : (
        <></>
      )}

      {showRatingOfTannins() ? (
        <TanninsRating tannins={tannins} updateTannins={updateTannins} />
      ) : (
        <></>
      )}

      {showRatingOfWineBody() ? (
        <BodyRating body={body} updateBody={updateBody} />
      ) : (
        <></>
      )}

      {body !== 0 && !dominantFlavors.ratingCompleted ? (
        <DominantFlavors
          updateDominantFlavors={updateDominantFlavors}
          grape={grape}
          wineDB={WineDB}
        />
      ) : (
        <></>
      )}

      {dominantFlavors.ratingCompleted && !possibleFlavors.ratingCompleted ? (
        <PossibleFlavors
          updatePossibleFlavors={updatePossibleFlavors}
          grape={grape}
          wineDB={WineDB}
        />
      ) : (
        <></>
      )}

      {possibleFlavors.ratingCompleted === true ? (
        <OverallRating submitRating={submitRating} wineList={wineList} />
      ) : (
        <></>
      )}

    </div>

  );
}
