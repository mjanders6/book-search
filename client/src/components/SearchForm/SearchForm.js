import React from 'react'
import { Form, FormGroup, Button, Label, Input, Col } from 'reactstrap'

const SearchForm = ({ handleFormSubmit, handleInputChange, bookSearch }) =>
    <Form>
        <FormGroup row>
            <Col xs={8} sm={6} lg={6}>
                <Label htmlFor="bookSearch">Book Search:</Label>
                <Input id="bookSearch" type="text" name="search" value={bookSearch} onChange={handleInputChange} />
            </Col>
        </FormGroup>

        <Button onClick={handleFormSubmit}>Find Books</Button>
    </Form>

export default SearchForm