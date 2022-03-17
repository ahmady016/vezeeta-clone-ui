import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks'
import { Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { FiArrowRight } from 'react-icons/fi'

const Aside = ({ links }: any) => {
	const [isShow, setShow] = useState(false)

	return (
		<>
			<Navbar.Toggle
				onClick={() => setShow(true)}
				className="navbar-toggle"
				aria-controls="offcanvasNavbar"
			/>
			<Navbar.Offcanvas
				show={isShow}
				id="offcanvasNavbar"
				className="aside-bar bg-primary-darker"
				aria-labelledby="offcanvasNavbarLabel"
				placement="end"
			>
				<Offcanvas.Header>
					<Offcanvas.Title className="ms-auto">
						<FiArrowRight
							onClick={() => setShow(false)}
							className="cu-pointer"
							color="#fff"
							fontSize={40}
						/>
					</Offcanvas.Title>
				</Offcanvas.Header>

				<Offcanvas.Body className="aside-body p-0">
					<Nav className="box-aside-links p-0 justify-content-end text-light flex-grow-1 pe-3">
						<NavbarLinks links={links} withIcon={true} />
					</Nav>
				</Offcanvas.Body>
			</Navbar.Offcanvas>
		</>
	)
}

export default Aside
