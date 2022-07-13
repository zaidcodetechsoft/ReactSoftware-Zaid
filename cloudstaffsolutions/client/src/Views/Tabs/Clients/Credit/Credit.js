import React from 'react'
import { Container, Col, Row, Form, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Credit.css'

function Credit() {
  // const [selects, setSelects] = useState();

  // const eventCall = (e) => {
  //   setSelects(e.target.value);
  // }
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <Form className='credit_form'>
                <div className='tab_form policy'>
                  <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                    <Form.Label className='m-0 pb-1'>Balances</Form.Label>
                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap', paddingBottom:'1px'}}>Current Balance:</Form.Label>
                      </div>
                    </div>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>Open Credit:</Form.Label>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </Form>
        </Col>


        <Col md={6}>
              <Form className='credit_form'>
                <div className='tab_form policy'>
                  <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                    <Form.Label className='m-0 pb-1'>Statistics</Form.Label>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>
                        </Form.Label>
                      </div>

                      <div className="short_div" style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        width: '60%',
                        justifyContent: 'space-around'
                      }}>
                        <div className="left_div">
                          <p>MTD</p>
                        </div>

                        <div className="right_div">
                          <p>STD</p>
                        </div>

                      </div>
                    </div>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>Current Balance:</Form.Label>
                      </div>
                    </div>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>Open Credit:</Form.Label>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </Form>
              </Col>
              </Row>
              </Col>

                      {/* Right Columns */}

              <Row>
            <Col md={6}>
              <Form className='credit_form'>
                <div className='tab_form policy'>
                  <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                    <Form.Label className='m-0 pb-1'>Balances</Form.Label>
                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap', paddingBottom:'1px'}}>Current Balance:</Form.Label>
                      </div>
                    </div>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>Open Credit:</Form.Label>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </Form>
        </Col>

        
        <Col md={6}>
              <Form className='credit_form'>
                <div className='tab_form policy'>
                  <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                    <Form.Label className='m-0 pb-1'>Statistics</Form.Label>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>
                        </Form.Label>
                      </div>

                      <div className="short_div" style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        width: '60%',
                        justifyContent: 'space-around'
                      }}>
                        <div className="left_div">
                          <p>MTD</p>
                        </div>

                        <div className="right_div">
                          <p>STD</p>
                        </div>

                      </div>
                    </div>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>Current Balance:</Form.Label>
                      </div>
                    </div>

                    <div className='inner_ d-flex align-items-center'>
                      <div className='right' style={{ width: '40%' }}>
                        <Form.Label style={{ fontSize: '9px', width: '40%', whiteSpace: 'nowrap' }}>Open Credit:</Form.Label>
                      </div>
                    </div>
                  </Form.Group>
                </div>
              </Form>
              </Col>
              </Row>
            </Row>
    </Container>
  )
}

export default Credit