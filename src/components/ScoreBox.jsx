import '../styles/ScoreBox.css'

export default function ScoreBox({ style, img, subject, score }) {
    
    return (
        <div className={`scorebox scorebox--${style}`}>
            <img src={`${img}`} />
            <p>
                {subject}
            </p>
            <p>
                {score}<span> / 100</span>
            </p>
        </div>
    )
}