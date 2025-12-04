
import { Link } from "react-router"


export const About = () => {
  return (

    <>
   <div className=" py-7">
    <h2 className="text-3xl text-underlined font-bold ">About page</h2>
    <div className=" text-end space-x-4 ">
     <Link to={"/product"} >product</Link>
   <Link to={"/people"} >people</Link>
   </div>
   
</div>
    <p className="py-8">Lorem, ipsum dolor sit amet consectetur adipisicing
         elit. Ut quidem nam porro ullam deserunt, sit 
         accusantium quos maxime maiores aliquam suscipit,
          culpa, expedita earum ex autem! Natus atque optio quibusdam, tempora odit quisquam quod, aliquid quas dolor expedita sapiente consectetur nobis modi vero? Ratione, corrupti voluptatibus eligendi unde minus quis odit sed assumenda quod voluptatem iure. Corrupti harum ad laudantium obcaecati error expedita animi eaque inventore quam odit illo repudiandae facere in non impedit, earum dolorem provident explicabo magnam dicta? Excepturi incidunt aut, officiis esse veniam, modi et earum facere itaque voluptate, doloremque rem velit dignissimos exercitationem eos dicta suscipit.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ratione veritatis, unde magni aliquid hic.</p>
 
  
   
  </>

  )
}
