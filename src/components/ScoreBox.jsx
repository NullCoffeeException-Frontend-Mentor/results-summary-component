import '../styles/ScoreBox.css'

export default function ScoreBox({ style, img, subject, score }) {
    
    return (
        <div className={`scorebox scorebox--${style}`}>
            <img src={`${img}`} className="scorebox__image" />
            <p>
                {subject}
            </p>
            <p className="scorebox__score">
                {score}<span className="scorebox__score-maximum">/ 100</span>
            </p>
        </div>
    )
}