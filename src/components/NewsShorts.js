import React from 'react'

const NewsShorts = ({ liveOthers }) => {
    return (
        <div className="newsShorts">
        {liveOthers && liveOthers.map(liveOther => (
            <ul key={liveOther.id} className="newsShorts__single">
                <li>
                    <span>
                        {liveOther.webTitle}
                    </span>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default NewsShorts
