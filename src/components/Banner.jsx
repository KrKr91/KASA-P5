import '../styles/Banner.scss'

function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} alt="Bannière Kasa" className="banner__img" />
            <div className="banner__overlay"></div>
            {text && <h1 className="banner__text">{text}</h1>}
        </div>
    )
}

export default Banner