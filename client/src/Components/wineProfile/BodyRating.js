import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import bodyPicture from '../pictures/body.svg'

const StyledRating = withStyles({
  iconFilled: {
    color: 'black',
  },
  iconHover: {
    color: 'black',
  },
})(Rating);

function BodyRating({ body, updateBody }) {

  const [statusImage, setStatusImage] = useState(true)

  function hideOrDisplayImage() {
    if (statusImage === true) {
      setStatusImage(false)
    } else setStatusImage(true)
  }

  return (<div>
    <div className={"centered__container__profile"}>
      <h2 className='rating__box__headline'>rate the body of the wine</h2>
      <div className='star__rating'>
        <Box component="fieldset" mb={3} borderColor="transparent" className='rating__box__profile'>
          <Typography component="legend"></Typography>
          <StyledRating
            className="style__rating"
            name="body"
            precision={0.5}
            value={body}
            color='black'
            icon={<FiberManualRecordIcon fontSize="inherit" />}
            onChange={(event, newValue) => updateBody(event, newValue)}
          />
        </Box>
        <div className='profile__tasting__description__text'>

          <details onClick={() => hideOrDisplayImage()}>
            <summary>How to rate the body</summary>
            <p> Body is not a scientific term, but a categorization of stlye from lightes to boldest. The four characteristics of sweetnes, acidity, tannin, and alcohol each affect how light or bold a wine will taste. You can use terms like "light-bodied" or "full-bodied" to describe the style of wine you want to drink. Lighter wines e.g. have more acidity, lower alcohol, less tannin, less sweetness.</p>
          </details>
        </div>
      </div>
      <img src={bodyPicture} alt="lemon" className={statusImage === true ? '' : 'hidden__image'}></img>
    </div>
  </div>
  )
}

export default BodyRating


