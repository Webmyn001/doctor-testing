import React from 'react'

const Button = (props) => {
  return (
    <button className='mt-[25px] focus:outline-0 py-1 px-5 text-white hover:border-transparent hover:text-white text-center duration-300 hover:border-[1px] rounded-lg bg-indigo-800'>
        {props.name}
    </button>
  )
}

export default Button