import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import MainNavbar from "components/Navbars/MainNavbar";
import { useHistory } from "react-router";
import Iletisim from "./Iletisim";

function LandingPage() {
  const history = useHistory();

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  
  return (
    <>
      <MainNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Bizim hakkımızda konuşalım!!</h2>
                <h5 className="description">
                  Uzman eğitim kadromuzla sizleri geleceğe hazırlıyor ve aynı zamanda
                  <em> bakış <strong>açınızı</strong> değiştiriyoruz</em> .
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  onClick={() => history.push("/kurumsal")}
                >
                  Detayları Gör
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <h4 className="info-title">Size sunduklarımız</h4>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Eğlenceli Eğitim Ortamı</h4>
                    <p className="description">
                      Eğlenirken öğrenme fırsatını burada yakalayacaksınız.
                      Hem eğlenecek hem de öğreneceksiniz.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Daha fazlası
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Yenilikçi Fikirler</h4>
                    <p>
                      Bilimsel yöntemleri takip ederek modern çağı yakalabiliyoruz ve
                      değişen dünyaya uyum sağlıyoruz.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Daha fazlası
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Istatistikler</h4>
                    <p>
                      Uzman eğitim kadromuzla başarıdan başarıya koşuyoruz ve 
                      bu koşuda sizleri yalnız bırakmıyoruz.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Daha fazlası
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Sağlam Temeller Atıyoruz</h4>
                    <p>
                      Eğitim modelimizle geleceğimizi şekillendiriyor. 
                      Asla yıkılmayacak temeller atıyoruz.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      Daha fazlası
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-gray text-center">
          <Container>
            <h2 className="title">Görüşler</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Nermin Aydın Şahin</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Bu kadar özveriyle çalışan başka personel var mı bilmiyorum. 
                    Çocuklarımızı kendi çocukları gibi benimseyip kucaklayan
                     öğretmen ve yönetici kadrosuyla gerçekten bize aile hissi veren muhteşem bir kurum.
                    İnsan için güvenden daha değerli ne olabilir ki? 
                    Bize kattığınız her şey için en büyük teşekkürlerimi size borç bilirim. 
                                           TEŞEKKÜRLER
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Filiz Özdemir</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Hiç bir an pişmanlık duymadan gözüm arkada kalmadan çocuğumu teslim ettiğim bir kurum
                    .Çocuğum güven ,mutluluk içinde eğitimini en güzel şekilde alıyor.
                    Tüm derslerde ellerinden gelenin en iyisini gerçekleştirmek için çaba sarf ediyorlar.
                    Çan' dan Biga' ya gidiyor öğrencim 1 saat erken gidip 1 saat geç geliyor.Düşününce değiyor
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ömer Yıldız</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Eğitim ve öğretim konusunda yılların birikimi ile  gerçek deneyime sahip 
                    yönetim ekibi ile nitelikli öğretmen kadrosunun bir araya geldiği BİGA da bulunan özel okulumuz.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section section-dark-blue text-center">
          <Container>
            <h2 className="title">Kademelerimiz</h2>
            <Row>
              <Col md="4">
                <Card className="card-just-text">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Ortaokul</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                       5 - 6 - 7  ve 8. sınıf öğreniclerimize hizmet veriyoruz.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-just-text">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Fen Lisesi</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                     Biga' nın ilk özel Fen Lisesi olarak 9, 10, 11, 12. sınıf öğrencilerimize hizmet vermekteyiz.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-just-text">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Anadolu Lisesi</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                         9, 10, 11, 12. sınıf öğrencilerimize hizmet vermekteyiz.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      <Iletisim/>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
