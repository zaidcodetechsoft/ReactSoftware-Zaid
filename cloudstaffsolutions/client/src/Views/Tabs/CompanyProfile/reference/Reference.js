import React from 'react'
import { Container, Col, Row, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reference.css'

function Reference() {
  // const [selects, setSelects] = useState();

  // const eventCall = (e) => {
  //   setSelects(e.target.value);
  // }
  return (
    <Container fluid>
      <Row>
        <Col md={12} >
          <Form className='reference_form'>
            <div className='tab_form policy'>
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className='m-0 pb-1'>Reference Information</Form.Label>
                <div className='inner_ d-flex align-items-center'>
                  <div className='right'>
                    <Form.Label>Name:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className='inner_ d-flex align-items-center'>
                  <div className='right'>
                    <Form.Label>Title:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>Employer:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>Address1:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>Address2:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-50'>
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>Email:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>Can Contact:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Check className='d-flex align-items-center gap-2 p-0' type="checkbox" label="Check here to authorize us to ccontact this reference" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right'>
                    <Form.Label>Note:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      {/* <FloatingLabel controlId="floatingTextarea2"> */}
                        <Form.Control
                          as="textarea"
                          style={{ height: '80px' }}
                        />
                      {/* </FloatingLabel> */}
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
  )
}

export default Reference