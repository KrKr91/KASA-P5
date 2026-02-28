import Banner from '../components/Banner.jsx'
import Collapse from '../components/Collapse.jsx'
import imgAboutBanner from '../assets/about-banner.png'
import '../styles/About.css' 

function About() {
    const aboutData = [
        {
            id: "1",
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            id: "2",
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: "3",
            title: "Service",
            content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            id: "4",
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

    return (
        <div className="about">
            <Banner image={imgAboutBanner} />
            <div className="about__container">
                {aboutData.map((item) => (
                    <Collapse 
                        key={item.id} 
                        title={item.title} 
                        content={item.content} 
                    />
                ))}
            </div>
        </div>
    )
}

export default About