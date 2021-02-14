import MessageService from 'components/services/MessageService';
import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Form from 'reactstrap/lib/Form';
import Input from 'reactstrap/lib/Input';
import InputGroup from 'reactstrap/lib/InputGroup';
import InputGroupAddon from 'reactstrap/lib/InputGroupAddon';
import InputGroupText from 'reactstrap/lib/InputGroupText';
import Row from 'reactstrap/lib/Row';
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

class Iletisim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            name: '',
            message: '',
            email: ''
        }
    }

    sendMessage = (e) => {
        e.preventDefault();
        let message = {
            name: this.state.name, message: this.state.message, email: this.state.email
        };
        console.log(JSON.stringify(message));
        MessageService.createMessage(message).then(res => {
            alertify.success(res.data.message);
            console.log(res)
        });
    }
    componentDidMount() {

    }
    onChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="section landing-section">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="text-center">İletişimde Kalalım</h2>
                            <Form className="contact-form">
                                <Row>
                                    <Col md="6">
                                        <label>Ad</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-single-02" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Ad" type="text" name="name"
                                                value={this.state.name} onChange={this.onChange} />
                                        </InputGroup>
                                    </Col>
                                    <Col md="6">
                                        <label>Email</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-email-85" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Email" type="text" name="email"
                                                value={this.state.email} onChange={this.onChange} />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <label>Mesaj</label>
                                <Input
                                    placeholder="Düşüncelerinizi önemsiyoruz lütfen bize bir şeyler söyleyin..."
                                    type="textarea"
                                    rows="4"
                                    name="message"
                                    value={this.state.message} onChange={this.onChange}
                                />
                                <Row>
                                    <Col className="ml-auto mr-auto" md="4">
                                        <Button className="btn-fill" color="danger" size="lg" onClick={this.sendMessage}>
                                            Mesaj Gönder
                                         </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Iletisim;