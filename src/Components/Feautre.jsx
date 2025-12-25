import React from 'react'
import Carousel from './Carousel'

const Feautre = () => {

    const data = [
        {
            id: 1,
            message: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
            name: "Jason Staczek",
            color: "#765070",
            img: "/man.png"
        },
        {
            id: 2,
            message: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
            name: "Jason Staczek",
            color: "#384C75",
            img: "/man2.png"
        },
        {
            id: 3,
            message: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
            name: "Jason Staczek",
            color: "#71719A",
            img: "/man3.png"
        },
    ]

  return (
    <div className='bg-white w-full px-4 md:px-14 py-20'>
        <Carousel data={data}/>
    </div>
  )
}

export default Feautre