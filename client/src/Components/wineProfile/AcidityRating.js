import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import lemon from '../pictures/lemon.svg'

const StyledRating = withStyles({
  iconFilled: {
    color: 'black',
  },
  iconHover: {
    color: 'black',
  },
})(Rating);

function AcidityRating({ acidity, updateAcidity }) {

  const [statusImage, setStatusImage] = useState(true)

  function hideOrDisplayImage() {
    if (statusImage === true) {
      setStatusImage(false)
    } else setStatusImage(true)
  }

  return (<div>
    <div className={"centered__container__profile"}>
      <h2 className='rating__box__headline'>rate the acidity of the wine</h2>
      <div className='star__rating'>
        <Box component="fieldset" mb={3} borderColor="transparent" className='rating__box__profile'>
          <Typography component="legend"></Typography>
          <StyledRating
            className="style__rating"
            name="acidity"
            precision={0.5}
            value={acidity}
            icon={<FiberManualRecordIcon fontSize="inherit" />}
            onChange={(event, newValue) => updateAcidity(event, newValue)}
          />
        </Box>
        <div className='profile__tasting__description__text'>
          <details onClick={() => hideOrDisplayImage()}>
            <summary>How to rate acidity of wine</summary>
            <p>Acids are the primary attribute that contributes to wine's tart and sour flavor. Most acids from grapes including tartaric, malic and citric acid. Like many fruits, wine lies on the acid side of pH scale, ranging from about 2.5-4.5 pH (7 is neutral). One useful thing to know about acidity in wine is that, as grapes ripen, they become less acidic. Thus, a wine from a cooler climate where it is hard to ripen grapes will produce wines with higher acidity.</p>
          </details>
        </div>
      </div>
      <img src={lemon} alt="lemon" className={statusImage === true ? '' : 'hidden__image'}></img>
    </div>
  </div>)
}

export default AcidityRating
