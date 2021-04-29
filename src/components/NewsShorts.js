import React from 'react'

const NewsShorts = ({ liveNews }) => {
    return (
        <div className="newsShorts">
        {liveNews && liveNews.map(liveShorts => (
            <ul key={liveShorts.id} className="newsShorts__single">
                <li>
                    <span>
                        {liveShorts.webTitle}
                    </span>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default NewsShorts
