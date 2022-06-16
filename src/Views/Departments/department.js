import React from "react";
// import Home from '../Home/index'
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './department.css'

function Department() {
  return (
    <main className="main_department mt-5">
    <div className="form_department m-auto w-50">
      <Alert className="text-center fs-4 m-0   alertt">
        Departments
      </Alert>
      <Form className="form py-3 px-4" >
        <div className="input_group d-flex gap-2">
          <Form.Group className="mb-2 input_" controlId="formBasicEmail">
            <Form.Label >Deptart ID</Form.Label>
            <Form.Control type="text" placeholder="Deptart ID" className="Deptid" />
          </Form.Group>
          <Form.Group className="mb-2 input_" controlId="formBasicEmail">
            <Form.Label>Deptart Head</Form.Label>
            <Form.Control type="text" placeholder="Deptart Head" className="Depthead" />
          </Form.Group>
        </div>

        <Form.Group className="mb-2 input_" controlId="formBasicEmail">
          <Form.Label>Deptart Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Deptart Description"
            rows={5}
          />
        </Form.Group>

        <Form.Group className="mb-1  mt-2">
            <Form.Label>Department Status</Form.Label>
            <div className="d-flex gap-4">
              <Form.Check className="form_check"
                type="radio"
                label="Online"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check className="form_check"
                type="radio"
                label="Offline"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </div>
          </Form.Group>



        <Button className="form_btn mt-2 w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </main>

  );
}

export default Department;
