
import './TopicSelector.scss';

const TopicSelector = ({name}) => {

    const topics = ['Not this topic', `Not ${name}\'s posts`, 'Not appropriate for LinkedIn'];

    return (
        <div className="topic-selection">
            <div className="topic-selection__header">
                <div className="topic-selection__title">Post removed from your feed</div>
                <button className="topic-selection__undo">Undo</button>
            </div>
            <div className="topic-selection__container-title">
                Tell us more so we can adjust your feed.
            </div>
            <div className="topic-selection__topic-container">
                {topics.map( (topic, index) => {
                    return (<div className="topic-selection__topic" key={index}>{topic}</div>)
                })}
            </div>
        </div>
    )
}

export default TopicSelector