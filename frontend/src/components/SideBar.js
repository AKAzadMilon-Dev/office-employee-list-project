import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Col lg={3}>
        <Card style={{background:"#413F42"}}>
        <Card.Img variant="top" src="./assets/images/men.jpg" />
            <Card.Body className='textStyle'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <div className="d-grid gap-2">
                    <Link to='/'>
                        <Button className="w-100" variant="primary" size="lg">Home</Button>
                    </Link>
                    <Link to='/employeelist'>
                        <Button className="w-100" variant="primary" size="lg">Employee List</Button>
                    </Link>
                    <Link to='/todaysclass'>
                        <Button className="w-100" variant="primary" size="lg">Today's Class</Button>
                    </Link>
                    <Link to='/postactivity'>
                        <Button className="w-100" variant="primary" size="lg">Post Activity</Button>
                    </Link>
                    <Link to='/activitylist'>
                        <Button className="w-100" variant="primary" size="lg">Activity List</Button>
                    </Link>
                    <Link to='/todaysclass'>
                        <Button className="w-100" variant="primary" size="lg">Apply For Leave</Button>
                    </Link>
                    <Link to='/todaysclass'>
                        <Button className="w-100" variant="primary" size="lg">Late List</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default SideBar