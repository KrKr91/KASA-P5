import { useState } from 'react'
import arrowLeft from '../assets/arrow-left.png' 
import arrowRight from '../assets/arrow-right.png'
import '../styles/Slideshow.css'

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)
    }

    const showControls = pictures.length > 1

    return (
        <div className="slideshow">
            {showControls && (
                <>
                    <img 
                        src={arrowLeft} 
                        alt="Précédent" 
                        className="slideshow__arrow slideshow__arrow--left" 
                        onClick={prevSlide} 
                    />
                    <img 
                        src={arrowRight} 
                        alt="Suivant" 
                        className="slideshow__arrow slideshow__arrow--right" 
                        onClick={nextSlide} 
                    />
                    <span className="slideshow__counter">
                        {currentIndex + 1} / {pictures.length}
                    </span>
                </>
            )}
            
            <img 
                src={pictures[currentIndex]} 
                alt="Intérieur du logement" 
                className="slideshow__image" 
            />
        </div>
    )
}

export default Slideshow