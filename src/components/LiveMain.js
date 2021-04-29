import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseURL = 'https://content.guardianapis.com'
const apiKey = `api-key=${process.env.REACT_APP_API_KEY}`
const liveNewsMain = 'world/live/2021/apr/29/coronavirus-live-news-world-nears-150m-cases-facebook-blocks-hashtag-calling-for-modi-to-resign'

const LiveMain = () => {
    const [liveMain, setLiveMain] = useState()

    const fetchLiveMain = async() => {
        const dataMain  = await axios.get(`${baseURL}/${liveNewsMain}?${apiKey}&show-fields=thumbnail`)

        // console.log(dataMain.data.response.content);

        setLiveMain(dataMain.data.response.content)
    }

    useEffect(() => {
        fetchLiveMain()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
        {liveMain &&
            <div className="liveNews__main">
                <img src={liveMain.fields.thumbnail} alt={liveMain.webTitle}/>
                <h2 className="liveNews__main-title">{liveMain.webTitle}</h2>
            </div>
        }
        </div>
    )
}

export default LiveMain
