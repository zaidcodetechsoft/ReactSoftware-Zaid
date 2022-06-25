import React, { useState } from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './general.css'


function General() {
    const [selects, setSelects] = useState();
    // const [items, setItems] = useState([]);




    const eventCall = (e) => {
        setSelects(e.target.value);
    }
    // const listOfItems = () => {
    //     setItems (()=> {
    //         return [];
    //     })
    // }
    return (
        <Container fluid>
            <Row>
                <Col md={6} >
                    <Form className='general_form2'>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Agency Name</Form.Label>
                                <div className='py-1 px-2'>
                                    <Form.Control type="text" placeholder="AMT Medical Staffing, Inc." />
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Last Closed</Form.Label>
                                <div className='py-1 px-2'>
                                    <p>Sharron Woods Closed Week:06/04/2022</p>
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>(Reply To) Email address</Form.Label>
                                <div className='py-1 px-2'>
                                    <Form.Control type="text" placeholder="" />
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form'>

                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Default Discipline</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Default :</Form.Label>
                                    <div className='py-1 px-2 w-50'>
                                        <Form.Select >
                                            <option></option>
                                            <option>Disabled select</option>
                                            <option>Disabled select</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form overtime'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Overtime Warning</Form.Label>
                                <div className='py-1 px-2 '>
                                    <Form.Check className='d-flex align-items-center' type="checkbox"  label="Display warning if booking registrant into overtime" />
                                </div>
                            </Form.Group>
                        </div>
                        <div className='tab_form'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Double Book Tolerance</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Tolerance :</Form.Label>
                                    <div className='py-1 px-2 w-25 d-flex'>
                                        <Form.Control type="text" placeholder="30" />
                                    </div>
                                    <Form.Label>(minutes)</Form.Label>
                                </div>
                            </Form.Group>
                        </div>

                        <div className='tab_form policy'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Password ploicy</Form.Label>
                                <div className='inner_ d-flex align-items-center'>
                                    <div className='right'>
                                        <Form.Label>Enforce upper and lower case:</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                        <Form.Check className='d-flex align-items-center' type="checkbox"  />
                                        {/* <Form.Control type="text" placeholder="30"  /> */}
                                    </div>
                                </div>

                                <div className='inner_ d-flex align-items-center'>
                                    <div className='right'>
                                        <Form.Label>Enforce at least one number:</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                        <Form.Check className='d-flex align-items-center' type="checkbox"  />
                                        {/* <Form.Control type="text" placeholder="30"  /> */}
                                    </div>
                                </div>

                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                        <Form.Label>Minimum password length:</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left '>
                                        <div className='left_ d-flex'>
                                            <Form.Control type="text" placeholder="30" />
                                            <Form.Label>Characters</Form.Label>
                                        </div>
                                        {/* <Form.Label>Characters</Form.Label>
                                        <Form.Control type="text" placeholder="30" class /> */}
                                    </div>
                                </div>

                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                        <Form.Label>Password expire in:</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left '>
                                        <div className='left_ d-flex'>
                                            <Form.Control type="text" placeholder="30" />
                                            <Form.Label>Days</Form.Label>
                                        </div>
                                    </div>
                                </div>

                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                        <Form.Label>Passwords can not repeat within:</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left '>
                                        <div className='left_ d-flex'>
                                            <Form.Control type="text" placeholder="30" />
                                            <Form.Label>Days</Form.Label>
                                        </div>
                                    </div>
                                </div>

                                <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label>
                            </Form.Group>
                        </div>
                    </Form>
                </Col>
                <Col md={6} >
                    <Form className='general_form2'>
                        <div className='tab_form override'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Credential Status Override</Form.Label>
                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                        <Form.Label>PerDiem:</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                        <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>

                                <div className='inner_ d-flex'>
                                    <div className='right'>
                                        <Form.Label>Contracts:</Form.Label>
                                    </div>
                                    <div className='py-1 px-2 left'>
                                        <Form.Control type="text" placeholder="30" />
                                    </div>
                                </div>

                                <Form.Label>These options can only be enabled by StafferLink Support, Enabling these options is not recommended, but will be allowed upon request.</Form.Label>
                            </Form.Group>
                        </div>

                        <div className='tab_form default'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>State Licence Rule</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>State Rule:</Form.Label>
                                    <div className='py-1 px-2 w-50'>
                                        <Form.Select >
                                            <option>No Validation</option>
                                            <option>Disabled select</option>
                                            <option>Disabled select</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <Form.Label>This rule applies to credential types [MILION , CLICN and (LION when a state is entered)]</Form.Label>
                            </Form.Group>
                        </div>

                        <div className='tab_form Option'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Sheduling Search Options</Form.Label>
                                <div className='inner_ d-flex'>
                                    <Form.Label>Options:</Form.Label>
                                    <div className='py-1 px-2 w-100'>
                                        {/* <Form.Select > */}
                                        <Form.Select onChange={eventCall}>
                                            <option Checked  disabled>Select Option</option>
                                            <option>Agency Credentials must pass</option>
                                            <option>Client Credentials must pass</option>
                                            <option>Allow overtime</option>
                                            <option>Include unknown  availablity</option>
                                            <option>Include scheduling conflicts</option>
                                            <option>Must have worked at the client</option>
                                            <option>Must have worked at the Department</option>
                                            <option>Must be oriented at Client</option>
                                            <option>Must be oriented at Department</option>
                                            <option>Include Client Do Not Shedule(DNS) </option>
                                            <option>Include Registrant Do Not Shedule(DNS)</option>
                                            <option>Limit to client branch</option>
                                        </Form.Select>

                                    </div>
                                </div>
                                {/* {items.map((textVal)=> {
                                    return(
                                       <div className='label'>
                                        <label>{textVal}</label>
                                       </div>
                                    )
                                })} */}
                                {/* e3f2f8 */}
                                {/* eaf4f8 */}
                                {/* e2edf1 */}

                                <Form.Label>{selects}</Form.Label>
                            </Form.Group>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default General;