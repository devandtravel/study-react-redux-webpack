import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../actions/repos'
import './Main.less'
import { Repo } from './repo/Repo'

export const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    const searchHandler = () => {
        dispatch(getRepos(searchValue))
    }

    return (
        <div>
            <div className='search'>
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type='text' className='search-input' placeholder='Type repo name' />
                <button onClick={() => searchHandler()} className='search-btn'>Search</button>
            </div>
            {!isFetching ? (
                repos.map(repo => <Repo repo={repo} key={repo.name + Date.now()} />)
            ) : (
                <div className='fetching'></div>
            )}
        </div>
    )
}
