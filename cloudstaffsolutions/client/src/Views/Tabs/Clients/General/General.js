import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./General.css";

function General() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="general_form">
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0">
                  Clients Information
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Current Status:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Button className="form_btn mt-1 w-50 h-50" type="submit">
                      Prospect
                    </Button>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Client#:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Label>
                      <p style={{fontSize: '10px', alignItems: 'center'}}>Generated when activated</p>
                    </Form.Label>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Branch :</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Name:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control type="text" placeholder="" />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Type:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>SIC:</Form.Label>
                  <div className="py-1 px-2 w-40">
                    <Form.Select>
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Group:</Form.Label>
                  <div className="py-1 px-2 w-40">
                    <Form.Select>
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Business Line:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Beds:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      placeholder=""
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Facs:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      placeholder=""
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex align-items-center">
                  <Form.Label>National:</Form.Label>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <Form.Label>GPO:</Form.Label>
                  <div className="clients_general">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                    />
                    <p
                      className="p_general"
                      style={{
                        fontSize: "8px",
                        display: "contents",
                        position: "relative",
                        marginLeft: "4px",
                      }}
                    >
                      Group purchasing organization
                    </p>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Account Manager:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Rating:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className="tab_form policy" style = {{marginTop: '120px'}}>
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                  >
                    Agency Representatives
                  </Form.Label>
                  <div className="py-1 px-1 w-50">
                      <Button
                        className="form_btn w-65 h-50"
                        type="submit"
                      >
                        Add Representative
                      </Button>
                    </div>
                </div>
                <div className="py-1 px-2">
                      <div>
                        <Col md = {4} style = {{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                          <p>Type</p>
                          <p>User</p>
                          <p>Action</p>
                          </Col>
                      </div>
                    </div>
              </Form.Group>
            </div>

            {/* </div> */}
          </Form>
        </Col>

        
        <Col md={6}>
          <Form className="payroll_form">
            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Branch Visibility</Form.Label>
                <div className="py-1 px-2 ">
                  <p>
                    When enabled, users are presented with an optional field
                    allowing them to change the payroll location used when
                    paying paid leave.
                  </p>
                  <div className="py-1 px-1 w-100">
                      <Form.Select style = {{height:'100px'}}>
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
              </Form.Group>
            </div>

            <div className="tab_form Option">
              <div className="tab_form override">
                <Form.Group
                  className="mb-3 tab_form_"
                  controlId="formBasicText"
                >
                  <Form.Label className="m-0 pb-1">
                    Notes
                  </Form.Label>
                <div className="inner_ d-flex">
                <div className="py-1 px-2 w-100">
                    <Form.Control as = "textarea" type="text" placeholder="" style = {{height: '150px'}}/>
                  </div>
                  </div>
                </Form.Group>
              </div>
             </div>

            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Disciplines Serviced</Form.Label>
                <div className="py-1 px-1">
                  <div className="py-1 px-1 w-100">
                      <Form.Select style = {{height:'100px'}}>
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

              </Form.Group>
            </div>
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Service Dates
                    <div className="py-1 px-1 w-50">
                      <Button
                        className="form_btn w-65 h-50"
                        type="submit"
                        style={{ whiteSpace: "nowrap", fontSize: '8px' }}
                      >
                        Add Service Dates
                      </Button>
                    </div>
                  </Form.Label>
                  <div className="py-1 px-2">
                      <div>
                        <Col md = {4} style = {{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                          <p>Service Type</p>
                          <p>Date</p>
                          <p>Action</p>
                          </Col>
                      </div>
                    </div>
                </div>
              </Form.Group>
            </div>

            
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default General;
