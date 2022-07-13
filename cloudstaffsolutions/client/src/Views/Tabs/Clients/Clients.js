import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import General from './General/General';
import Addresses from './Addresses/Addresses';
import Billing from './Billing/Billing';
import Invoicing from './Invoicing/Invoicing';
import Credits from './Credit/Credit';
import Holidays from './Holidays/Holidays';
import Instructions from './Instructions/Instructions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clients.css'

function Clients() {
  return (
    <main className='clients_main_tab'>
            <div className='cennt'>
                <div className='tabbs1'>
                    <Tabs
                        defaultActiveKey="general"
                        id="uncontrolled-tab-example">
                        <Tab eventKey="general" title="General">
                            <General />
                        </Tab>
                        <Tab eventKey="addresses" title="Addresses">
                            <Addresses />
                        </Tab>
                        <Tab eventKey="billing" title="Billing">
                            <Billing/>
                        </Tab>
                        <Tab eventKey="invoicing" title="Invoicing">
                            <Invoicing/>
                        </Tab>
                        <Tab eventKey="credits" title="Credits">
                            <Credits />
                        </Tab>
                        <Tab eventKey="holidays" title="Holidays">
                            <Holidays />
                        </Tab>
                        <Tab eventKey="instructions" title="Instructions">
                            <Instructions />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </main>
  );
};

export default Clients;