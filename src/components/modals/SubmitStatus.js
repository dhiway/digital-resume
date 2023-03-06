import React from 'react'

const SubmitStatus = (props) => {

  return (
    <div className='fixed flex z-50 top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-full bg-modal-black'>
        <div className='relative w-max px-20 h-1/3 flex flex-col gap-4 justify-center items-center min-h-min bg-white rounded-md'>
            <span onClick={props.close} className='cursor-pointer absolute right-4 top-4 text-lg'>X</span>
            <h6 className='text-2xl text-design-purple'>Congratulations! {props.name}</h6>
            <p className='text-base p-0'>Your Resume has been succesfully uploaded.</p>
            <button onClick={props.close}
        className=" px-4 py-2 border rounded text-design-blue border-design-blue text-base bg-design-grey
        hover:bg-design-purple hover:border-design-purple hover:text-white"
        >Resume</button>
        </div>
    </div>
  )
}

export default SubmitStatus