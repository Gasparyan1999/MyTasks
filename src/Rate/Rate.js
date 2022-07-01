import  { useState } from 'react'
import Calculate from './Components/Calculate'
import Table from './Components/Table'
import { convers,idbank,abb, vtb} from './Data'
import "./Rate.scss"

export default function Rate() {

    const [bank,setBank]=useState([convers,idbank,abb,vtb])

    const [lang,setLang]=useState({
        bool:true,
        bank:"Bank",
        date:"Date",
        buy:"Buy",
        sell:"Sell",
        value:"Choose Currency",
        name:"Choose a Bank"
    })

    const click=()=>{
        if(lang.bool){
            setLang({
                bool:false,
                bank:"Բանկ",
                date:"Ամսաթիվ",
                buy:"Առք",
                sell:"Վաճառք",
                value:"Ընտրեք արժույթը",
                name:"Ընտրեք բանկ"
            })
        }
        else{
            setLang({
                bool:true,
                bank:"Bank",
                date:"Date",
                buy:"Buy",
                sell:"Sell",
                value:"Choose Currency",
                name:"Choose a Bank"
            })
        }
    }

  return (
    <div className='main'>
        <Table text={lang} />
        <Calculate bank={bank} text={lang}/>
        <button onClick={click} >En/Հայ</button>
    </div>
  )
}
