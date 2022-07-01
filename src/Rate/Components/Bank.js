import React from 'react'

export default function Bank(props) {
    let date=new Date()
    let options={
        year:"numeric",
        month:"numeric",
        day:"numeric"
    }
  return (
    <tr className='elem'>
        <td colSpan={2} rowSpan={1} className='bankName'>{props.name}</td>
        <td   colSpan={2} rowSpan={1} className='date'>{date.toLocaleString("en",options)}</td>
        <td colSpan={1} rowSpan={1}><p>{props.usdOne}</p></td>
        <td colSpan={1} rowSpan={1}><p>{props.usdTwo}</p></td>
        <td colSpan={1} rowSpan={1}><p>{props.eurOne}</p></td>
        <td colSpan={1} rowSpan={1}><p>{props.eurTwo}</p></td>
        <td colSpan={1} rowSpan={1}><p>{props.rurOne}</p></td>
        <td colSpan={1} rowSpan={1}><p>{props.rurTwo}</p></td>
    </tr>
  )
}
