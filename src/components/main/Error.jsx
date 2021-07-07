import React from 'react'

const Error = ({ history }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>ERROR</h1>
            <button onClick={() => history.push('/')}>RETURN TO MAIN PAGE</button>
        </div>
    )
}

export default Error
