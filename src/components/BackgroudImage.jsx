import Background1 from '../assets/images/bg-image-1.jpg'
import Background2 from '../assets/images/bg-image-2.jpg'
import Background3 from '../assets/images/bg-image-3.jpg'
import Background4 from '../assets/images/bg-image-4.jpg'
import Background5 from '../assets/images/bg-image-5.jpg'
import Background6 from '../assets/images/bg-image-6.jpg'
import Background7 from '../assets/images/bg-image-7.jpg'

export function BackgroundImage() {
  const images = [
    Background1, Background2, Background3, Background4,
    Background5, Background6, Background7, Background6
  ]

  const randomBackground = () => {
    const randomKey = Math.floor(Math.random() * images.length) 
    return images[randomKey]
  }

  return (
    <img 
      className="background-page" 
      src={randomBackground()} 
      alt="None of this" 
    />
  );
}