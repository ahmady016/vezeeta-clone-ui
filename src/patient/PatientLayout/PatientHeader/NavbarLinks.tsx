import React from 'react'
import { NavLink } from 'react-router-dom'

const ICON_PROPS = {
	color: '#fff',
	fontSize: 25,
}
const NavbarLinks = ({ links, withIcon = false }: any) => {
	return links.map((Link: any, i: number) => (
		<NavLink
			key={i}
			className="text-light flex-aligned underLine-hover text-decoration-none"
			to={Link.path}
		>
			{withIcon ? (
				<>
					<Link.Icon {...ICON_PROPS} /> <span>{Link.label}</span>
				</>
			) : (
				Link.label
			)}
		</NavLink>
	))
}

export default NavbarLinks
