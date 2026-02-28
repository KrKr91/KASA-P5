import Banner from '../components/Banner'
import Card from '../components/Card'
import logements from '../data/logements.json' 
import imgHomeBanner from '../assets/home-banner.png'
import '../styles/Home.css' 

function Home() {
    return (
        <div className="home">
            <Banner image={imgHomeBanner} text="Chez vous, partout et ailleurs" />
            
            <div className="home__gallery">
                {logements.map((logement) => (
                    <Card 
                        key={logement.id} 
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home