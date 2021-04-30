import { truncate } from "../../utils";

const NewsVideos = ({ liveNews }) => {
    return (
        <div className="newsVideos">
        {liveNews && liveNews.slice(14, 19).map(newsVideo => (
            <div key={newsVideo.id} className="newsVideos__single">
                <div className="newsVideos__img">
                    <img 
                        src={newsVideo.fields.thumbnail} 
                        alt={newsVideo.webTitle}
                    />
                </div>
                <p>{truncate(newsVideo.webTitle, 60)}</p>
            </div>
        ))

        }
        </div>
    )
}

export default NewsVideos
