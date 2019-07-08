import React from 'react'
import './SavedBooks.css'
import { Card, CardImg, Container, Row, Col, CardBody, CardText, Button } from 'reactstrap';

const Book = ({ book, handleDeleteBook }) =>
    <div>
        <Container>
            {
                book.map(({ title, authors, description, image, id }, index) => (
                    <>
                        <Row>
                            <Col xs="12" sm="5" lg="6">
                                <Card>
                                    <CardImg top src={image} alt={title} />
                                    <CardBody>
                                        <h2>{title} by {authors}</h2>
                                        <CardText>{description}</CardText>
                                        <Button id={id} onClick={handleDeleteBook}>Delete</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </>
                ))
            }
        </Container>
    </div>


export default Book