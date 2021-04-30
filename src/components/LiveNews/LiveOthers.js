import { truncate } from "../../utils";

const LiveOthers = ({ liveNews }) => {
    return (
        <div className="liveOthers">
        {liveNews && liveNews.slice(1, 13).map(liveNew => (
            <div key={liveNew.id} className="liveOther__single">
                <p>{truncate(liveNew.webTitle, 50)}</p>
                <div className="liveOther__img">
                    <img src={liveNew.fields.thumbnail} alt={liveNew.webTitle}/>
                </div>
            </div>
        ))
        }
        </div>
    )
}

export default LiveOthers
