import React from 'react';
import ReactDOM from 'react-dom';

import {VideoListItem} from '../component/video_list_item';
import {CardGroup} from 'reactstrap';

export class VideoList extends React.Component {
    render(){
        return(
            <CardGroup>
            {this.props.videoData.map(videoCard=>
                <VideoListItem videoCard={videoCard} key={videoCard.etag}/>
            )}
            </CardGroup>
        )
    }
}