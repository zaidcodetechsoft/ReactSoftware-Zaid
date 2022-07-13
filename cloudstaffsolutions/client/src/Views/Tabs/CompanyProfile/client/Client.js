import React, { useState } from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './client.css'


function Client() {
    const [selects, setSelects] = useState();
    // const [selects, getSelects] = useState();
    // var dlhandler =(e) => {
    //     getSelects(Array.isArray(e)?e.map(x=>x.value):[]);
    //     console.log (getSelects)
    // }
    return (
        <Container fluid>
            <Row>
                <Col md={6} >
                    <Form className='client_form'>
                        <div className='tab_form Option'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Activation Options</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Options:</Form.Label>
                                    <div className='py-1 px-2 w-100'>
                                        {/* <Form.Select  onChange={dlhandler}> */}
                                        <Form.Select value={selects} onChange={e => setSelects(e.target.value)}>
                                            <option></option>
                                            <option>Must have at least one department</option>
                                            <option>Must have at least one contact</option>
                                            <option>Must have at least one rate</option>
                                            <option>Must have a biling address</option>
                                            <option>Credit status must be approved</option>
                                            <option>Must have an agency representative</option>
                                            <option>Must have a Print Option selected</option>
                                            <option>Must have a paid Leave Jurisdiction</option>
                                            <option>Must have a Rating</option>
                                        </Form.Select>

                                    </div>
                                </div>
                                            <Form.Label>{selects}</Form.Label>
                                {/* {selects.map((index,text)=> {
                                    return(
                                       <div className='label' key={index}>
                                        <label>{text}</label>
                                       </div>
                                    <ul key={index}>
                                        <li>{text}</li>
                                    </ul>
                                    )
                                })} */}
                               
                            </Form.Group>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Client;