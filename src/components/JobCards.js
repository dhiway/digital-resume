import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobCards = (props) => {
    const Navigate = useNavigate()
  return (
    <div onClick={()=>Navigate('/resume')} 
    className='relative w-full flex gap-4 bg-design-grey px-2 py-2 mt-4 min-w-[400px] rounded hover:skew-x-1'>
        <h6 className='min-w-[30%] text-purple-100 text-left text-xl'>{props.name}</h6>
        <span className='absolute h-full w-0.5 top-0 left-[30%] bg-design-green'></span>
        <p className='text-design-green text-lg text-left'>Skills: <span className='text-design-blue text-base'>{props.skills}</span></p>
    </div>
  )
}

export default JobCards