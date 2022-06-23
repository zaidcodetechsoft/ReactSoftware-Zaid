import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import General from './general/General';
import Client from './client/Client';
import Registry from './registry/Registry'
import PayRoll from './PayRoll/PayRoll'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComplanyProfile.css'

function CompanyProfile() {
  return (
    <main className='company_main_tab bg-light'>
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
                        <Tab eventKey="symmetry" title="Symmetry">
                            {/* <General /> */}
                        </Tab>
                        <Tab eventKey="invoicing" title="Invoicing">
                            {/* <General /> */}
                        </Tab>
                        <Tab eventKey="lockbox" title="Lockbox">
                            {/* <General /> */}
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