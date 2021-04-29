import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LiveMain from '../components/LiveMain'
import LiveOthers from '../components/LiveOthers'
import NewsShorts from '../components/NewsShorts'
import NewsVideos from '../components/NewsVideos'

const baseURL = 'https://content.guardianapis.com'
const apiKey = `api-key=${process.env.REACT_APP_API_KEY}`

const LiveNews = () => {
    const [liveOthers, setLiveOthers] = useState()

    const fetchLiveOthers = async() => {
        const dataLiveOthers = await axios.get(`${baseURL}/search?q=india&page-size=12&show-fields=thumbnail&${apiKey}`)

        // console.log(dataLiveOthers.data.response.results);

        setLiveOthers(dataLiveOthers.data.response.results)
    }

    useEffect(() => {
        fetchLiveOthers()
        // eslint-disable-next-line
    }, [])

    
    return (
        <div className="liveNews">
            <div className="liveNews__left">
                <LiveMain />
                <LiveOthers liveOthers={liveOthers} />
            </div>

            <div className="liveNews__center">
                <NewsVideos />
            </div>
            <div className="liveNews__right">
                <NewsShorts liveOthers={liveOthers}/>
            </div>

        </div>
    )
}

export default LiveNews
