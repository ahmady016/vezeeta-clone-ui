import React from 'react'

import { Navbar, Nav, Button } from 'react-bootstrap'

import NavbarLinks from './NavbarLinks'

import logo from '../../../__images/logo.webp'

const Topside = ({ links }: any) => {
	return (
		<>
			<Navbar.Brand href="#">
				<img src={logo} alt="Some errors" />
			</Navbar.Brand>

			<Navbar.Collapse
				className="topside-nav text-center d-none d-lg-flex"
				id="responsive-navbar-nav"
			>
				<Nav className="me-3 links-box ms-auto my-2 my-lg-0 color-light">
					<Button variant="outline-light" className="sign-btn me-3">
						Sign Up
					</Button>
					<NavbarLinks links={links} />
				</Nav>
			</Navbar.Collapse>
		</>
	)
}

export default Topside
