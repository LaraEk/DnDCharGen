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
                <Nav.Item className="eachTab" id="tabone">
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab" id="tabtwo">
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab" id="tabthree">
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab" id="tabfour">
                  <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                </Nav.Item>
                <Nav.Item className="eachTab" id="tabfive">
                  <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} id="justhiscol">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h1>first tab</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam ornare commodo dapibus. Fusce elementum diam aliquet
                    mi elementum lacinia. Proin at lobortis dolor. Fusce quis
                    turpis risus. Pellentesque a mi ac magna maximus commodo ac
                    eget urna. Aliquam nibh orci, elementum eu pulvinar eget,
                    iaculis a felis. Mauris ex turpis, pulvinar eget diam a,
                    bibendum porta lectus. Nam non tortor purus. Suspendisse
                    potenti.
                  </p>
                  <p>123456790</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h1>two'th tab</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                  <p>123456790</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h1>TAB 3</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </p>
                  <p>123456790</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>abcdefghijklmnopqrstuvwxyz</p>
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
