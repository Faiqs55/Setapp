import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`w-[95%] md:w-[90%] max-w-370 mx-auto px-4 sm:px-6 ${className}`}>
        {children}
    </div>
  )
}

export default Container