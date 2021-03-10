import joy from "../pictures/joy.svg"
import note from "../pictures/note.svg"
import education from "../pictures/education.svg"

export default function Home() {

  return (<div>
    <div className="home__container">

      <h1 className="home__headline">Why this app?</h1>

      <div className="home__sub__container">
        <div><img src={education} alt="education" className="home__img"></img></div>
        <div className="home__txt">
          <h2>EDUCATION</h2>
          <p class="p__home">This app will introduce you in the art of wine tasting. Wine tasting always follows a certain pattern. The app will guide you through certain steps of a tasting process. The main foucs lays on the flavors and aromas of different grape varieties. To start a tasting you have to type in the winery, vintage and the grape variety. The following tasting is based on the grape you chose.  </p>
        </div>
      </div>

      <div className="home__sub__container">
        <div className="home__txt">
          <h2>NOTEBOOK</h2>
          <p class="p__home">The App provides a notebook for your tastings. It will generate a list of all tasting you made in the past - you can always got back and see how you rated certain wines. You can delete tasting and re-tast again. Main goal is getting used to the tasting process itself and additionally store your favorite wine in this app so you don't forget about them' </p>
        </div>
        <div><img src={note} alt="note" className="home__img"></img></div>
      </div>

      <div className="home__sub__container">
        <div><img src={joy} alt="joy" className="home__img"></img></div>
        <div className="home__txt">
          <h2>JOYMENT</h2>
          <p class="p__home">We are living in hard times ... And since drinking might not be considered as a long term solution by many people the enjoyment of wine offers far more than alcohol. Discovering all flavors, aromas and odors of a good glas of wine - especially in good company - can bring happiness to your life</p>
        </div>
      </div>

    </div>
  </div>)

}