import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import General from './general/General';
import Client from './client/Client';
import Registry from './registry/Registry'
import PayRoll from './payRoll/PayRoll'
import Reference from './reference/Reference';
import Education from './Education/Education';
import EmploymentHistory from './EmploymentHistory/EmploymentHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComplanyProfile.css'


function CompanyProfile() {
  return (
    <main className='company_main_tab '>
            <div className='cennt'>
                <div className='tabbs1'>
                    <Tabs
                        defaultActiveKey="general"
                        id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <General />
                        </Tab>
                        <Tab eventKey="clients" title="Clients">
                            <Client />
                        </Tab>
                        <Tab eventKey="registry" title="Registry">
                            <Registry />
                            {/* <p>Registry</p> */}
                        </Tab>
                        <Tab eventKey="payroll" title="Payroll">
                            <PayRoll />
                        </Tab>
                        <Tab eventKey="reference" title="Reference">
                            <Reference />
                        </Tab>
                        <Tab eventKey="education" title="Education">
                            <Education />
                        </Tab>
                        <Tab eventKey="employmentHistory" title="Employment History">
                            <EmploymentHistory />
                        </Tab>
                        <Tab eventKey="branding" title="Branding">
                            {/* <General /> */}
                        </Tab>
                        <Tab eventKey="apiIntegration" title="API Integration">
                            {/* <General /> */}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </main>
  );
};

export default CompanyProfile;