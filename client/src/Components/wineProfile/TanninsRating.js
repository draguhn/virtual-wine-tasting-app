import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { withStyles } from '@material-ui/core/styles';
import tannin from '../pictures/tannin.svg';
import { useState } from "react";

const StyledRating = withStyles({
  iconFilled: {
    color: 'black',
  },
  iconHover: {
    color: 'black',
  },
})(Rating);

function TanninsRating({ tannins, updateTannins }) {

  const [statusImage, setStatusImage] = useState(true);

  function hideOrDisplayImage() {
    if (statusImage === true) {
      setStatusImage(false)
    } else setStatusImage(true)
  }

  return (<div>
    <div className={"centered__container__profile"}>

      <h2 className='rating__box__headline'>rate tannins in the wine</h2>
      <div className='star__rating'>
        <Box component="fieldset" mb={3} borderColor="transparent" className='rating__box__profile'>
          <Typography component="legend"></Typography>
          <StyledRating
            className="style__rating"
            name="tannins"
            precision={0.5}
            value={tannins}
            icon={<FiberManualRecordIcon fontSize="inherit" />}
            onChange={(event, newValue) => updateTannins(event, newValue)}
          />
        </Box>
        <div className='profile__tasting__description__text'>

          <details onClick={() => hideOrDisplayImage()}>
            <summary>How to rate tannins in wine</summary>
            <p>To taste tannin in wine, focus on the texture on your toungue. A high tannin wine will remove proteins from your tongue, causing a drying and puckering sensation. This sensation is often described as 'grippy'. High tannin wines act as palate cleanser to rich, fatty meats, cheeses and pasta dishes.</p>
          </details>
        </div>
      </div>
      <img src={tannin} alt="lemon" className={statusImage === true ? '' : 'hidden__image'}></img>
    </div>
  </div>)
}

export default TanninsRating

