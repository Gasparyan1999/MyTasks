import React, { useEffect, useRef, useState } from 'react'
import eur from "../Img/eur.png"
import usa from "../Img/usa.png"
import rur from "../Img/rus.png"

export default function Calculate({bank,text}) {
     const [curr,setCurr]=useState("usdOne")
     const [currency,setCurrency]=useState("eurTwo")
     const [one,setOne]=useState("")
     const [two,setTwo]=useState("")
     const currOne=useRef(null)
     const currTwo=useRef(null)
     const refOne=useRef(null)
     const refTwo=useRef(null)
     const name = useRef(null)
     const [pic,setPic]=useState(usa)
     const [picTwo,setPicTwo]=useState(eur)
    const change=(e)=>{
        let x=0
        let y=0
        bank.forEach(elem=>{
            if(elem.name==name.current.value){
                for(const [key,value] of Object.entries(elem)){
                    if(key==currOne.current.value){
                        x=value
                    }
                    if(key==currTwo.current.value){
                        y=value
                    }
                }
            }
        })
        if(currTwo.current.value.slice(0,3)==currOne.current.value.slice(0,3)){
            setTwo(refOne.current.value)
        }
        else{
            setTwo((refOne.current.value)*x/y)
        }
    }
    const changeA=(e)=>{
        setCurr(currOne.current.value)
        let x=0
        let y=0
        bank.forEach(elem=>{
            if(elem.name==name.current.value){
                for(const [key,value] of Object.entries(elem)){
                    if(key==currOne.current.value){
                        x=value
                    }
                    if(key==currTwo.current.value){
                        y=value
                    }
                }
            }
        })
        if(currTwo.current.value.slice(0,3)==currOne.current.value.slice(0,3)){
            setTwo(refOne.current.value)
        }
        else{
            setTwo((refOne.current.value)*x/y)
        }
        if(currOne.current.value=="eurOne"){
            setPic(eur)
        }
        else if(currOne.current.value=="usdOne"){
             setPic(usa)
        }
        else{
            setPic(rur)
        }
       

    }
    const changeB=(e)=>{
        setCurrency(currTwo.current.value)
        let x=0
        let y=0
        bank.forEach(elem=>{
            if(elem.name==name.current.value){
                for(const [key,value] of Object.entries(elem)){
                    if(key==currOne.current.value){
                        x=value
                    }
                    if(key==currTwo.current.value){
                        y=value
                    }
                }
            }
        })
        if(currTwo.current.value.slice(0,3)==currOne.current.value.slice(0,3)){
            setTwo(refOne.current.value)
        }
        else{
            setTwo((refOne.current.value)*x/y)
        }
        if(currTwo.current.value=="eurTwo"){
            setPicTwo(eur)
        }
        else if(currTwo.current.value=="usdTwo"){
             setPicTwo(usa)
        }
        else{
            setPicTwo(rur)
        }
    }
    const changeOne=(e)=>{
        setOne(refOne.current.value)
        let x=0
        let y=0
        bank.forEach(elem=>{
            if(elem.name==name.current.value){
                for(const [key,value] of Object.entries(elem)){
                    if(key==curr){
                        x=value
                    }
                    if(key==currency){
                        y=value
                    }
                }
            }
        })
        if(curr.slice(0,3)==currency.slice(0,3)){
            setTwo(refOne.current.value)
        }
        else{
            setTwo(refOne.current.value*x/y)
        }
      
    }
    const changeTwo=(e)=>{
        setTwo(refTwo.current.value)
        let x=0
        let y=0
        bank.forEach(elem=>{
            if(elem.name==name.current.value){
                for(const [key,value] of Object.entries(elem)){
                    if(key==curr){
                        x=value
                    }
                    if(key==currency){
                        y=value
                    }
                }
            }
        })
        if(curr.slice(0,3)==currency.slice(0,3)){
            setOne(refTwo.current.value)
        }
        else{
      setOne(refTwo.current.value*y/x)
        }
    }

  return (
    <div className='calc'>
        <div className='colspan'>
            <h2>{text.col}</h2>
        </div>
        <div className='one' >
       <label htmlFor="banks">{text.name}:</label  >
    <select name="banks" id="banks" onChange={change} ref={name} >
         <option value="Convers">Convers</option>
         <option value="IDbank">IDbank</option>
         <option value="ABB">ABB</option>
         <option value="VTB">VTB</option>
   </select>
   </div>
   <div className='curr'>
    <span className='spanOne'>
   <label htmlFor="Currency"><img src={pic} />:
   <select name="currency" id="currency" defaultValue="usdOne" ref={currOne} onChange={changeA} >
         <option value="usdOne">USD</option>
         <option value="eurOne">EUR</option>
         <option value="rurOne">RUR</option>
   </select>
   </label  >
    <input type="number" value={one} ref={refOne} onChange={changeOne}/>
   </span>
   <span>
   <label className='label' htmlFor="Currency"><img src={picTwo} />:
   <select name="currency" id="currency" defaultValue="eurTwo" ref={currTwo} onChange={changeB} >
         <option value="usdTwo">USD</option>
         <option   value="eurTwo">EUR</option>
         <option value="rurTwo">RUR</option>
   </select>
   </label  >
   <input type="number" value={two} ref={refTwo} onChange={changeTwo} />
   </span>
   </div>
    </div>
  )
}
