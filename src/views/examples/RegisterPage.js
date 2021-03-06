import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar";
import StudentService from "components/services/StudentService";
import SessionService from "components/services/SessionService";
import Swal from 'sweetalert2'
import SinavService from "components/services/SinavService";

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
    document.documentElement.classList.remove("nav-open");
    this.state = {
      errors: [],
      students: [],
      name: ' ',
      telNo: ' ',
      schoolName: ' ',
      sinif: ' ',
      tcNo: ' ',
      veliName: ' ',
      veliTelNo: ' ',
      sinavType: ' ',
      session: ' ',
      sessionOptions: [''],
      sinavTypes: ['']
    }
    this.addStudents = this.addStudents.bind(this);
  }
  componentDidMount() {
    document.body.classList.add("register-page");
    this.setState({
      sessionOptions: [],
      sinavTypes: []
    })
    let initialSinavType;
    SinavService.getSinavTypes().then(res =>
      res.data.map(data =>
        this.setState(state => {
          const sinavTypes = state.sinavTypes.concat(data)
          if(!initialSinavType) {
            initialSinavType = sinavTypes[0];
            state.sinavType = initialSinavType;
            this.getSessionsByType(initialSinavType);
          }
          console.log("initial type iç", initialSinavType)
          console.log("sinav types", sinavTypes)
          return { sinavTypes, }
        })
      )
    )
   
    console.log("initial type", initialSinavType)

    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }

  getSessionsByType = (type) => {
    let initialSessionType;
    SessionService.getSessionsBySinavType(type)
    .then(res => {
      res.data.map(data =>
        this.setState(state => {
          if (!initialSessionType) {
            initialSessionType = data.startTime
            state.session = initialSessionType
          }
          const sessionOptions = state.sessionOptions.concat(data.startTime)
          return { sessionOptions, }
        })
      )
    })
  }

  addStudents = (e) => {
    this.setStatesToEmpty();
    e.preventDefault();
    let student = {
      name: this.state.name, telNo: this.state.telNo, schoolName: this.state.schoolName, sinif: this.state.sinif,
      tcNo: this.state.tcNo, sinavType: this.state.sinavType, sessionTime: this.state.session,
      veli: { name: this.state.veliName, telNo: this.state.veliTelNo }
    };
    console.log(JSON.stringify(student));
    if (this.validateFields()) {
      StudentService.createStudents(student).then(res => {
        Swal.fire(
          'Harika!',
           res.data.message,
          'success'
        )
        console.log(res)
      });
    }
    else {
      Swal.fire(
        'Üzgünüz!',
        'Bazı alanlar boş!! Lütfen tüm alanları gözden geçiriniz',
        'error'
      )
    }
  }

  validateFields = () => {
    if (this.state.name === ' ' || this.state.schoolName === ' ' || this.state.sinif === ' '
      || this.state.tcNo === ' ' || this.state.veliName === ' ' || this.state.veliTelNo === ' ' || this.state.telNo === ' ') {
      return false;
    }
    else {
      return true;
    }
  }

  setStatesToEmpty = () => {
    this.setState({
      name: ' ', telNo: ' ', schoolName: ' ', sinif: ' ', tcNo: ' ', veliName: ' ', veliTelNo: ' '
    })
  }

  onChange = e => {
    const { name, value } = e.target;
    if (name === 'sinavType') {
      this.setState({
        sessionOptions: []
      })
      SessionService.getSessionsBySinavType(value)
        .then(res => {
          res.data.map(data =>
            this.setState(state => {
              const sessionOptions = state.sessionOptions.concat(data.startTime)
              return { sessionOptions, }
            })
          )
        })
    }
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
                    <label>Sınav tipi</label>
                    <Input type="select" name="sinavType"
                      value={this.state.sinavType} onChange={this.onChange} >
                      {this.state.sinavTypes.map((sinav) => (
                        <option value={sinav}>{sinav}</option>
                      ))}
                    </Input>
                    <label>Oturum</label>
                    <Input type="select" name="session"
                      value={this.state.session} onChange={this.onChange} >
                      {this.state.sessionOptions.map((option) => (
                        <option value={option}>{option}</option>
                      ))}
                    </Input>
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
