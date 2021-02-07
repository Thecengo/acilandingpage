import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar";
import StudentService from "components/services/StudentService";
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
    document.documentElement.classList.remove("nav-open");
    this.state = {
      errors: [],
      students: [],
      name: '',
      telNo: ' ',
      schoolName: ' ',
      sinif: '',
      birthDate: '',
      tcNo: ' ',
      veliName: '',
      veliTelNo: '',
      err: ''
    }
    this.addStudents = this.addStudents.bind(this);
  }

  componentDidMount() {
    document.body.classList.add("register-page");

    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }


  addStudents = (e) => {
    this.setStatesToEmpty();
    e.preventDefault();
    let student = {
      name: this.state.name, telNo: this.state.telNo, schoolName: this.state.schoolName, sinif: this.state.sinif,
      birthDate: this.state.birthDate,
      tcNo: this.state.tcNo, veli: { name: this.state.veliName, telNo: this.state.veliTelNo }
    };
    console.log(JSON.stringify(student));
    if (this.validateFields()) {
      StudentService.createStudents(student).then(res => {
        alertify.success(res.data.message);
        console.log(res)
      });
    }
    else {
      alertify.error('Bazı alanlar boş lütfen tüm alanları gözden geçiriniz');
    }
    
  }

  validateFields = () => {
    if (this.state.name === '' || this.state.schoolName === '' || this.state.birthDate === '' || this.state.sinif === ''
      || this.state.tcNo === '' || this.state.veliName === '' || this.state.veliTelNo === '' || this.state.telNo === '') {
      return false;
    }
    else {
      return true;
    }
  }

  setStatesToEmpty = () => {
    this.setState ({
      name: '', telNo:'', schoolName: '', sinif: '', birthDate: '', tcNo: '', veliName: '', veliTelNo: ''
    })
  }
  onChange = e => {
    const { name, value } = e.target;
    if (value !== '') {
      this.setState({
        [name]: value
      })
    }
  }

  render() {
    return (
      <>
        <MainNavbar />
        <div className="section section-dark-blue">
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="8">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Sınav Başvurusu</h3>
                  <h3 className="title">Lütfen tüm alanları doldurunuz</h3>
                  <Form className="register-form">
                    <label>Öğrenci adı</label>
                    <Input placeholder="Öğrenci adi" name="name" type="text"
                      value={this.state.name} onChange={this.onChange} />
                    <label>Telefon Numarası</label>
                    <Input placeholder="Telefon Numarasi" name="telNo" type="text"
                      value={this.state.telNo} onChange={this.onChange} />
                    <label>Okul Adı</label>
                    <Input placeholder="Okul Adi" name="schoolName" type="text"
                      value={this.state.schoolName} onChange={this.onChange} />
                    <label>Sınıfı</label>
                    <Input placeholder="Sınıfı" name="sinif" type="text"
                      value={this.state.sinif} onChange={this.onChange} />
                    <label>Doğum tarihi</label>
                    <Input type="date" name="birthDate" id="birthday" placeholder="date placeholder"
                      value={this.state.birthDate} onChange={this.onChange} />
                    <label>TC Kimlik No</label>
                    <Input placeholder="TC Kimlik No" name="tcNo" type="text"
                      value={this.state.tcNo} onChange={this.onChange} />
                    <label>Veli Adı</label>
                    <Input placeholder="Veli Adı" name="veliName" type="text"
                      value={this.state.veliName} onChange={this.onChange} />
                    <label>Veli Telefon Numarası</label>
                    <Input placeholder="Veli Telefon Numarası" name="veliTelNo" type="text"
                      value={this.state.veliTelNo} onChange={this.onChange} />
                    <Button block className="btn-round" color="danger" onClick={this.addStudents}>
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
}

export default RegisterPage;
