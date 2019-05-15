import React from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import "./maincontainer.scss";

class MainContainer extends React.Component {
  render() {
    return (
      <div className="borderwrap">
        <Tab.Container
          transition={false}
          id="generatortabs"
          defaultActiveKey="first"
        >
          <Row id="boop">
            <Col sm={3}>
              <Nav variant="tabs" className="flex-column">
                <Nav.Item className="eachTab">
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab">
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab">
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab">
                  <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab">
                  <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>test tab pane 1</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>test tab pane 2</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>test tab pane 3</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p>test tab pane 4</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <p>test tab pane 5</p>
                </Tab.Pane>
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
