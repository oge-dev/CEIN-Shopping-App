import React from 'react'

const ImgComp = ({src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
}

export default ImgComp