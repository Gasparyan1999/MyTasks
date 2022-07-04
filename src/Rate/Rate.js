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
        name:"Choose a Bank",
        col:"Foreign currency calculator"
    })

    const click=()=>{
            setLang({
                bank:"Բանկ",
                date:"Ամսաթիվ",
                buy:"Առք",
                sell:"Վաճառք",
                value:"Ընտրեք արժույթը",
                name:"Ընտրեք բանկ",
                col:"Արտարժույթի հաշվիչ"
            })
        }
        const clickTwo=()=>{
            setLang({
                bank:"Bank",
                date:"Date",
                buy:"Buy",
                sell:"Sell",
                value:"Choose Currency",
                name:"Choose a Bank",
                col:"Foreign currency calculator"
            })
        }
        
    

  return (
    <div className='main'>
          <div className='header'>
            <h1>RATE.am</h1>
            <div className='button'>
            <img onClick={click} src={armenia}/>
            <img onClick={clickTwo} src={english}/>
        </div>
        </div>
        <Table text={lang} />
        <Calculate bank={bank} text={lang}/>
    </div>
  )
}
