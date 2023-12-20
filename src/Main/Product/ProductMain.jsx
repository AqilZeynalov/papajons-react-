import React from 'react'

function ProductMain() {
    


    return (
        <>
            <div className="productTopBar">
                <ul id='productMenu'>
                    <li><a href="/">Mehsullar</a></li>
                    <li><a href="#">sfdhjggh</a></li>

                </ul>
            </div>
            <div className='productFlex1'>
                <div className="productLeft">
                    <div className="coruselDesk">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="productRight">
                    <h2>Məhsulun qiyməti: <span className='qiymet'>5445 azn</span></h2>
                    <h3>adi</h3>
                    <span>Çatdırılma: Var</span>

                    <div className="mehsulHaaqinda">
                        <p><b>Filial:</b> Baki</p>
                        <p><b>Məhsulun Kateqoriyasi:</b> categi</p>
                        <p><b>Məhsulun Tərkibi:</b> terkibi</p>

                    </div>
                    <div className='addBtn'>
                        <p>Şəhər: Baki</p>
                        <button>Səbətə əlavə et</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductMain