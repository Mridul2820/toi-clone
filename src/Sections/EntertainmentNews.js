import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import axios from 'axios';
import { truncate } from "../utils";

const baseURL = 'https://content.guardianapis.com'
const apiKey = `api-key=${process.env.REACT_APP_API_KEY}`

const EntertainmentNews = () => {

    const [entNews, setEntNews] = useState()

    const fetchEntNews = async() => {
        const dataEntNews = await axios.get(`${baseURL}/search?q=india&tag=film/film,tone/reviews&page-size=12&show-fields=thumbnail&${apiKey}`)

        console.log(dataEntNews.data.response.results);

        setEntNews(dataEntNews.data.response.results)
    }

    useEffect(() => {
        fetchEntNews()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="entertainment">
            <span className="double-dot-line"></span>
            <h1 className="entertainment__heading">
                Entertainment 
                <ArrowForwardIosIcon className="heading-arrow" />
            </h1>

            <div className="entertainment__wrapper">
                <div className="entertainment__left">
                    <div className="entertainment__leftMain">
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
                        <div className="entertainment__leftBottom">
                        {entNews && entNews.slice(0, 4).map(entNew => (
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
                    </div>
                    <div className="entertainment__leftShorts">
                    {entNews && entNews.map(entNew => (
                        <ul key={entNew.id} className="entertainment__leftBottom--single">
                            <li>
                                <span>{entNew.webTitle}</span>
                            </li>
                        </ul>
                    ))
                    }
                    </div>
                </div>
                <div className="entertainment__right">
                    <h2>
                        ETIMES PHOTOS
                        <ArrowForwardIosIcon className="heading-arrow" />
                    </h2>
                    <div className="entertainment__rightImages">
                    {entNews && entNews.slice(0, 9).map(entNew => (
                        <div key={entNew.id} className="entertainment__leftBottom--single">
                            <div>
                                <img 
                                    src={entNew.fields.thumbnail} 
                                    alt={entNew.webTitle}
                                />
                                <h3 className="count">
                                    <CropOriginalIcon className="img-icon" />
                                    10
                                </h3>
                            </div>
                            <p>
                                {truncate(entNew.webTitle, 25)}
                            </p>
                        </div>
                    ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntertainmentNews
