import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Github, Git, Link } from 'react-bootstrap-icons';

// image (gif or screenshot)
// title
// link to deployed
// link to GH Repo


interface Props {
  title: string;
  description: string;
  image: string;
  github: string;
  htmlUrl: string;
  homepage: string;
}

export default function Project(props: Props): JSX.Element {
  const { title, description, image, htmlUrl, homepage } = props;
  let button;
  // let alert
  if (homepage === '') {
    // alert = (<Alert variant="clone"><a href={github}>Git Clone</a></Alert>)
    button = (
      <Button variant="clone">
        <a href={htmlUrl}>
          <Git /> Clone
        </a>
      </Button>
    );
  } else {
    // alert = (<Alert variant='deployed'><a href={deployment}>Deployment</a></Alert>)
    button = (
      <Button variant="deployed">
        <a href={homepage}>
          <Link /> Site
        </a>
      </Button>
    );
  }
  return (
    <div className="mx-auto my-3">
      <Card style={{ 
        backgroundColor: '#d9dbda',
        margin: 10,
        float: 'left',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        boxShadow: "1px 1px 2px #e6e6e6",
        cursor: 'default',
        background: '#fff'
      }} className="view">
        <Card.Img variant="top" src={image} />
        <Card.Body style={{
          position: 'absolute',
          overflow: 'hidden',
          top: 0,
          left: 0
        }} className="mask">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Row>
            <Col sm="5">
              <Button variant="forest" href={htmlUrl} className="px-auto">
                <Github /> Github
              </Button>
            </Col>
            <Col sm="2"></Col>
            <Col sm="5">{button}</Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
