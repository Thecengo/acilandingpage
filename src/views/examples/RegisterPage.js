import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <MainNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="8">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Sınav Başvurusu</h3>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Telefon Numarası</label>
                  <Input placeholder="Telefon Numarası" type="text" />
                  <label>Okul Adı</label>
                  <Input placeholder="Okul Adı" type="text" />
                  <label>Doğum tarihi</label>
                  <Input type="date" name="date" id="birthday" placeholder="date placeholder"/>
                  <label>TC Kimlik No</label>
                  <Input placeholder="TC Kimlik No" type="text" />
                  <label>Veli Adı</label>
                  <Input placeholder="Veli Adı" type="text" />
                  <label>Veli Telefon Numarası</label>
                  <Input placeholder="Veli Telefon Numarası" type="text" />
                  <Button block className="btn-round" color="danger">
                    Başvuru Yap
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, {" "}
            <i className="fa fa-heart heart" /> Biga Açı Koleji
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
