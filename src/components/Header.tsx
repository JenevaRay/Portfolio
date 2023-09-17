import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'

import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { pageActions } from '../redux/page/slice';

const myName = 'Jeneva Ray'

const Header = (): JSX.Element => {
    const { page } = useAppSelector((state) => state.page)
    const dispatch = useAppDispatch()
    const setPage = (page: string): void => {
        dispatch(pageActions.setPage(page))
    }
    if (page === null) {
        setPage('Portfolio')
    }
    return (
        <Navbar expand="lg" className="bd-body-tertiary">
            <Container>
                <Navbar.Brand href="#portfolio">{myName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-me" 
                            // onClick={()=>handlePageChange('About Me')}
                            onClick={()=>setPage('About Me')}
                            // className={currentPage === 'About Me' ? 'active' : ''}
                            className={page === 'About Me' ? 'active' : ''}
                        >About Me</Nav.Link>
                        <Nav.Link href="#portfolio" 
                            // onClick={()=>handlePageChange('Portfolio')}
                            onClick={()=>setPage('Portfolio')}
                            // className={currentPage === 'Portfolio' ? 'active' : ''}
                            className={page === 'Portfolio' ? 'active' : ''}
                        >Portfolio</Nav.Link>
                        <Nav.Link href="#contact" 
                            // onClick={()=>handlePageChange('Contact')}
                            onClick={()=>setPage('Contact')}
                            // className={currentPage === 'Contact' ? 'active' : ''}
                            className={page === 'Contact' ? 'active' : ''}
                        >Contact</Nav.Link>
                        <Nav.Link href="#resume" 
                            // onClick={()=>handlePageChange('Resume')}
                            onClick={()=>setPage('Resume')}
                            // className={currentPage === 'Resume' ? 'active' : ''}
                            className={page === 'Resume' ? 'active' : ''}
                        >Resume</Nav.Link>
                        {/* <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#GitHub">GitHub</NavDropdown.Item>

                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header