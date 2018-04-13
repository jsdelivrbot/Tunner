import React from "react";
import ReactDOM from "react-dom";

/*import Dependencies */
import YTSearch from "youtube-api-search";

/*Bootstrap Classes **/
import { Container, Row, Col } from "reactstrap";

/*import other component*/
import { HeaderBar } from "./component/header_bar";
import { SearchBar } from "./component/search_bar";
import { VideoList } from "./component/video_list";
import VideoDetails from "./component/video_details";

/*import css classes*/
import "../style/style.css";

/*Creating const variable  */
const API_KEY = "AIzaSyCWYBlZXOd3O69LIsjxRWxzjRgL9D8atHo";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoData: [],
      checkedVideo: null
    };

    YTSearch({ key: API_KEY, term: "Indira Gandhi" }, videoData => {
      this.setState({
        videoData: videoData,
        checkedVideo: videoData[0]
      });
      console.log("list Of Searched Videos", this.state.videoData);
    });
  }
  render() {
    return (
      <div>
        <Container className="container-fluid content-row">
          <Row>
            <Col>
              {" "}
              <HeaderBar />
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
              <VideoDetails video={this.state.checkedVideo} />
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <VideoList videoData={this.state.videoData} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
