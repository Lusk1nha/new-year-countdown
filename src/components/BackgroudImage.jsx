import Background1 from '../assets/images/bg-image-1.jpg'
import Background2 from '../assets/images/bg-image-2.jpg'
import Background3 from '../assets/images/bg-image-3.jpg'
import Background4 from '../assets/images/bg-image-4.jpg'
import Background5 from '../assets/images/bg-image-5.jpg'
import Background6 from '../assets/images/bg-image-6.jpg'
import Background7 from '../assets/images/bg-image-7.jpg'
import Background8 from '../assets/images/bg-image-8.jpg'
import Background9 from '../assets/images/bg-image-9.jpg'
import Background10 from '../assets/images/bg-image-10.jpg'
import Background11 from '../assets/images/bg-image-11.jpg'
import { useEffect, useState } from 'react'

export function BackgroundImage() {
  const [background, setBackground] = useState('')

  const images = [
    Background1, Background2, Background3, Background4,
    Background5, Background6, Background7, Background8,
    Background9, Background10, Background11
  ]

  useEffect(() => {
    const randomKey = Math.floor(Math.random() * images.length) 
    return setBackground(images[randomKey])
  }, [])

  return (
    <img 
      className="background-page" 
      src={background} 
      alt="None of this" 
    />
  );
}