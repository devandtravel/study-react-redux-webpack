import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCurrentRepo, getContributors } from '../actions/repos'
import './Card.less'

export const Card = ({ history }) => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({ owner: {} })
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])

    return (
        <div>
            <button className='back-btn' onClick={() => history.goBack()}>
                BACK
            </button>
            <div className='card'>
                <img src={repo.owner.avatar_url} alt={repo.name} />
                <div className='name'>{repo.name}</div>
                <div className='stars'>{repo.stargazers_count}</div>
            </div>
            {contributors.map((contributor, index) => (
                <div key={index}>
                    {index + 1}. {contributor.login}
                </div>
            ))}
        </div>
    )
}
