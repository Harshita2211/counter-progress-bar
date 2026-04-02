import React from 'react'
import { Button, Col, Container, Input, Progress, Row } from 'reactstrap'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

function SimpleCounter() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-custom vh-100'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <p className='custom-font'>Progress Bar</p>
                    <Col sm='7' md='6' lg='6' >
                        <Progress
                            color='orange'
                            className="my-4 rounded custom-progress"
                            value={10}
                        > 10%
                        </Progress>

                    </Col>
                </Row>

                <Row xs={3} className='justify-content-center align-items-center'><Col className='text-end'>

                    <Button
                        className=" bg-light text-dark border-0 custom-btn me-2"
                    >
                        <FaCirclePlus />
                    </Button>

                </Col>
                    <Col md='3' lg='1' >
                        <Input type='number' className='custom-formx-auto' max='100' maxLength='3' />
                    </Col>
                    <Col className='text-start'>

                        <Button
                            className=" bg-light text-dark border-0 custom-btn me-2"
                        >
                            <FaCircleMinus />
                        </Button> 

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SimpleCounter