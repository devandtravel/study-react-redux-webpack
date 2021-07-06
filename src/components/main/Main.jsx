import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../reducers/reposReducer'
import { getRepos } from '../actions/repos'
import './Main.less'
import { Repo } from './repo/Repo'
import { createPages } from '../../utils/pagesCreator'

export const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const [searchValue, setSearchValue] = useState('')

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []
    
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    return (
        <>
            <div className='search'>
                <input
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    type='text'
                    className='search-input'
                    placeholder='Type repo name'
                />
                <button onClick={() => searchHandler()} className='search-btn'>
                    Search
                </button>
            </div>
            {!isFetching ? (
                repos.map(repo => <Repo repo={repo} key={repo.name + Date.now()} />)
            ) : (
                <div className='fetching'></div>
            )}
            <div className='pages'>
                {pages.map((page, index) => (
                    <span
                        key={index}
                        onClick={() => dispatch(setCurrentPage(page))}
                        className={currentPage == page ? 'current-page' : 'page'}>
                        {page}
                    </span>
                ))}
            </div>
        </>
    )
}
