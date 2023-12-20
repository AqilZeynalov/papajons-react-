import { useParams } from "react-router-dom"
import Card from "../Cards/Card"

const Item = ({ data }) => {
    const { id, product } = useParams()
    const cat = data.filter(item => item.category == product)
    const pizza = cat.find(item => item.id == id)
    console.log(pizza);
    return (
        <>
        <h2>Bu itemdir</h2>
        <Card className='cardsss' {...pizza} />
        </>
    )
}

export default Item