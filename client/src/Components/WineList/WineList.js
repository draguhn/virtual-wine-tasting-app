import WineCard from '../WineCard/WineCard';
import ApiService from '../ApiService';
import { useEffect, useState } from 'react';

export default function WineList({user}) {

  const [wineListDB, setWineListDB] = useState([])

  useEffect(() => {
    ApiService.getTastings(user.userId)
      .then((data) => setWineListDB(data))
  }, [wineListDB])

  // async function consoleLogDB () {
  //   //console.log("hola")
  //   const data =  await ApiService.getTastings();
  //   console.log(data)
  //   setWineListDB(data)
  // }

  return (<div>

    {/* <button onClick={() => consoleLogDB()}>get tastings from db</button> */}
    {/* <button onClick={() => console.log(wineListDB)}>winelist</button> */}

    {wineListDB ? <div className="wine__card__container">
      {wineListDB.map((wine, index) => {
        return (<div><WineCard wine={wine} /></div>)
      })}
    </div> : <div>LOADING DATA</div>}

  </div>)

}