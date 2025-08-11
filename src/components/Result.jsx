import '../styles/Result.css'

export default function Result() {

    return (
        <div className="result">
            <h1 className="result__title">Your Result</h1>
            <div className="result__circle">
                <p className="result__circle-score">76</p>
                <p className="result__circle-maximum">of 100</p>
            </div>
            <div className="result__evaluation">
                Great
            </div>
            <div className="result__comparison">
                You scored higher than 65% of the people who have taken these tests.
            </div>
        </div>
    )
}