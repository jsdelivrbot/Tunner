import React from 'react'

const VideoDetails = ({ video }) => {

    if(!video){
        return <div>Loading</div>
    }
    const videoId=video.id.videoId;
    const videoUrl='https://www.youtube.com/embed/'+videoId;



    return (
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen>
                </iframe>
            </div>
    )
};

export default VideoDetails;