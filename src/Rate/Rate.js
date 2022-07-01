import  { useState } from 'react'
import Calculate from './Components/Calculate'
import Table from './Components/Table'
import { convers,idbank,abb, vtb} from './Data'
import "./Rate.scss"
import armenia from "./Img/arm.png"
import english from "./Img/eng.png"

export default function Rate() {

    const [bank,setBank]=useState([convers,idbank,abb,vtb])

    const [lang,setLang]=useState({
        bank:"Bank",
        date:"Date",
        buy:"Buy",
        sell:"Sell",
        value:"Choose Currency",
        name:"Choose a Bank"
    })

    const click=()=>{
            setLang({
                bank:"Բանկ",
                date:"Ամսաթիվ",
                buy:"Առք",
                sell:"Վաճառք",
                value:"Ընտրեք արժույթը",
                name:"Ընտրեք բանկ"
            })
        }
        const clickTwo=()=>{
            setLang({
                bank:"Bank",
                date:"Date",
                buy:"Buy",
                sell:"Sell",
                value:"Choose Currency",
                name:"Choose a Bank"
            })
        }
        
    

  return (
    <div className='main'>
        <Table text={lang} />
        <Calculate bank={bank} text={lang}/>
        <div className='button'>
            <img onClick={click} src={armenia}/>
            <img onClick={clickTwo} src={english}/>
        </div>
    </div>
  )
}
