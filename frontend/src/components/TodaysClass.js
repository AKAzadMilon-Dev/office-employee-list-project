import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap';
import axios from 'axios';
import SideBar from './SideBar';

const TodaysClass = () => {

    const [todayclass, setTodayclass] = useState([])
    const [batch, setBatch] = useState('')
    const [time, setTime] = useState('')
    const [room, setRoom] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:8000/',{
            batch: batch,
            time: time,
            room: room
        })
    }

    useEffect(()=>{
        async function todayClassData(){
            const todaydata = await axios.get('http://localhost:8000/todayclasses')
            setTodayclass(todaydata.data)
        }
        todayClassData()
    })

  return (
    <div style={{ background: "#112B3C"}}>
        <Container >
            <Row>
                <SideBar></SideBar>
                <Col lg={9} >
                    <Form className='textStyle'>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Batch</Form.Label>
                                <Form.Control type="text" name="batch" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                            <Form.Label>Time</Form.Label>
                                <Form.Control type="text" placeholder="Time" name="time" onChange={(e)=>setTime(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} md="12">
                            <Form.Label>Room</Form.Label>
                                <Form.Control type="text" placeholder="Room" name="room" onChange={(e)=>setRoom(e.target.value)}/>
                            </Form.Group>
                        </Row>
                        <Button onClick={handleSubmit} className='w-100' type="submit">Submit</Button>
                    </Form>
                    <Row style={{marginTop:"50px"}}>
                        <Col lg={12}>
                            <Table striped bordered hover variant="success">
                            <thead>
                                <tr>
                                    <th>Batch</th>
                                    <th>Time</th>
                                    <th>Room</th>
                                </tr>
                            </thead>
                            {todayclass.map(item=>(
                                <tbody key={item._id}>
                                    <tr >
                                        <td>{item.batch}</td>
                                        <td>{item.time}</td>
                                        <td>{item.room}</td>
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

export default TodaysClass