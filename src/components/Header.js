import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

function Header() {

    const { value, setValue } = useContext(GlobalContext);
    console.log("global3")

  return (
    <div>
        <div class="alert alert-primary" role="alert"><strong>
            </strong><a href="#" class="alert-link">Veri: {value}</a>
            <button onClick={() => setValue("ok1")}>Tıkla</button>
        </div>
        
    </div>
  )
}

export default Header