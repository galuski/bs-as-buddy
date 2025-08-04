export function HeroPicture({ imgSrc, caption }) {

    return (
        <div className="polaroid">
            <figure>
                <img src={imgSrc} alt={caption} title={caption} />
                <figcaption>{caption}</figcaption>
            </figure>
        </div>
    )
}