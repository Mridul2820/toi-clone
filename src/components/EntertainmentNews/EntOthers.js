import React from 'react'
import { truncate } from '../../utils'

const EntOthers = ({ entNews }) => {
    return (
        <div className="entertainment__leftBottom">
        {entNews && entNews.slice(1, 5).map(entNew => (
            <div key={entNew.id} className="entertainment__leftBottom--single">
                <div>
                    <img 
                        src={entNew.fields.thumbnail} 
                        alt={entNew.webTitle}
                    />
                </div>
                <p>
                    {truncate(entNew.webTitle, 50)}
                </p>
            </div>
        ))
        }
        </div>
    )
}

export default EntOthers
