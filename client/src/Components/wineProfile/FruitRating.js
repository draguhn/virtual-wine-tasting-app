import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { withStyles } from '@material-ui/core/styles';
import sugar from '../pictures/sugar.svg';
import { useState } from "react";
import arrow from '../pictures/arrow.svg'

const StyledRating = withStyles({
  iconFilled: {
    color: 'black',
  },
  iconHover: {
    color: 'black',
  },
})(Rating);

function FruitRating({ fruit, updateFruit }) {

  const [statusImage, setStatusImage] = useState(true);
  const [showRatingExplaination, setShowRatingExplaination] = useState(true);

  function threeSeconds() {
    setTimeout(() => {
      setShowRatingExplaination(false)
    }, 2000);
  }

  threeSeconds()


  function hideOrDisplayImage() {
    if (statusImage === true) {
      setStatusImage(false)
    } else setStatusImage(true)
  }


  return (<div>
    <div className={"centered__container__profile"}>
      <h2 className='rating__box__headline'>rate fruit/sweet character of the wine</h2>
      <div className='star__rating'>
        <Box component="fieldset" mb={3} borderColor="transparent" className='rating__box__profile'>
          <Typography component="legend"></Typography>
          <StyledRating
            className="style__rating"
            name="fruit"
            precision={0.5}
            value={fruit}
            icon={<FiberManualRecordIcon fontSize="inherit" />}
            onChange={(event, newValue) => updateFruit(event, newValue)}
          />
        </Box>
      </div>
      {!showRatingExplaination ? (<div>
        <div className='profile__tasting__description__text'>
          <details onClick={() => hideOrDisplayImage()}>
            <summary>How to rate sweetness of wine</summary>
            <p>Sweetness in Wine is derived from residual sugar (RS). Residual sugar is the leftover sweetness when not all the grape must is fermented into alcohol. We describe sweetness as a taste that ranges from bone-dry to very sweet. It is good to know that a technically dry wine can contain up to half a teaspoon of sugar per glass.</p>
          </details>
        </div>
        <img src={sugar} alt="lemon" className={statusImage === true ? '' : 'hidden__image'}></img></div>) : (<div>
        
          <img src={arrow} alt="arrow to rating" className='rating__explanation__img'></img>
          <div className='rating__explanation'><h1>rate here</h1></div>
          </div>)}

    </div>
  </div>)
}

export default FruitRating


