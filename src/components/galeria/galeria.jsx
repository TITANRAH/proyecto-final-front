import { useContext, useState } from 'react';
//import { useNavigate } from "react-router-dom";

import Context from '../../contex/Contex.jsx';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

import "./galeria.css"

export default function Galeria(props) {

    const { servicio } = useContext(Context);
    
    return (
        <div className='form-cont-productos '>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {servicio.map((e) => (
                    <Col key={e.id} >
                        <div className='cont-general-galeria'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="" variant="top" src={e.img_src} />
                                <ListGroup className="list-group-flush ">
                                    <ListGroup.Item >
                                        <h4 className='form-name'>{e.descripcion}</h4>
                                        <p>{e.desc}</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}