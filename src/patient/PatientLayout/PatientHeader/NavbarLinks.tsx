import React from 'react'
import { Nav } from 'react-bootstrap'

const NavbarLinks = ({ links, withIcon = false }: any) => {
	const iconProps = {
		color: '#fff',
		fontSize: 25,
	}

	return links.map((Link: any, i: any) => (
		<Nav.Link
			key={i}
			className="text-light flex-aligned underLine-hover"
			href={Link.href}
		>
			{withIcon ? (
				<>
					<Link.Icon {...iconProps} /> <span>{Link.label}</span>
				</>
			) : (
				Link.label
			)}
		</Nav.Link>
	))
}

export default NavbarLinks
