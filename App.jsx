import React, { useState } from "react"
import Newsnav from "./Component/Newsnav";
import NewsBoard from "./Component/NewsBoard";


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
