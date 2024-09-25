import { useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "./notSlicer"
import { useNavigate } from "react-router-dom"

export const CreateNotes=()=>{
    const [ttle,setTtle]=useState([])
    const [desc,setDesc]=useState([])
    const [clr,setClr]=useState([])
    const dispatch=useDispatch()
    const nav=useNavigate()
    const hndlSubmit=(e)=>{
        e.preventDefault()
        dispatch(add({id:Math.random(),title:ttle,desc:desc,colorr:clr}))
        setTtle([])
        setDesc([])
        setClr([])
        nav('/')
    }

    
    return (
        <>
        <form onSubmit={hndlSubmit}>
            <label>title</label>
            <input
            value={ttle}
            onChange={(e)=>setTtle(e.target.value)}
            placeholder="title"
            type="required"
            />
        <label> description</label>
            <input
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            placeholder="description"
            type="required"
            />

        <label>color</label>
            <input
            value={clr}
            onChange={(e)=>setClr(e.target.value)}
            placeholder="color"
            type="required"
            />
    <button type="submit">submit</button>

        </form>
        </>
    )
}