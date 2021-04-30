import React from 'react'
import { truncate } from '../../utils'

const EntMain = ({ entNews }) => {
    return (
        <>
        {entNews && 
            <div className="entertainment__leftTop">
                <img 
                    src={entNews[0].fields.thumbnail} 
                    alt={entNews[0].webTitle}
                />
                <h2 className="liveNews__main-title">
                    {truncate(entNews[0].webTitle, 75)}
                </h2>
            </div>
        }
        </>
    )
}

export default EntMain
