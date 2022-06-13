import React from 'react'
import './Team.css'
import {CardGroup, Card} from "react-bootstrap";
import image1 from '../../../images/team/Tanvir.jpg'
import image2 from '../../../images/team/Ayesha_Siddika.jpg'
import image3 from '../../../images/team/demo.jpg'

const Team = () => {

    return (

        <div id='Team'>
            <h2>Meet Our
                <span className='tomato'> Team</span>
            </h2>
            <CardGroup className='p-2'>
                <Card className='m-5'>
                    <Card.Img className='images' variant="top" src={image1}/>
                    <Card.Body>
                        <Card.Title>Tanvir Hasan</Card.Title>
                        <Card.Text>
                            <strong>Student</strong>
                            <br/>
                            Faculty of Science & Engineering Department of Computer Science & Engineering
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='m-5'>
                    <Card.Img className='images' variant="top" src={image2}/>
                    <Card.Body>
                        <Card.Title>Ayesha Siddika</Card.Title>
                        <Card.Text>
                            <strong>Assistant Professor</strong>
                            <br/>
                            Faculty of Science & Engineering Department of Computer Science & Engineering
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='m-5'>
                    <Card.Img className='images' variant="top" src={image3}/>
                    <Card.Body>
                        <Card.Title>Rashedul Hasan</Card.Title>
                        <Card.Text>
                            <strong>Student</strong>
                            <br/>
                            Faculty of Science & Engineering Department of Computer Science & Engineering
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    )
}

export default Team