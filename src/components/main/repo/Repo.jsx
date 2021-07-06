import React from 'react'
import './Repo.less'

export const Repo = ({ repo }) => {
    return (
        <div className='repo'>
            <div className='repo-header'>
                <div className='repo-header-name'>{repo.name}</div>
                <div className='repo-header-stars'>Stars: {repo.stargazers_count}</div>
            </div>
            <div className='repo-last-commit'>Last commit: {repo.updated_at}</div>
            <a href={repo.html_url} target='_blank' className='repo-link'>
                Repo link: {repo.html_url}
            </a>
        </div>
    )
}
