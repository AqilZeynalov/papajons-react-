import Card from "./Card"
import Promo from "../Main Top Bar/Promo";
import MainSelect from "../Main Top Bar/MainSelect";
import { useParams } from "react-router-dom";

function Cards({data,setData,basket,setBasket}) {
  function addBasket(id,name) {
    let newElem = data.find(item=>item.name===name)
    setBasket([...basket,newElem])
    console.log(basket);
  
  }


  const {category} =useParams()
  console.log(category);
  return (
    <>
      <Promo />
      <MainSelect />
      <div className="cards">
        {
       
          data.filter(item =>item.category ===category)
          .map((item, i) => <Card key={i} {...item} basket={basket} setBasket={setBasket} addBasket={addBasket}/>)
        }
      </div>
    </>
  )
}

export default Cards