import React from 'react';
import {
    Col, Container, Row,
    Media
} from 'reactstrap';
import PackageJson from '@root/package.json';
import agenda from 'images/agenda.png';


const Home = () => (
    <Container>
        <Row>
            <Col sm={12} className="text-center">
                <h1 className="oswald title-home">
                    &nbsp;Bienvenido al Sistema&nbsp;
                    <Media object src={agenda} className="d-flex justify-content-center float-center mx-auto"/>
                </h1>
            </Col>
        </Row>
    </Container>
);

export default Home;
