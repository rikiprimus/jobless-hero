import React from 'react'

const Cardhero = ({ imgUrl, jobTitle, platform, text, tag, currency }) => {
  return (
    <div className='bg-white text-slate-600 hover:bg-blue hover:text-white p-6 rounded-lg w-[350px] drop-shadow-2xl'>
      <div className='flex gap-6 mb-6'>
        <img src={imgUrl} className='text-black w-[50px]' />
        <div className='flex flex-col m'>
          <h1 className='font-bold text-xl'>{jobTitle}</h1>
          <p className='font-light'>{platform}</p>
        </div>
      </div>
        <p className='font-light text-md tracking-wider mb-6'>{text}</p>
        <div className='w-full border-[0.1px] border-slate-100 mb-6' />
        <div className='flex justify-between items-center font-semibold'>
          <p className='bg-white bg-opacity-10 p-1'>{tag}</p>
          <p>{currency}</p>
        </div>
    </div>
  )
}

export default Cardhero