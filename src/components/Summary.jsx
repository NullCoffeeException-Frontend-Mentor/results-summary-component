import '../styles/Summary.css'
import reaction from '../assets/images/icon-reaction.svg'
import memory from '../assets/images/icon-memory.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'

import ScoreBox from './ScoreBox.jsx'

export default function Summary() {

    return (
        <div className="summary">
            <h2 className="summary__title">Summary</h2>
            
            <ScoreBox style="reaction" img={reaction} subject="Reaction" score="80"/>
            <ScoreBox style="memory" img={memory} subject="Memory" score="92"/>
            <ScoreBox style="verbal" img={verbal} subject="Verbal" score="61"/>
            <ScoreBox style="visual" img={visual} subject="Visual" score="72"/>

            <button>
                Continue
            </button>
        </div>
    )
}