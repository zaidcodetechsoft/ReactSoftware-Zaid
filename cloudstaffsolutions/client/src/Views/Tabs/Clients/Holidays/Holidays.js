import React from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "./Holidays.css"

function Holidays() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="holidays_form">
            <div className="tab_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                    style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}
                  >
                    Holidays
                    
                    <div className="py-1 px-1 w-50">
                      <div className='holiday_div'>
                      <Button
                        className="form_btn w-65 h-50"
                        type="submit"
                        style={{ whiteSpace: "nowrap", fontSize: '8px' }}
                      >
                        Add a Single Holiday
                      </Button>
                      <Button
                        className="form_btn w-65 h-50"
                        type="submit"
                        style={{ whiteSpace: "nowrap", fontSize: '8px' }}
                      >
                        Add Multiple Holidays
                      </Button>
                      </div>
                    </div>
                  </Form.Label>
                  <div className="py-1 px-2">
                      <div style = {{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                          <p>Holiday</p>
                          <p>Date</p>
                          <p>Time</p>
                          <p>Duration</p>
                          <p>Action</p>
                      </div>
                    </div>
                </div>
              </Form.Group>
            </div>
            </div>
            </Form>
         </Col>
      </Row>
    </Container>
  )
}

export default Holidays