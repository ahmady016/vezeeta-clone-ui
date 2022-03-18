import React from 'react'
import Aside from './Aside'
import Topside from './Topside'

import { Navbar, Container } from 'react-bootstrap'

import { AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
import { RiUser2Line } from 'react-icons/ri'

import './index.scss'

const navLinks = {
	topSide: [
		{ label: 'Login', path: '/login' },
		{ label: 'Search For Doctors', path: '/search-for-doctors' },
		{ label: 'Contact Us', path: '/contact-us' },
	],
	aside: [
		{ label: 'Home Page', href: '#', Icon: AiOutlineHome },
		{ label: 'Join now as a user', href: '#', Icon: AiOutlineUserAdd },
		{ label: 'Vezeeta For Doctors', href: '#', Icon: RiUser2Line },
		{ label: 'Login', href: '#', Icon: FiLogIn },
		{ label: 'Contact Us', href: '#', Icon: BsTelephone },
	],
}

const Header = () => {
	return (
		<Navbar className="bg-primary-darker" expand="lg" variant="dark">
			<Container fluid>
				<Topside links={navLinks.topSide} />
				<Aside links={navLinks.aside} />
			</Container>
		</Navbar>
	)
}

export default Header
