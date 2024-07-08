import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup, Form, Modal } from '@themesberg/react-bootstrap';
import { useState } from "react";
import { Link } from 'react-router-dom';


import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import TradingViewWidget from "../../components/TradingViewWidget"; // Import TradingViewWidget





export default () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  return (
    <>
      {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">Share</Button>
          <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
      </div> */}

      <Row>
        <Col xs={12} className="mb-4">
          <TradingViewWidget />
        </Col>
      </Row>
      
      <Form>
        <Form.Group>
          {/* <Form.Label>User Prompt</Form.Label> */}
          <Form.Control as="textarea" rows="4" placeholder="Enter trading idea to generate strategy..." />
        </Form.Group>
      </Form>

      <React.Fragment>
        <Button variant="primary" className="my-3" onClick={() => setShowDefault(true)}>Submit</Button>

        <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
          <Modal.Header>
            {/* <Modal.Title className="h6">Terms of Service</Modal.Title> */}
            <Button variant="close" aria-label="Close" onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            <p>Login or Sign Up to continue.</p>
          </Modal.Body>
          <Modal.Footer>
          <Button as={ Link } to='../examples/sign-in' variant="secondary">
                    Proceed
                </Button>
            <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
              Cancel
          </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>

      
    </>
  );
};
