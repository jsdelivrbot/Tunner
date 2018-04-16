import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

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
// import "../style/style.css";

/*Creating const variable  */
const API_KEY = "AIzaSyCWYBlZXOd3O69LIsjxRWxzjRgL9D8atHo";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoData: [],
      checkedVideo: null
    };
    this.onVideoQuest("Giripremi Mountain");
  }

  onVideoQuest(searchText) {
    YTSearch({ key: API_KEY, term: searchText }, videoData => {
      this.setState({
        videoData: videoData,
        checkedVideo: videoData[0]
      });
      console.log("list Of Searched Videos", this.state.videoData);
    });
  }

  //to set seleceted video data
  // below can be written in line : onVideoSelectFromList method
  // onVideoSelectFromList(checkedVideo){
  //   this.setState({
  //     checkedVideo:checkedVideo
  //   })
  // }

  render() {
    const serachVideoAfter = _.debounce(searchText => {
      this.onVideoQuest(searchText);
    });

    return (
      <div>
        <Container className="container-fluid content-row">
          <Row>
            <Col>
              <HeaderBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <SearchBar onQuestTextChange={serachVideoAfter} />
            </Col>
          </Row>
          <hr className="hr-rule" />
          <Row>
            <Col>
              <VideoDetails video={this.state.checkedVideo} />
            </Col>
          </Row>
          <hr className="hr-rule" />
          <Row>
            <VideoList
              videoData={this.state.videoData}
              onVideoSelectFromList={checkedVideo =>
                this.setState({ checkedVideo })
              }
            />
          </Row>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
