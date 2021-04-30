import React from 'react'
import { truncate } from "../../utils";

const SportsNewsRight = ({ sportsNews }) => {
    return (
        <div className="sportsNews__right">
        {sportsNews && sportsNews.slice(15, 20).map(sportsNew => (
            <a
                key={sportsNew.id} 
                href={sportsNew.webUrl} 
                target="_blank" 
                rel="noreferrer"
            >
                <div className="sportsNews__rightSingle">
                    <p>{truncate(sportsNew.webTitle, 80)}</p>
                    <div>
                        <img 
                            src={sportsNew.fields.thumbnail} 
                            alt={sportsNew.webTitle}
                        />
                    </div>
                </div>
            </a>
        ))
        }
        </div>
    )
}

export default SportsNewsRight
