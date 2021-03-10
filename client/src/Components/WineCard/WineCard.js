import ApiService from '../ApiService';
import bottle from "../pictures/bottle.svg";
import { useState } from "react";
import bin from "../pictures/bin.svg"

// RATING IS READ ONLY
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function WineCard({ wine }) {

  const [value, setValue] = useState(wine.overallRating);

  return (
    <div className='wine__card'>
      <div onClick={() => ApiService.deleteTasting(wine.id)} className="delete__btn__wine__card"><img src={bin} alt="bin delete sybol" className="bin__delete__symbol"></img></div>
      <div className="wrapper__wine__card">
        <div className="wine__card__headline">
          <div className="wine__card__winery">{wine.winery}</div>
          <div className="wine__card__year">{wine.year}</div>
          <div className="wine__card__grape">{wine.grape}</div>
        </div>

        <div className="image__wrap__wine__card">
          <div><img alt="bottle" src={bottle} name={wine.grape} className="bottle__image" fill="#d82525"></img></div>
          <div className="wine__card__more__information">
            <div className="hover__profile__wine__card">
              <div>Fruit: {wine.fruit} / 5</div>
              <div>Acidity: {wine.acidity} /5 </div>
              <div>Tannins: {wine.tannins} / 5</div>
              <div>Body: {wine.body} / 5</div>
            </div>
            <div className="hover__flavors__wine__card">
              <div className='wine__card__flavors'>Dominant Flavors: {wine.dominantFlavors.map(flavor => <div className='single__flavor'>{flavor} </div>)}</div>
              <div className='wine__card__flavors'>PossibleFlavors Flavors: {wine.arrPossibleFlavors.map(flavor => <div className='single__flavor'>{flavor}</div>)}</div>
            </div>
          </div>
        </div>

        <div className="wine__card__rating">
          <Box component="fieldset" mb={3} borderColor="transparent" className="hola">
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </div>
      </div>
    </div>

  )
}