import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import PackageJson from '@root/package.json';

const Home = () => (
    <Container>
        <Row>
            <Col sm={12} className="text-center">
                <h1 className="oswald title-home">
                    &nbsp;Bienvenido al Sistema&nbsp;
                </h1>
            </Col>
        </Row>
    </Container>
);

export default Home;
