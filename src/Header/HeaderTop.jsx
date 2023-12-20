import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiShoppingBasket2Fill } from "react-icons/ri";
function HeaderTop({ sebet, setSebet }) {
  return (
    <div className='container'>
      <div className="headerTop">
        <a href="#" id='logo'><img src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="logo" /></a>
        <div className='topMenu'>
          <ul>
            <li><a href="#">Restoranlar</a></li>
            <li><a href="#">PapaBonus</a></li>
          </ul>
        </div>
        <div className="headerLogin">
          <div className='headerIcon'>
            <img id='azFlag' src="https://www.papajohns.az/img/content/flag_az.png" alt="" />
            <p>Az</p>
          </div>
          <div className='headerIcon'>
            <FaUser className='icon' />
            <p>Giris</p>
          </div>
          <div className='headerIcon flexCol'>
            <RiShoppingBasket2Fill onClick={() => { setSebet(!sebet )}} className='icon' />
            <p>0₼</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop