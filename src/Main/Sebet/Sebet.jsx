import { CiCircleRemove } from "react-icons/ci";
import SebetItem from './SebetItem';


function Sebet({basket,setBasket,sebet,setSebet}) {

    function removeSebet (name){
        let elem= basket.filter(item=> item.name!== name)
        setBasket(elem)
        
    }

    return (
        <div className='sebet' style={{display:sebet===true ? "none" : "block"}}>
            <CiCircleRemove onClick={()=>{setSebet(!sebet)}} className='yasamen' />
            <div className='items'>
               {
                 basket.map((item,i) => <SebetItem  key={i} {...item} removeSebet={removeSebet} />)
                
               }
            </div>
            <div className="sebetText">
                <h3>Ümumi Məbləğ</h3>
                <button className='sebetBtn'>Sifarişi göndər</button>
            </div>
        </div>
    )
}

export default Sebet