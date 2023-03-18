import React from "react"
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='section error-page'>
            <div className="error-container">
                <h1>ooops! it's a dead end... U-turn, quick!</h1>
                <Link to='/' className='button btn-primary'>
                    back home
                </Link>
            </div>
        </section>
    )
}

export default Error