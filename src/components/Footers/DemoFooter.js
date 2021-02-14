import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";

function DemoFooter() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="primary">
              <p> <i class="fa fa-map-marker"></i>Şirintepe Mh.453.Sok:no:2-6 Biga/ÇANAKKALE</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="primary">
              <p> <i class="fa fa-phone"></i>0505 759 27 64</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="primary">
              <p> <i class="fa fa-envelope"></i>bigaacilisesi@gmail.com</p>
            </div>
          </Col>
        </Row>
        <Row>
          <nav className="footer-nav">
            <ul>
              <Button
                className="btn-just-icon btn-primary"
                color="link"
                href="https://www.facebook.com/%C3%96zel-Biga-A%C3%A7%C4%B1-Koleji-298246874082356/?ref=page_internal"
              //onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook" />
              </Button>
              <Button
                className="btn-just-icon btn-primary"
                color="link"
                href="https://www.facebook.com/%C3%96zel-Biga-A%C3%A7%C4%B1-Koleji-298246874082356/?ref=page_internal"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
              <Button
                className="btn-just-icon btn-primary"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-linkedin" />
              </Button>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "} Biga Açı Koleji
              <i className="fa fa-heart heart" />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
