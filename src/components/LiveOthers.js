
const LiveOthers = ({ liveOthers }) => {
    return (
        <div className="liveOthers">
        {liveOthers && liveOthers.map(liveOther => (
            <div key={liveOther.id} className="liveOther__single">
                <p>{liveOther.webTitle}</p>
                <div className="liveOther__img">
                    <img src={liveOther.fields.thumbnail} alt={liveOther.webTitle}/>
                </div>
            </div>
        ))
        }
        </div>
    )
}

export default LiveOthers
