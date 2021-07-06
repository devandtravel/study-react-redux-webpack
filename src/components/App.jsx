import './App.less'

import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Main } from './main/Main'

const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <div className='container'>
                <Route path='/' component={Main} />
            </div>
        </BrowserRouter>
    )
}

export default App
