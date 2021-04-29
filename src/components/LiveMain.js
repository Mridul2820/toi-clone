
const LiveMain = ({ liveNews }) => {

    return (
        <div>
        {liveNews &&
            <div className="liveNews__main">
                <img src={liveNews[0].fields.thumbnail} alt={liveNews[0].webTitle}/>
                <h2 className="liveNews__main-title">{liveNews[0].webTitle}</h2>
            </div>
        }
        </div>
    )
}

export default LiveMain
