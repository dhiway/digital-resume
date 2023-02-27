import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobCards = (props) => {
    const Navigate = useNavigate()
  return (
    <div onClick={()=>Navigate('/resume')} className='w-1/3 bg-design-grey px-4 py-8 mt-4 min-w-[400px] rounded hover:skew-x-1'>
        <h6 className='text-design-green text-left text-xl'>{props.name}</h6>
        <p className='text-design-green mt-6 text-lg text-left'>Skills: <span className='text-design-blue text-base'>{props.skills}</span></p>
    </div>
  )
}

export default JobCards