import React from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "./Instructions.css"

function Instructions() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
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
                          <p>Type</p>
                          <p>User</p>
                          <p>TimeCard Verification</p>
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

export default Instructions