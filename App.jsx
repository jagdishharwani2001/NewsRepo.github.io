import React, { useState } from "react"
import Newsnav from "./Newsnav";
import NewsBoard from "./NewsBoard";


const App = ()=>{
  const [category,setcategory] = useState("general")
  return(
    <>
      <Newsnav setcategory={setcategory}/>
      <NewsBoard category={category}/>
      
    </>
  )
}
export default App;
