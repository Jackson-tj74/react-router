import { Link } from "react-router"
function PeoplePage() {
  return (
    <>
    <h1 className="text-5xl px-20 py-5"><i><u>Jobs of People</u></i></h1>
  
  <div className="text-blue-500 px-20">

  <Link to={"lawyers"} ><u>laywers</u></Link><br/>
  <Link to={"players"} ><u>playes</u></Link>
  
  </div>
  </>
  
  
  )
}

export default PeoplePage