import '../styles/Summary.css'

import ScoreBox from './ScoreBox.jsx'

export default function Summary() {

    return (
        <div className="summary">
            <h2 className="summary__title">Summary</h2>
            
            <ScoreBox img="../assets/images/icon-reaction.svg" subject="Reaction" score="80"/>
            <ScoreBox img="../assets/images/icon-memory.svg" subject="Memory" score="92"/>
            <ScoreBox img="../assets/images/icon-verbal.svg" subject="Verbal" score="61"/>
            <ScoreBox img="../assets/images/icon-visual.svg" subject="Visual" score="72"/>

            <button>
                Continue
            </button>
        </div>
    )
}