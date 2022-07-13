import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./Invoicing.css";

function Invoicing() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="invoicing_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoice Options</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Invoice Profile:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                    <p>
                      Invoice Profile is optional and will override
                      Agency/Branch Profile
                    </p>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Invoice Format:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Frequency:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Separation:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>

          <Form className="general_form2">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Printing Options</Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right">
                    <Form.Label>No Queuing:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-60">
                    <Form.Label style = {{whiteSpace: 'nowrap'}}>Include Timesheet:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>

         
        </Col>

        <Col md={6}>
          <Form className="general_form2">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Max Shifts p/invoice:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Max amounts p/invoice:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                </Form.Group>
              </div>

                <div className="tab_form Option">
              <div className="tab_form override" style = {{marginTop: '112px'}}>
                <Form.Group
                  className="mb-3 tab_form_"
                  controlId="formBasicText"
                >
                  <Form.Label className="m-0 pb-1">
                    Notes
                  </Form.Label>
                <div className="inner_ d-flex">
                <div className="py-1 px-2 w-100">
                    <Form.Control as = "textarea" type="text" placeholder="" style = {{height: '10px'}}/>
                  </div>
                  </div>
                </Form.Group>
              </div>
             </div>

                
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              
          </Form>
        </Col>

        <Form className="invoicing_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoice Options</Form.Label>
                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Invoice Email Template:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
                <Form className="instructions_form">
            <div className="tab_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                    style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}
                  >
                    Agency Representatives
                    <div className="py-1 px-1 w-50">
                      <Button
                        className="form_btn w-65 h-50"
                        type="submit"
                        style={{ whiteSpace: "nowrap", fontSize: '8px' }}
                      >
                        Add Representative
                      </Button>
                    </div>
                  </Form.Label>
                  <div className="py-1 px-2">
                      <div style = {{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                          <p>Email Address</p>
                          <p>Recipient</p>
                          <p>Unsubscribed</p>
                          <p>BlackListed</p>
                          <p>Resson</p>
                          <p>Action</p>
                      </div>
                    </div>
                </div>
              </Form.Group>
            </div>
            </div>
            </Form>
              </Form.Group>
            </div>
          </Form>
      </Row>
    </Container>
  );
}

export default Invoicing;
