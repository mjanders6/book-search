import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Aloha Book Worm!</h1>
          <p className="lead">Search for a book that you can sit back and read</p>
          <Link to="/Books">Follow this link to find a good book</Link>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;