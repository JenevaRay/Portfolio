import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

// image (gif or screenshot)
// title
// link to deployed
// link to GH Repo

interface Props {
  title: string
  description: string
  image: string
  github: string
  htmlUrl: string
  deployment: string
}

export default function Project(props: Props): JSX.Element {
  const {title, description, image, github, htmlUrl, deployment} = props
  let alert
  if (deployment === "") {
    alert = (<Alert variant="info"><a href={github}>Git Clone (Server-Size App)</a></Alert>)
  } else {
    alert = (<Alert variant='info'><a href={deployment}>Deployment</a></Alert>)
  }
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={htmlUrl}>Github</Button>
      {alert}
      {/* <Alert variant='info'>
        <a href={github}>Clone URL</a>
      </Alert> */}
    </Card.Body>
  </Card>
  );
}