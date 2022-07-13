import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payRoll.css";

function PayRoll() {
  const [selects, setSelects] = useState();
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="payroll_form">
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  PayRoll Week Settings
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Default :</Form.Label>
                  <div className="py-1 px-2 w-65">
                    <Form.Select>
                      <option>Symmetry</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Week Begins On :</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option>Sunday</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Date PayRoll Checks On :</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option>Friday</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Date Invoice On :</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option>Monday</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Enable EFT(Registry Details) :</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <div className="py-1 px-2 left">
                      <Form.Check
                        className="d-flex align-items-center"
                        type="checkbox"
                      />
                      {/* <Form.Control type="text" placeholder="30"  /> */}
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Enable Easily:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <div className="py-1 px-2 left">
                      <Form.Check
                        className="d-flex align-items-center"
                        type="checkbox"
                      />
                      {/* <Form.Control type="text" placeholder="30"  /> */}
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Batch Check Sort Order:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select>
                      <option>Registrant</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div>
                  <Form.Label>
                    This option can only be modified by StafferLink support
                  </Form.Label>
                </div>
              </Form.Group>
              <div className="para">
                <h5>ActiveX:</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis totam repellat est tempora? Consequuntur incidunt
                  odit perspiciatis quam ab tempora velit dolore nam.W
                </p>
              </div>
              <div className="para1">
                <h5>PDF:</h5>
                <p>
                  This option works in all browsers, Checks are displayed in
                  separate Windows, like all other reports and can be printed
                  and saved without restriction
                </p>
              </div>
            </div>
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Shift Splitting Tolerance
                </Form.Label>

                <div className="inner_ d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Tolerance(minutes):</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ d-flex w-25">
                      <Form.Control type="text" placeholder="13" />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className="tab_form ">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  EFT Activation Delay
                </Form.Label>
                <div className="py-1 px-2 w-100">
                  <div className="delay">
                    <Form.Label className="d-flex">
                      Delay Enabling the EFT option in payroll for{" "}
                      <Form.Control type="text" placeholder="13" /> after the
                      first EFT account is added for the registrant
                    </Form.Label>
                  </div>
                  {/* <p></p> */}
                </div>
              </Form.Group>
            </div>
           
            <div className="tab_form default">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Pay Adjustments</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Use Registrant Resident Location:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <div className="py-1 px-2 left">
                      <Form.Check
                        className="d-flex align-items-center"
                        type="checkbox"
                      />
                      {/* <Form.Control type="text" placeholder="30"  /> */}
                    </div>
                  </div>
                </div>
                <Form.Label>
                  Branch Payroll location is used by default. Use this option
                  option to override
                </Form.Label>
              </Form.Group>
            </div>
            
            {/* </div> */}
          </Form>
        </Col>
        <Col md={6}>
          <Form className="payroll_form">
            <div className="tab_form override">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">PayCheck Notice</Form.Label>
                <div className="py-1 px-2">
                  {/* <FloatingLabel> */}
                  <Form.Control
                    as="textarea"
                    placeholder={"PAYROLL SUBMITALL REMAINDER:"
                
                    +  
                
                    "\r\n"
                    
                    +
                    "\r\n"
                    +
                    
                  "Our policy is you must turn in your time daily at the end of each shift to timeshift@amtstaffing.com. All saturday time is due in at end of shift. Deadline to receive friday night and saturday time is 9am Sunday morning. Texting your timesheet is strictly prohibited"
                  
                  +  
                
                  "\r\n"
                  
                  +
                  "\r\n"
                  +
                  "If you deviate from this policy, your pay will be dealyed until the next payroll cycle."}
                  />
                  {/* </FloatingLabel> */}
                </div>
              </Form.Group>
            </div>

            <div className='tab_form overtime'>
                            <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                <Form.Label className='m-0 pb-1'>Overtime Warning</Form.Label>
                                <div className='py-1 px-2 '>
                                    <Form.Check className='d-flex align-items-center' type="checkbox"  label="Display warning if booking registrant into overtime" />
                                    <p>
                                      When enabled, users are presented with an optional field allowing them to change the payroll location used when paying paid leave.
                                    </p>
                                </div>
                            </Form.Group>
                        </div>

            <div className="tab_form Option">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Sheduling Search Options
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Options:</Form.Label>
                  <div className="py-1 px-2 w-100">
                    <Form.Select
                      value={selects}
                      onChange={(e) => setSelects(e.target.value)}
                    >
                      <option checked></option>
                      <option>Agency Credentials must pass</option>
                      <option>Client Credentials must pass</option>
                      <option>Allow overtime</option>
                      <option>Include unknown availablity</option>
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

                <Form.Label>{selects}</Form.Label>
              </Form.Group>
            </div>

            <div className="tab_form default">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Check Voiding</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Checks maybe voided within:</Form.Label>
                  <div className="py-1 px-1 w-50 bcd">
                    <Form.Select className="fs-10">
                      <option>No Validation</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form default">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Overtime Adjustments
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Disable Overtime Adjustments</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <div className="py-1 px-2 left">
                      <Form.Check
                        className="d-flex align-items-center"
                        type="checkbox"
                      />
                      {/* <Form.Control type="text" placeholder="30"  /> */}
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

export default PayRoll;
