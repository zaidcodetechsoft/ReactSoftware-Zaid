import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./Addresses.css"

function Addresses() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="education_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Address1:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Address2:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Location Code:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Muncipality:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>School District:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>GeoLocation:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Label>
                        <div
                          className="div_text"
                          style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            display: "flex",
                          }}
                        >
                          <p>Latitude:</p>
                          <p>Longitude:</p>
                        </div>
                      </Form.Label>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Paid Leave:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select>
                        <option>Alberta</option>
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

          <Form className="education_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">FICA Exempt Pension Plan</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <div className="div_check" style = {{display: 'flex', alignItems: 'center',justifyContent: 'center',marginTop: '25px'}}>
                  <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                    <p>FICA Exempt</p>
                    </div>
                  </div>
                  <div className="left">
                    <div className="w-100">
                      <p>When enabled, users are presented with an optional field allowing them to change the payroll location used when paying paid leave.</p>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>

        
        </Col>

        <Col md={6}>
          <Form className="education_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Billing Address</Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right w-25">
                    <Form.Label>Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <div className="w-100">
                      <Form.Control type="text" style={{ width: "100%" }} />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-25">
                    <Form.Label>Attn:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address1:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address2:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Addresses;
