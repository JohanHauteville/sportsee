const backgroundColor = {

}


function InfoCard({ icon, title, value, mesureUnit }) {
    return (
        <article>
            <img src={icon} alt={title} />
            <div>
                <h4>{value}{mesureUnit}</h4>
                <p>{title}</p>

            </div>
        </article>
    )
}

export default InfoCard