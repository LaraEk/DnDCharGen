import React, { Component } from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import "./maincontainer.scss";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">belg</Tab.Pane>
                <Tab.Pane eventKey="second">blhe</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      //   <div>
      //     <Container>
      //       <Row>
      //         <Col />
      //       </Row>
      //     </Container>
      //     boop boop
      //   </div>
    );
  }
}

export default MainContainer;
