import React from 'react'
import Container from './Container'

const Pricing = () => {
  return (
      
      <div className='bg-[#2B2D32] h-80 px-5 sm:px-20'>
        <div className="relative">
       <div className='bg-[#F5F5F5] w-full min-h-110 md:min-h-145 absolute rounded-2xl -top-50 md:-top-75 left-0 px-10 md:px-16 flex flex-col justify-center'>
            <img className='w-10 sm:w-14 md:w-19 md:h-30 mb-5' src="/main-logo.png" alt="" />
            <h2 className='text-[26px] sm:text-[35px] md:text-[46px] font-semibold leading-9 sm:leading-12 md:leading-15 mb-8 md:mb-14'>Superpowers starting $9.99/month. <br /> Free for 7 days.</h2>
            <div className='flex flex-col sm:flex-row gap-5'>
                <button className='bg-[#26262B] text-white px-6 md:px-10 py-2 cursor-pointer rounded-lg border border-transparent'>Get started now</button>
                <button className='px-6 md:px-10 py-2 cursor-pointer rounded-lg border font-light border-[#26262B]'>More about Setapp</button>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Pricing