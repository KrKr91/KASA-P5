import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse' 
import starActive from '../assets/star-active.png'
import starInactive from '../assets/star-inactive.png'

function Logement() {
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)

    if (!logement) {
        return <Navigate to="/404" replace />
    }

    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="logement">
            <Slideshow pictures={logement.pictures} />
            
            <div className="logement__content">
                <div className="logement__info">
                    <h1 className="logement__title">{logement.title}</h1>
                    <p className="logement__location">{logement.location}</p>
                    <div className="logement__tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="logement__tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="logement__host-container">
                    <div className="logement__host">
                        <span className="logement__host-name">
                            {logement.host.name.split(' ')[0]} <br />
                            {logement.host.name.split(' ')[1]}
                        </span>
                        <img 
                            src={logement.host.picture} 
                            alt={logement.host.name} 
                            className="logement__host-picture" 
                        />
                    </div>
                    
                    <div className="logement__rating">
                        {stars.map((star) => (
                            <img 
                                key={star} 
                                src={star <= parseInt(logement.rating) ? starActive : starInactive} 
                                alt={star <= parseInt(logement.rating) ? "Étoile rouge" : "Étoile grise"} 
                                className="logement__star"
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="logement__collapses">
                <div className="logement__collapse-item">
                    <Collapse 
                        title="Description" 
                        content={logement.description} 
                    />
                </div>
                <div className="logement__collapse-item">
                    <Collapse 
                        title="Équipements" 
                        content={
                            <ul className="logement__equipments-list">
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        } 
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Logement