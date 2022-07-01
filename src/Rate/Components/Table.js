import React, { useState } from 'react'
import Bank from './Bank'
import { convers,idbank,abb, vtb} from '../Data'
export default function Table({text}) {

    const [converse,setConverse]=useState(convers)
    const [idb,setIdb]=useState(idbank)
    const [abank,setAbank]=useState(abb)
    const [vtbank,setVtbank]=useState(vtb)
    const [bank,setBank]=useState([convers,idbank,abb,vtb])

   

  return (
    <table>
        <tbody>
 <tr className='place'>
          <th  className='bank'>{text.bank}</th>
          <th className='date'><p>{text.date}</p></th>
          <th className='usd'><h2>USD</h2><div><p>{text.buy}</p><p>{text.sell}</p></div></th>
          <th className='usd'><h2>EUR</h2><div><p>{text.buy}</p><p>{text.sell}</p></div></th>
          <th className='usd'><h2>RUR</h2><div><p>{text.buy}</p><p>{text.sell}</p></div></th>
 </tr>
 {
    bank.map((elem,index)=>{
        return <Bank key={index} num={index+1} name={elem.name} usdOne={elem.usdOne} usdTwo={elem.usdTwo} eurOne={elem.eurOne} eurTwo={elem.eurTwo} rurOne={elem.rurOne} rurTwo={elem.rurTwo} />
    })
 }
 </tbody>
 </table>
  )
}
