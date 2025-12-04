import { BrowserRouter, Routes,Route } from "react-router";
import { Home } from "./Home";
import { About } from "./About";
import { Product } from "./Product";
import People from "./People";
import Lawyers from "./Lawyers";
import Players from "./Players";
import PeoplePage from "./PeoplePage";
import StundentLayout from "./StundentLayout ";
import StudentDetails from "./StudentDetails";
import Students from "./Students";
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element ={<Home />} />
       <Route index element ={<About/>} />
<Route path="Product" element ={<Product />} />

  <Route path="people" element={<People/>} >
  <Route index element={<PeoplePage />} />
  <Route path="lawyers" element={<Lawyers />} />
  <Route path="players" element={<Players />} />
</Route>
<Route path="/brown" element={<StundentLayout />} />
<Route index element={<Students />} />
<Route path=":name" element={<StudentDetails />} />

     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
