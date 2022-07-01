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
        <td className='bankName'>{props.name}</td>
        <td className='date'>{date.toLocaleString("en",options)}</td>
        <td className='price'><div><p>{props.usdOne}</p><p>{props.usdTwo}</p></div></td>
        <td className='price'><div><p>{props.eurOne}</p><p>{props.eurTwo}</p></div></td>
        <td className='price'><div><p>{props.rurOne}</p><p>{props.rurTwo}</p></div></td>
    </tr>
  )
}
