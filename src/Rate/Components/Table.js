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
 <tr className='head' >
          <th className="name" colSpan={2} rowSpan={2}>{text.bank}</th>
          <th className="name"  colSpan={2} rowSpan={2}><p>{text.date}</p></th>
          <th colSpan={2} rowSpan={1} className='usd'><h2>USD</h2></th>
          <th colSpan={2} rowSpan={1} className='usd'><h2>EUR</h2></th>      
          <th colSpan={2} rowSpan={1} className='usd'><h2>RUR</h2></th>
 </tr>
 <tr  >
          <th  className='text'  rowSpan={1} colSpan={1} ><p>{text.buy}</p></th>
          <th className='text'  rowSpan={1} colSpan={1}><p>{text.sell}</p></th>
          <th className='text' rowSpan={1} colSpan={1} ><p>{text.buy}</p></th>
          <th className='text' rowSpan={1} colSpan={1}><p>{text.sell}</p></th>
          <th className='text' rowSpan={1} colSpan={1} ><p>{text.buy}</p></th>
          <th  className='text' rowSpan={1} colSpan={1}><p>{text.sell}</p></th>
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
