import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Card({ id, name, composition, category, price, img, basket, setBasket, addBasket,className }) {
    const navigate = useNavigate()
    const handleItem = ()=>{
        navigate(`/menu/${category}/${id}`)
    }
    return (

        <div className={"card " + className} onClick={handleItem}>
            <a className='cardText'>
                <div className="cardTop"><img src={img} alt="mehsul" /></div>
            </a>
            <div className="cardBottom">
                <div className='cardBtn'>
                    <a className='cardText' href=''> <span>{name}</span> </a>
                    <button onClick={() => { addBasket(id, name) }}>BUNU SEÇ</button>
                </div>
                <a  className='cardText' href='#'><p>   <b>{""}AZN</b> <br />{composition} </p> </a>
            </div>
        </div>
    )
}

export default Card