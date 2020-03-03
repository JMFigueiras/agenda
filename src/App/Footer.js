/* global VERSION */
import React from 'react';
import {Row, Col} from 'reactstrap';

const Footer = () => (
    <footer
        className="hidden-print"
    >
        <Row>
            <Col sm={4} md={4} className={`m-0 p-0 mt-2 ml-1 pl-1`}>
                <div className={`version small`}>
                    Version&nbsp;
                    {VERSION}
                    <br/>
                </div>
            </Col>
            <Col>
                <quote className={`small`}>
                    <a href="https://www.indec.gob.ar/" target="_blank" rel="noopener noreferrer">@TEST</a>
                    &nbsp;- 2020
                </quote>
            </Col>
        </Row>
    </footer>
);

export default Footer;
