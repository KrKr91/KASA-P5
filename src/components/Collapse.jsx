import { useState } from 'react'
import arrowBack from '../assets/arrow-back.png' 

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen) 
    }

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img 
                    src={arrowBack} 
                    alt="Ouvrir" 
                    className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`} 
                />
            </div>
            
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                <div className="collapse__text">{content}</div>
            </div>
        </div>
    )
}

export default Collapse