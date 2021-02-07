import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

// reactstrap components
import { Button, Container } from "reactstrap";
import UncontrolledCarousel from "reactstrap/lib/UncontrolledCarousel";

// core components
const items = [
  {
    src: 'https://res.cloudinary.com/hatdjwqml/image/upload/v1612605778/mc2dj0stejwfm63dbrvp.jpg',
    key: '1'
  },
  {
    src: 'http://res.cloudinary.com/hatdjwqml/image/upload/c_mfit,h_528/v1612620503/r14ilth0lazmwromgxek.jpg',
    key: '2'
  },
  {
    src: 'https://res.cloudinary.com/hatdjwqml/image/upload/v1612691736/bzdu08gkapfmoeoe48da.jpg',
    key: '5'
  }
];

const LandingPageHeader = (props) => {
  let pageHeader = React.createRef();
  const history = useHistory();
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        //className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
      </div>
      <UncontrolledCarousel items={items} >
        
      </UncontrolledCarousel>
      <div className="filter" />
      <Container>
        <div className="motto text-center">
        <br></br>
        <p><strong><em>Sende aramıza katılmak için hemen alttaki butona tıkla ve ilk adımı at</em></strong></p>
        <Button className="btn-round" color="primary" type="button" onClick={() => history.push("/register-page")} outline>
          Sınava Basvur
         </Button>

        </div>
      </Container>
    </>
  );
}

export default LandingPageHeader;
