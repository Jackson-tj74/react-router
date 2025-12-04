import { useParams } from "react-router"


function StudentDetails() {
  let{name} =useParams();
  return (
    <div>
        <h1>Hello your name{name}</h1>
    </div>
  )
}

export default StudentDetails