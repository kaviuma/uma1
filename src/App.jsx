import axios from "axios";
import { useEffect,useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
// import A from "./A";
// import { createContext } from "react";




// export let Q = createContext();


function App() {


  // let Z ={
  //   name:"Orange",
  //   price:200
  // }


  // topic 1
let [data,setData] = useState([]);
useEffect(()=>{

axios
.get("https://fakestoreapi.com/products")
.then((res)=>{
  setData(res.data);
})
.catch(()=>{
  alert("Error fetching data");
});

},[])











// TOPIC 2
//   let[data,setData] = useState([]);

// useEffect(()=>{
//  fetch('https://fakestoreapi.com/products')
//    .then(response => response.json())
//   .then(data => setData(data));

  
// },[])
// console.log(data);


  
return (
  <div>
   
{/* {data.map((d)=>{
  return(
    <>
    <h2>{d.title}</h2>
    <img src={d.image} alt="" />
    
    </>
  )
})} */}

{/* {/* other content  */}
<div className="container mt-4">
 <div className="row">

{data.map((d,index)=>(
  <div className="col-sm-4 col-md-6 col-lg-3 mb-3" key={index}>
    <div className="card">
      <div className="card-body">
         <img src={d.image} alt=""  className="img-fluid"/> 
        <h3>Model:{d.title}</h3>
        <h6>Brand:{d.brand}</h6>
        <h5>Description:{d.Description}</h5>
        <h5>OS:{d.os}</h5>
      </div>
    </div>
  </div> 
))}


</div> 
   </div>


{/* <Q Provider value={Z}>

<A/>

</Q>
 */}



      
    </div>
  )
}
 export default App
