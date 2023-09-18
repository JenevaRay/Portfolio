import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Github, Git, Link } from 'react-bootstrap-icons';

// image (gif or screenshot)
// title
// link to deployed
// link to GH Repo

// modified source: https://tympanus.net/codrops/2011/11/02/original-hover-effects-with-css3/ #6
const css = (
  <style type="text/css">{`
.view {
  margin: 10px;
  float: left;

  overflow: hidden;
  position: relative;
  text-align: center;
  box-shadow: 1px 1px 2px #e6e6e6;
  cursor: default;
  background: #fff;
}
.view .mask, .view .content {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}
.view .mask {
  height: 100%;
  width: 100%;
  background-color: rgba(146,96,91,0.5);
  opacity: 0;
  transition: all 0.3s ease-in 0.4s;
}
.view img {
  display: block;
  position: relative;
  transition: all 0.4s ease-in-out 0.5s;
}
.view .h5 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  padding: 10px;
  
  
  opacity: 0;
  border-bottom: 1px solid rgba(0, 0 , 0, 0.3);
  background: transparent;
  transform: scale(10);
  transition: all 0.3s ease-in-out 0.1s;
}
.view p {
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 12px;
  position: relative;
  color: #fff;
  text-align: center
  opacity: 0;
  transform: scale(10);
  transition: all 0.3s ease-in-out 0.2s;
}
.view a.info {
  display: inline-block;
  text-decoration: none;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 0 1px #000;
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.3s ease-in-out 0.1s;
}
.view:hover .mask {
  height: 100%;
  width: 100%;
  opacity: 1;
  transition-delay: 0s;
}
.view:hover img {
  transition-delay: 0s;
}
.view:hover .h5 {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0.1s;
}
.view:hover p {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0.2s;
}
.view:hover a.info {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.3s;
}
.view a.info:hover {
  box-shadow: 0 0 5px #000;
}
`}</style>
);

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
      {css}
      <Card style={{ backgroundColor: '#d9dbda' }} className="view">
        <Card.Img variant="top" src={image} />
        <Card.Body className="mask">
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
          {/* <Alert variant='info'>
            <a href={github}>Clone URL</a>
          </Alert> */}
          {/* {alert} */}
        </Card.Body>
      </Card>
    </div>
  );
}
