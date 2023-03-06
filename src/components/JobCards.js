import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobCards = (props) => {
    const Navigate = useNavigate()
  return (
    <div key={props.keyId} onClick={()=>Navigate('/resume')} 
    className={`cursor-pointer relative  bg-design-grey mt-2 rounded hover:skew-x-1 ${props.view==='list'?'flex gap-4 px-2 py-2 w-full': 'grid px-2 py-4'}`}>
        <h6 className='min-w-[30%] text-purple-100 text-left text-xl'>{props.name}</h6>
        {props.view==='list' && <span className={`absolute h-full w-0.5 top-0 left-[30%] bg-design-green`}></span>}
        <p className={`text-design-green text-lg text-left ${props.view==='grid'?'mt-2':''}`}>Skills: <span className='text-design-blue text-base'>{props.skills}</span></p>
    </div>
  )
}

export default JobCards