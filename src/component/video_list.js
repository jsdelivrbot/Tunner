import React from "react";
import ReactDOM from "react-dom";

import { VideoListItem } from "../component/video_list_item";
import { CardGroup } from "reactstrap";

export class VideoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.videoData.map(videoCard => (
          <VideoListItem
            className="card-deck"
            videoCard={videoCard}
            key={videoCard.etag}
            onLinkCliked={this.props.onVideoSelectFromList}
          />
        ))}
      </div>
    );
  }
}
