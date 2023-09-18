import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AboutMe(): JSX.Element {
  const imgstyle = {
    top: '-50px',
    bottom: '-50px',
    zIndex: '999',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease',
    width: '100%',
    display: 'block',
    // maxHeight: "200px",
    ObjectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="py-5">
      <h1>Jeneva Ray</h1>
      <img src="/selfie.png" style={imgstyle} className="py-5"></img>
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
          (a higher tier from static analysis)
        </ListGroup.Item>
        <ListGroup.Item as="li" variant="forest" key={4}>
          I have experience with Cassandra NoSQL and administration, data
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
