import './style.scss'

function InfoCard({ icon, title, value, mesureUnit }) {

    const classIconBackground = `info-card__img info-card__img--${title.toLowerCase()}`
    return (
        <article className="info-card">
            <img src={icon} alt={title} className={classIconBackground} />
            <div className="info-card__text">
                <h4>{value}{mesureUnit}</h4>
                <p>{title}</p>
            </div>
        </article>
    )
}

export default InfoCard