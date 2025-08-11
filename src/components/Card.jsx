import Result from './Result'
import Summary from './Summary'

import '../styles/Card.css'

export default function Card() {

    return (
        <div className="card">
            <Result />
            <Summary />
        </div>
    )
}