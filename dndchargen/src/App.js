import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./appstyles.scss";
import MainContainer from "./Components/MainContainer/MainContainer.jsx";
import MyCharacter from "./Components/MyCharacter/MyCharacter.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Container fluid={false} className="overallContainer">
          <Row>
            <Col xs={12} sm={9}>
              <MainContainer />
            </Col>
            <Col xs={12} sm={3}>
              <MyCharacter />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
