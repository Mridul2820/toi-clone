import React from 'react'
import { truncate } from '../../utils'

const SportsNewsShorts = ({ sportsNews }) => {
    return (
        <div className="sportsNews__shorts">
        {sportsNews && sportsNews.slice(7, 14).map(sportsNew => (
            <ul key={sportsNew.id} className="entertainment__leftBottom--single">
                <li>
                    <a 
                        href={sportsNew.webUrl} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <span>{truncate(sportsNew.webTitle, 50)}</span>
                    </a>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default SportsNewsShorts
