import { useEffect, useState } from "react";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main/Main"
import { Alert, Space } from 'antd';
import axios from "axios";


function App() {
   const [data,setData]=useState([])
   const [basket,setBasket]=useState([]) 
   const [sebet,setSebet] =useState (true)


   useEffect (()=>{
     axios.get('https://papaapi.yetim.me/food')
     .then(res => setData(res.data))
   },[])



  return (
      <>
        <Header sebet={sebet} setSebet={setSebet} />
        <Main data={data} setData={setData} basket={basket} setBasket={setBasket} sebet={sebet} setSebet={setSebet}/>
        <Footer />
      </> 
  )
}

export default App