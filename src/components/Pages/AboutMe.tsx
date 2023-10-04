import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'

export default function AboutMe(): JSX.Element {
  return (
    <div className="py-5">
      <h1>Jeneva Ray</h1>
      <Row>
        <Card style={{ 
          backgroundColor: '#d9dbda',
          margin: 10,
          float: 'left',
          overflow: 'hidden',
          position: 'relative',
          textAlign: 'center',
          boxShadow: "1px 1px 2px #e6e6e6",
          cursor: 'default',
          background: '#fff',
          padding: '0'
        }} className="view">
          <Card.Img variant="top" src='./selfie.png' />
        </Card>
      </Row>
      {/* <img src="./selfie.png" style={imgstyle} className="py-5" /> */}
      <ListGroup>
        <ListGroup.Item as="li" variant="forest" key={1}>
          Needing precision work? I&apos;ll take it on. I come from a background
          in pharmacy, where every little thing matters.
        </ListGroup.Item>
        <ListGroup.Item as="li" variant="forest" key={2}>
          I have a hunger to learn more, so that I can better help people. Are
          you the right company for me?
        </ListGroup.Item>
        <ListGroup.Item as="li" variant="forest" key={3}>
          I have experience with analysis from data analysis to formal analysis
          (a higher tier from static analysis, used by DARPA)
        </ListGroup.Item>
        <ListGroup.Item as="li" variant="forest" key={4}>
          I have experience with Cassandra NoSQL, Mongo NoSQL, administration thereof, data
          parsers for very different information for information sources, use
          and storage
        </ListGroup.Item>
        <ListGroup.Item as="li" variant="forest" key={5}>
          I have experience with multiple languages, including JavaScript and
          Python, and I actively administer Linux systems.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
