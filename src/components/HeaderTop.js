import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import YouTubeIcon from '@material-ui/icons/YouTube';

const HeaderTop = () => {

    const date = new Date()
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getDay = days[date.getDay()]

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const getMonth = months[date.getMonth()]
    const getMonthInt = date.getMonth()

    const year = date.getFullYear()
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })


    return (
        <div className="headerTop">
            <div className="headerTop__left">
                <p>EDITION <span>IN</span><ExpandMoreIcon /></p>
                <p>{`${getDay}, ${getMonth} ${getMonthInt}, ${year} | UPDATED ${time} IST` }</p>
                <p>Kolkata 35°C</p>
            </div>
            <p className="headerTop__right">
                <p>
                    Sign In 
                    <TwitterIcon /> 
                    <FacebookIcon />  
                    <RssFeedIcon />
                    <YouTubeIcon />
                </p>
            </p>
            
        </div>
    )
}

export default HeaderTop
