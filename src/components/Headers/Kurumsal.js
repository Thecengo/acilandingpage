import MainNavbar from 'components/Navbars/MainNavbar';
import React, { Component } from 'react';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';

class Kurumsal extends Component {
    render() {
        return (
            <>
                <MainNavbar />
                    <div className="section section-dark">
                        <Card>
                            <CardBody>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <div className="text-center">
                                        <CardTitle tag="h4">Hakkımızda</CardTitle>
                                    </div>
                                </a>
                                <p className="card-description text-center">
                                    Kurulduğu günden beri kaliteli eğitimin yegane adresi olarak,
                                    geleceği inşa etme hedefi ile yola çıkmış bulunuyoruz. Yılların verdiği deneyimle,
                                    uygun metodolijilerle değerli öğrencilerimizi güzel bir kariyer yolculuğuna hazırlıyoruz.

                                    Uzman eğitmen kadromuzla modern eğitim yöntemlerini uygulayarak, öğrencilerimize en verimli
                                    eğitimi veriyoruz. Bölgemizde birçok ilke imza atmanın gururunu yaşıyoruz. Ortaokul, Anadolu Lisesi
                                    ve Fen Lisesi Kademelerimiz ile öğrencilerimize hizmet vermekteyiz. Eğitimin yanısıra kültürel, sanatsal,
                                    spor aktiviteleriyle öğrencilerimizin kaliteli ve verimli vakit geçirmesine yardımcı oluyoruz.
                                    Uzaktan eğitim programları ve rehberlik meslek tanıtım videoları alanında örnek olmuştur.
                                    Açı Eğitim Kurumları, öğrenci rehberliğinde yapmış olduğu özgün ve tutarlı çalışmalarıyla yeniliklerin ve aydınlık geleceğin hazırlayıcısı olmuştur.
                                    Açı Eğitim Kurumları, şubelerinde alana özel eğitim ile bir farklılığın öncüsü olmuştur.
                                    Açı Eğitim Kurumları, düzey belirleme sınavlarıyla oluşturduğu seviye grupları ile öğrencilerin konu kavrama ve soru çözme becerilerini artırmış ve hızlandırmıştır.
                                    Açı Eğitim Kurumları zengin ve geniş kütüphaneciliğin öncüsü olmuştur.
                                    Açı Eğitim Kurumları tutarlı, kararlı, kendinden emin, deneyimli kadrolarıyla daha birçok başarı ve yenilikle hizmetlerine devam edecektir.

                    </p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody classname="card card-blog">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <div className="text-center">
                                        <CardTitle tag="h4">Başarılarımız</CardTitle>
                                    </div>
                                </a>
                                <img
                                    alt="..."
                                    // className="img-circle img-no-padding img-responsive"
                                    src="https://res.cloudinary.com/hatdjwqml/image/upload/v1612691891/os6bg1zqpii7n7begppy.jpg"
                                    height="200px"
                                />
                            </CardBody>
                        </Card>
                    </div>
                
            </>
        );
    }
}

export default Kurumsal;