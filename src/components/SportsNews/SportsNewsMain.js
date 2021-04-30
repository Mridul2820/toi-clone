import React from 'react'
import { truncate } from '../../utils'

const SportsNewsMain = ({ sportsNews }) => {
    return (
        <div className="sportsNews__main">
        {sportsNews && 
            <a 
                href={sportsNews[0].webUrl} 
                target="_blank" 
                rel="noreferrer"
            >
                <img 
                    src={sportsNews[0].fields.thumbnail} 
                    alt={sportsNews[0].webTitle}
                />
                <h2 className="sportsNews__main-title">
                    {truncate(sportsNews[0].webTitle, 75)}
                </h2>                    
            </a>
        }
        </div>
    )
}

export default SportsNewsMain
