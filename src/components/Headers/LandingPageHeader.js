import React from "react";
import { useHistory } from 'react-router-dom';

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
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
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Example page</h1>
            <h3>Start designing your landing page here.</h3>
            <br />
            <Button className="btn-round" color="neutral" type="button" onClick = {()=> history.push("/register-page")}outline>
              Sınava Basvur
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
