import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, Table} from 'react-bootstrap';
import axios from 'axios';
import SideBar from './SideBar';

const EmployeeList = () => {
    const [employee, setEmployee] = useState([])
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [officetime, setOfficetime] = useState('')
    const [offday, setOffday] = useState('')
    const [mobile, setMobile] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:8000/',{
            name: name,
            designation: designation,
            officetime: officetime,
            offday: offday,
            mobile: mobile
        })
        e.target.reset()
    }

    useEffect(()=>{
        const employeeData = async()=>{
            const {data} = await axios.get('http://localhost:8000/employee')
            setEmployee(data)
        }
        employeeData()
    },[employee])

  return (
    <div style={{ background: "#112B3C"}}>
        <Container >
            <Row>
                <SideBar></SideBar>
                <Col lg={9} >
                    <Form className='textStyle' onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" name="designation" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="4">
                                <Form.Label>Office Time</Form.Label>
                                <Form.Control type="text" name="0fficeTime" placeholder="Office Time" onChange={(e)=>setOfficetime(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                            <Form.Label>Off Day</Form.Label>
                                <Form.Control type="text" placeholder="Off Day" name="offDay"  onChange={(e)=>setOffday(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                            <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="Mobile Number"name="mobileNumber" onChange={(e)=>setMobile(e.target.value)}/>
                            </Form.Group>
                        </Row>
                        <input className='btn btn-primary w-100' type="submit" value="submit"/>
                    </Form>
                    
                    <Row style={{marginTop:"50px"}}>
                        <Col lg={12}>
                            <Table striped bordered hover variant="success">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Office Time</th>
                                <th>Off Day</th>
                                <th>Mobile Number</th>
                                </tr>
                            </thead>
                            {employee.map(item=>(
                                <tbody key={item._id}>
                                    <tr >
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.officetime}</td>
                                        <td>{item.offday}</td>
                                        <td>{item.mobile}</td>
                                    </tr>
                                </tbody>
                            ))}
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default EmployeeList