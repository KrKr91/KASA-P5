import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow' 

function Logement() {
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)

    if (!logement) {
        return <Navigate to="/404" replace />
    }

    return (
        <div className="logement">
            <Slideshow pictures={logement.pictures} />
            
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
        </div>
    )
}

export default Logement