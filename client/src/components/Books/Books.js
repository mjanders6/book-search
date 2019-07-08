import React from 'react'
import { Card, CardImg, Container, Row, Col, CardBody, CardText, Button } from 'reactstrap';

const Book = ({ book, handleSaveBook, isSaved }) =>
    <div>
        <Container>
            {
                book.map(({ title, authors, description, image, id }, index) => (
                    <>
                        <Row>
                            <Col xs="12" sm="5" lg="6">
                                <Card>
                                    <CardImg top width="20%" src={image} alt={title} />
                                    <CardBody>
                                        <h2>{title} by {authors}</h2>
                                        <CardText>{description}</CardText>
                                        <Button id={id} onClick={handleSaveBook}>Save</Button>
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