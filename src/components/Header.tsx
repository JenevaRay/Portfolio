import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'

import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { pageActions } from '../redux/page/slice';

const myName = 'Jeneva Ray';

const Header = (): JSX.Element => {
  const { page } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();
  const setPage = (page: string): void => {
    dispatch(pageActions.setPage(page));
  };
  return (
    <Navbar expand="lg" className="header bd-body-tertiary">
      <Container>
        <Navbar.Brand href="#portfolio">{myName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about-me"
              onClick={() => setPage('about me')}
              className={page === 'about me' ? 'active' : ''}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => setPage('portfolio')}
              className={page === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => setPage('contact')}
              className={page === 'contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => setPage('resume')}
              className={page === 'resume' ? 'active' : ''}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
