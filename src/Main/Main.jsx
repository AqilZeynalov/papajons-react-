import Cards from "./Cards/Cards"
import Sebet from "./Sebet/Sebet"
import Product from "./Product/Product"
import Kompaniya from "./Kompaniya"
import { Route, Routes, useParams } from "react-router-dom"
import Item from "./Product/Item"




function Main({ data, setData, basket, setBasket, sebet, setSebet }) {

  const { params } = useParams()

  return (
    <main>
      <div className="container">
        <Routes>
          <Route path="/menu/:category" element={<Cards data={data} setData={setData} basket={basket} setBasket={setBasket} />} />
          <Route path="/menu/:product" element={<Product />} />
          <Route path="/menu/:product/:id" element={<Item data={data} />} />
        </Routes>

        <Sebet basket={basket} setBasket={setBasket} sebet={sebet} setSebet={setSebet} />

      </div>
    </main>
  )
}

export default Main