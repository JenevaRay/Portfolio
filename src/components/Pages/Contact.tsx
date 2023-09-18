import React, { useState } from 'react'; // useEffect
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Contact(): JSX.Element {
  // if the whole form has been validated by JavaScript
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState('');
  const [validatedName, setValidatedName] = useState(false);
  const [email, setEmail] = useState('');
  const [validatedEmail, setValidatedEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [validatedMessage, setValidatedMessage] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const style = {
    color: 'white',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // this stupidly long regex is a very detailed email validation regex.
    // eslint-disable-next-line no-empty-character-class
    const emailRegex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/;
    switch (inputType) {
      case 'email':
        setEmail(inputValue);
        setValidatedEmail(emailRegex.test(email));
        if (validatedEmail) {
          setErrorMessage('');
        } else {
          setErrorMessage('Email is invalid');
        }
        break;
      case 'name':
        setName(inputValue);
        if (name.length > 3) {
          setErrorMessage('');
          setValidatedName(true);
        } else {
          setErrorMessage('Name is too short!');
          console.log(false);
          setValidatedName(false);
        }
        break;
      case 'message':
        if (message.length > 20) {
          setErrorMessage('');
          setValidatedMessage(true);
        } else {
          setErrorMessage('Message is required');
          setValidatedMessage(false);
        }
        setMessage(inputValue);
        break;
      default:
        console.log(`inputType ${String(inputType)} not validated`);
    }
    if (validatedEmail && validatedMessage && validatedName) {
      setValidated(true);
    }
  };

  const handleSubmit = (event: any): void => {
    const form = event.currentTarget;
    // has to pass both built-in HTML checks and JavaScript checks.
    if (form.checkValidity() === false || !validated) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={style}
      className="py-5"
    >
      <Form.Group className="mb-3" as={Row} controlId="formName">
        <Form.Label column sm="2">
          Name:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="name"
            type="text"
            required
            onChange={handleInputChange}
            minLength={3}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row} controlId="formEmail">
        <Form.Label column sm="2">
          Email address:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="email"
            type="email"
            required
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row} controlId="formMessage">
        <Form.Label column sm="2">
          Message:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            name="message"
            type="textarea"
            required
            placeholder=""
            onChange={handleInputChange}
            minLength={20}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" as={Row} controlId="formSubmit">
        <Col sm="2"></Col>
        <Col sm="2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col sm="8">
          <Form.Text style={{ color: 'white' }}>{errorMessage}</Form.Text>
        </Col>
      </Form.Group>
    </Form>
  );
}
