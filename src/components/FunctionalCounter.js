import React, { useState } from 'react'
import { Button, Col, Container, Input, Progress, Row } from 'reactstrap'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

function FunctionalCounter() {
    const [count, setCount] = useState(0);
    console.log('count', count);

    const Increment = () => {
        if(count < 100) {
            setCount(count + 1);
        }
    }
    const Decrement = () => {
        if(count > 0) { 
        setCount(count - 1);
        }
    }

    const handleInputChange = (e) => {
    //     const value = e.target.value === ''?'':Number(e.target.value);
    //     console.log("Value: ", value);

    //    if(value === '' || (value >= 0 && value <= 100)) {
    //     setCount(value);
    //    }

       const value = e.target.value;
       if(value === ""){
        setCount(value);
        return;
       }

       const newValue = Number(e.target.value);
       if(newValue >= 0 && newValue <= 100) {
        setCount(newValue);
    }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-custom vh-100'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <p className='custom-font'>Progress Bar</p>
                    <Col sm='7' md='6' lg='6' >
                        <Progress
                            color='orange'
                            className="my-4 rounded custom-progress"
                            value={count}
                        > {" "} {count}%
                        </Progress>

                    </Col>
                </Row>

                <Row xs={3} className='justify-content-center align-items-center'><Col className='text-end'>

                    <Button
                        className=" bg-light text-dark border-0 custom-btn me-2" size='sm' onClick={Increment}
                    >
                        <FaCirclePlus />
                    </Button>

                </Col>
                    <Col md='3' lg='1' >
                        <Input type='number' className='custom-formx-auto' max='100' maxLength='3' onChange={handleInputChange}
                        value={count}/>
                    </Col>
                    <Col className='text-start'>

                        <Button
                            className=" bg-light text-dark border-0 custom-btn me-2 " size='sm' onClick={Decrement}
                        >
                            <FaCircleMinus />
                        </Button> 

                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default FunctionalCounter
