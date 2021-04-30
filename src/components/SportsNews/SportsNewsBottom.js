import React from 'react'
import { truncate } from '../../utils'

const SportsNewsBottom = ({ sportsNews }) => {
    return (
        <div className="sportsNews__leftBottom">
        {sportsNews && sportsNews.slice(1, 5).map(sportsNew => (
            <a 
                key={sportsNew.id} 
                href={sportsNew.webUrl} 
                target="_blank" 
                rel="noreferrer"
            >
                <div className="entertainment__leftBottom--single">
                    <div>
                        <img 
                            src={sportsNew.fields.thumbnail} 
                            alt={sportsNew.webTitle}
                        />
                    </div>
                    <p>
                        {truncate(sportsNew.webTitle, 50)}
                    </p>
                </div>
            </a>
        ))
        }
        </div>
    )
}

export default SportsNewsBottom
