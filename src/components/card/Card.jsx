import React from 'react'

export const Card = ({history}) => {
    return (
        <div>
            <button className='back-btn' onClick={() => history.goBack()}>
                BACK
            </button>
            card repo
        </div>
    )
}
