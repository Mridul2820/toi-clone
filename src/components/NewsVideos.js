import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseURL = 'https://content.guardianapis.com'
const apiKey = `api-key=${process.env.REACT_APP_API_KEY}`

const NewsVideos = () => {
    const [newsVideos, setNewsVideos] = useState()

    const fetchNewsVideos = async() => {
        const dataNewsVideos = await axios.get(`${baseURL}/search?q=india&page-size=5&show-fields=thumbnail&show-elements=video&${apiKey}`)

        // console.log(dataNewsVideos.data.response.results);

        setNewsVideos(dataNewsVideos.data.response.results)
    }

    useEffect(() => {
        fetchNewsVideos()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="newsVideos">
        {newsVideos && newsVideos.map(newsVideo => (
            <div key={newsVideo.id} className="newsVideos__single">
                <div className="newsVideos__img">
                    <img 
                        src={newsVideo.fields.thumbnail} 
                        alt={newsVideo.webTitle}
                    />
                </div>
                <p>{newsVideo.webTitle}</p>
            </div>
        ))

        }
        </div>
    )
}

export default NewsVideos
