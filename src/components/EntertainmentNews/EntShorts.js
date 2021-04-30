import React from 'react'

const EntShorts = ({ entNews }) => {
    return (
        <div className="entertainment__leftShorts">
        {entNews && entNews.slice(15, 27).map(entNew => (
            <ul key={entNew.id} className="entertainment__leftBottom--single">
                <li>
                    <span>{entNew.webTitle}</span>
                </li>
            </ul>
        ))
        }
        </div>
    )
}

export default EntShorts
