import React from "react";

import {
  Col,
  CardBody,
  CardTitle,
  CardText,
  small,
  CardHeader,
  CardFooter
} from "reactstrap";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }
  const videoId = video.id.videoId;
  const videoUrl = "https://www.youtube.com/embed/" + videoId;

  return (
    <div>
      <Col sm="12" lg="8" xs="12" className="c-display-flex">
        <div className="embed-responsive embed-responsive-16by9 ">
          <iframe
            className="embed-responsive-item one-edge-shadow"
            src={videoUrl}
            allowFullScreen
          />
        </div>
      </Col>
      <Col lg="4" sm="0" xs="0" className="c-display-flex">
        <div className="card wow fadeIn  video-edges" data-wow-delay="0.2s">
          <div className="view overlay hm-white-slight myelement">
            <img
              className="card-img-top video-edges myelement"
              width="100%"
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </div>

          <div className="card-block">
            <CardBody className="extra-padding">
              <CardTitle>{video.snippet.title}</CardTitle>
              <hr />
              <CardText>{video.snippet.description}</CardText>
            </CardBody>
            <CardFooter>
              <CardText>
                <small className="text-muted">
                  Published at
                  {video.snippet.publishedAt}
                </small>
              </CardText>
            </CardFooter>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default VideoDetails;
