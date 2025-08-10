

export default function ScoreBox({ img, subject, score }) {
    
    return (
        <>
            <img src={`${img}`} />
            <p>
                {subject}
            </p>
            <p>
                {score}<span> / 100</span>
            </p>
        </>
    )
}