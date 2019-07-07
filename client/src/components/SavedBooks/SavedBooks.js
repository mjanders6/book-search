import React from 'react'
import { Card, CardImg, Container, Row, Col, CardBody, CardText, Button } from 'reactstrap';

const Book = ({ book, handleDeleteBook }) =>
    <div>
        <Container>
            {
                book.map(({ title, authors, description, image, id }, index) => (
                    <>
                        <Row>
                            <Col sm="6">
                                <Card>
                                    <CardImg top width="20%" src={image} alt={title} />
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