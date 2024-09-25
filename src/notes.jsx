import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Notes=()=>{

   const detail=useSelector((state)=>state.note.detail)
    const nav=useNavigate()

return(
    <>
    
    <ul>
    
    {detail.map((value,index)=>(
         <li  style={{background:value.colorr,width:"300px"}} key={index}>
         <h1>{value.title}</h1>
         <p>{value.desc}</p>
         {console.log(value.title,value.colorr,value.desc)}
     </li>
    )
       
       
    )}
    </ul>
       <button onClick={(e)=>{e.preventDefault()
        nav('/createNote')}}>create</button>
    </>
)

}