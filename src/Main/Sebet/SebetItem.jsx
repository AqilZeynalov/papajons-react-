import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";

function SebetItem({ id, img, category, name, composition, price, removeSebet }) {
    const [reqem,setReqem]=useState(1)

    function plus(){
        setReqem(reqem + 1)
    }
    function minus() {
        setReqem(reqem - 1)
    }
    return (
        <div className="sebetItem">
            <div className="listLeft"><img src={img} alt="Mehsul Sekili" /></div>
            <div className="listRight">
                <div className='listText'>
                    <h2>{name}</h2>
                    <p>30 sm</p>
                </div>
                <div className="listBtn">
                    <button onClick={plus}>+</button>
                    <input  value={reqem} type="text" disabled />
                    <button onClick={minus}>-</button>
                    <span className='pul'>
                        {price}M
                    </span>
                </div>
                <CiCircleRemove onClick={() => { removeSebet(name)}} className='removeBtn' />
            </div>
        </div>
    )
}

export default SebetItem