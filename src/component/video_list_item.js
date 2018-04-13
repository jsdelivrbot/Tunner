import React from 'react';

import {
    ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    CardImg, Card, CardBody, CardTitle, CardText, CardSubtitle, small,
    CardLink
} from 'reactstrap';


export class VideoListItem extends React.Component {

    render() {

        const imgUrl=this.props.videoCard.snippet.thumbnails.default.url;
        const videoUrl='https://www.youtube.com/embed/'+
        this.props.videoCard.id.videoId;
        

        return (
            <div className="col-lg-4 d-flex flex-row">
                <div className="card wow fadeIn" data-wow-delay="0.2s">
                    <div className="view overlay hm-white-slight">
                        <img className="card-img-top" 
                         width='100%'
                         src='https://vignette.wikia.nocookie.net/witchcraft-works/images/6/60/No_Image_Available.png/revision/latest?cb=20140205183208'
                         alt={this.props.videoCard.snippet.title} />
                    </div>

                    <div className="card-block">
                        <CardBody>
                            <CardTitle>{this.props.videoCard.snippet.title}</CardTitle>
                            <hr />
                            <CardText>{this.props.videoCard.snippet.description}</CardText>
                            <CardText>
                                <small className="text-muted">Published at {this.props.videoCard.snippet.publishedAt}</small>
                            </CardText>
                            <CardLink href={videoUrl}>See Video</CardLink>
                        </CardBody>
                    </div>

                </div>
            </div>
        )
    }
}


        // const videoUrl='https://www.youtube.com/embed/'+
        // this.props.videoCard.id.videoId;

        //<div className="embed-responsive embed-responsive-16by9">
        //<iframe className="embed-responsive-item" src={selectedVideo.videoUrl} allowFullScreen>
        //</iframe>
        //</div>