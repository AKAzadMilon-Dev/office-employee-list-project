import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, Button, Card, Table} from 'react-bootstrap';
import axios from 'axios';

const EmployeeList = () => {
    const [employee, setEmployee] = useState([])
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [officetime, setOfficetime] = useState('')
    const [offday, setOffday] = useState('')
    const [mobile, setMobile] = useState('')

    const hendleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:8000/',{
            name: name,
            designation: designation,
            officetime: officetime,
            offday: offday,
            mobile: mobile
        })
    }

    useEffect(()=>{
        async function employeeData(){
            const data = await axios.get('http://localhost:8000/employee')
            setEmployee(data.data)
        }
        employeeData()
    })

  return (
    <div>
        <Container style={{marginTop:"50px"}}>
            <Row>
                <Col lg={3}>
                    <Card style={{background:"#7968DC"}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9} >
                    <Form className='w-50 mx-auto formStyle'>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Office Time</Form.Label>
                            <Form.Control type="text" placeholder="Office time" onChange={(e)=>setOfficetime(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Off Day</Form.Label>
                            <Form.Control type="text" placeholder="Off day" onChange={(e)=>setOffday(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Mobile Number" onChange={(e)=>setMobile(e.target.value)} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button onClick={hendleSubmit} variant="primary" size="md">SEND</Button>
                        </div>
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