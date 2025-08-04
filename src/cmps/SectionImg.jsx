export function SectionImg({ imgSrc, caption }) {
    return (
        <div className="frame">
            <img src={imgSrc} alt={caption} />
            <span className="caption">{caption}</span>
        </div>
    );
};