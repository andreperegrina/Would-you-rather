// Libraries
import React from 'react';
import {Container, Header, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

// This page will show up when the user tries to access a question that doesn't exist's
const QuestionNotFoundPage = () => {
   return (
      <Container>
         <Segment style={{textAlign:'center'}}>
            <Header as='h1'>404</Header>
            <Header as='h2'>Question not found</Header>
            <div>Please go back to the <Link to='/'>Home page</Link></div>
         </Segment>
      </Container>
   );
};


QuestionNotFoundPage.propTypes = {};

export default QuestionNotFoundPage;
