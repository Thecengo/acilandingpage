import DemoFooter from 'components/Footers/DemoFooter';
import MainNavbar from 'components/Navbars/MainNavbar';
import React, { Component } from 'react';
import Container from 'reactstrap/lib/Container';
import Iletisim from './Iletisim';

class IletisimTab extends Component {

    render() {
        return (
            <>
                <div className="section section-dark">
                    <div className="filter" />
                    <Container>
                        <MainNavbar />
                    </Container>
                </div>
                <Iletisim />
                <DemoFooter />
            </>
        );
    }
}

export default IletisimTab;