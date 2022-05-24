import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import SideBar from './SideBar';

const ActivityList = () => {
  return (
    <div style={{ background: "#112B3C"}}>
        <Container >
            <Row>
                <SideBar></SideBar>
                <Col lg={9} >
                    <Row style={{marginTop:"50px"}}>
                        <Col lg={12}>
                            <Table striped bordered hover variant="success">
                            <thead>
                                <tr>
                                    <th>Active Name</th>
                                    <th>Hour Take</th>
                                    <th>Active Details</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                                <tbody >
                                    <tr >
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Edit/Delete</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ActivityList