import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './employee.css'
import axios from 'axios';

function Home() {
  const navigate = useNavigate()

  const [employee , setUser] = useState({
    empID:"",
    empName:"",
    empDepartment:"",
    empDesignation:"",
    empIdentity:"",
    empContactNo:"",
    empEmergencyContactPerson:"",
    empEmergencyContactNo:"",
    empAddress:"",
    empSalary:"",
    empYearlySalary:"",
    empTaxSlab:"",
    empTaxPercentage:"",
    empTaxAmount:"",
    empTaxLeaveInCashment:""
})
const handleChange = (e) =>{
    const { name, value } = e.target
    setUser({
        ...employee,
        [name]:value
    })
}


const createNewEmployee = ()=>{
  axios.post('http://localhost:4000/api/employee/new', employee)
  .then((res)=>{
      alert(res.data.message)
      navigate("/home")
  })
}
  return (
    <main className="main_home mt-5">
     
      <div className="home_form bg-white    w-50">
        <Alert className="text-center fs-4 m-0   alertt">
          Employee Profile
        </Alert>
        <Form className="form py-3 px-4" >
          <div className="input_group d-flex align-items-center justify-content-between gap-2">
            <Form.Group className="mb-2 Empid" controlId="formBasicEmail">
              <Form.Label >Employee ID</Form.Label>
              <Form.Control name="empID" type="text" value={employee.empID} placeholder="Employee ID" onChange={handleChange} />
              {/* <Form.Text className="text-muted ps-2">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-2 Empname" controlId="formBasicEmail">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control name="empName" type="text" value={employee.empName} placeholder="Employee Name" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-2  Empidentity" controlId="formBasicEmail">
              <Form.Label>Employee Identity</Form.Label>
              <Form.Control name="empIdentity" type="text" value={employee.empIdentity} placeholder="Employee Identity" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-2 ContactNum" controlId="formBasicEmail">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control name="empContactNo" type="text" value={employee.empContactNo} placeholder="Contact Number" className="" onChange={handleChange}/>
            </Form.Group>
          </div>

          <div className="input_group d-flex align-items-center justify-content-between gap-2">
            <Form.Group className="mb-2 Empdepartment" controlId="formBasicEmail">
              <Form.Label>Employee Department</Form.Label>
              <Form.Select name="empDepartment" value={employee.empDepartment} onChange={handleChange}>
                <option selected>Employee Department</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2 Empdesignation" controlId="formBasicEmail">
              <Form.Label>Employee Designation</Form.Label>
              <Form.Control name="empDesignation" type="text" value={employee.empDesignation} placeholder="Employee Designation" className="" onChange={handleChange}/>
            </Form.Group>

          </div>
          <div className="input_group d-flex align-items-center justify-content-between  gap-2">
            <Form.Group className="mb-2 Emergcontactperson" controlId="formBasicEmail">
              <Form.Label>Emergency Contact Person</Form.Label>
              <Form.Control name="empEmergencyContactPerson" type="text" value={employee.empEmergencyContactPerson} placeholder="Emergency Contact Person" className="" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-2 Emergcontactnumber" controlId="formBasicEmail">
              <Form.Label>Emergency Contact Number</Form.Label>
              <Form.Control name="empEmergencyContactNo" type="text" value={employee.empEmergencyContactNo} placeholder="Emergency Contact Number" className="" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-2 Empsalary" controlId="formBasicEmail">
              <Form.Label>Employee Salary</Form.Label>
              <Form.Control name="empSalary" type="text" value={employee.empSalary} placeholder="Employee Salary" className="" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-2 Yearsalary" controlId="formBasicEmail">
              <Form.Label>Yearly Salary</Form.Label>
              <Form.Control name="empYearlySalary" type="text" value={employee.empYearlySalary} placeholder="Yearly Salary" className="" onChange={handleChange}/>
            </Form.Group>
          </div>

          <Form.Group className="mb-2 input_" controlId="formBasicEmail">
            <Form.Label>Employee Adress</Form.Label>
            <Form.Control name="empAddress" type="text" value={employee.empAddress} placeholder="Employee Adress" className="Empadress" onChange={handleChange}/>
          </Form.Group>

          <div className="input_group d-flex align-items-center justify-content-between gap-2">
            <Form.Group className="mb-2 Taxslab" controlId="formBasicEmail">
              <Form.Label>TaxSlab (TaxID)</Form.Label>
              <Form.Control name="empTaxSlab" type="text" value={employee.empTaxSlab} placeholder="TaxSlab (TaxID)" className="" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-2 Taxpercentage" controlId="formBasicEmail">
              <Form.Label>Tax Percentage</Form.Label>
              <Form.Control name="empTaxPercentage" type="text" value={employee.empTaxPercentage} placeholder="Tax Percentage" className="" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-2 Taxamount" controlId="formBasicEmail">
              <Form.Label>Tax Amount</Form.Label>
              <Form.Control name="empTaxAmount" type="text" value={employee.empTaxAmount} placeholder="Tax Amount" className="" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-2 Leaveincashment" controlId="formBasicEmail">
              <Form.Label>Leave In Cashment</Form.Label>
              <Form.Control name="empTaxLeaveInCashment" type="text" value={employee.empTaxLeaveInCashment} placeholder="Leave In Cashment" className="" onChange={handleChange}/>
            </Form.Group>
          </div>

          <Form.Group className="mb-1  mt-2">
            <Form.Label>Employee Status</Form.Label>
            <div className="d-flex gap-4">
              <Form.Check className="form_check"
                name="empStatus" type="radio"
                label="Online"
                id="formHorizontalRadios1"
              />
              <Form.Check className="form_check"
                name="" type="radio"
                label="Offline"
                id="formHorizontalRadios1"
              />
            </div>
          </Form.Group>
          <Button className="form_btn mt-2 w-100" type="submit" onClick={createNewEmployee}>
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}

export default Home;
