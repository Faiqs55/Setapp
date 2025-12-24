import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`w-[95%] md:w-[95%] max-w-370 mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container