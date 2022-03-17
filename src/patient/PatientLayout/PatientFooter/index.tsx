import React from 'react'

import { Row, Container } from 'react-bootstrap'

import LinksColumn from './LinksColumn'

import VezeetaLogo from '../../../__images/logo.webp'

const columns = [
	{
		heading: (
			<>
				<img
					className="d-none d-md-block"
					width="130px"
					src={VezeetaLogo}
					alt=""
				/>
				<span className="d-md-none">Vezeeta</span>
			</>
		),
		links: [
			{ explain: 'About Us', href: '#' },
			{ explain: 'Our Team', href: '#' },
			{ explain: 'Careers', href: '#' },
			{ explain: 'Press', href: '#' },
		],
	},
	{
		heading: 'Search By',
		links: [
			{ explain: 'Specialty', href: '#' },
			{ explain: 'Area', href: '#' },
			{ explain: 'Insurance', href: '#' },
			{ explain: 'Hospital', href: '#' },
			{ explain: 'Center', href: '#' },
		],
	},
	{
		heading: 'Are You A Doctor ?',
		links: [{ explain: 'Join Vezeeta Doctors', href: '#' }],
	},
	{
		heading: 'Need Help?',
		links: [
			{ explain: 'Contact Us', href: '#' },
			{ explain: 'Terms Of Use', href: '#' },
			{ explain: 'Privacy Policy', href: '#' },
			{ explain: 'Doctors Privacy Policy', href: '#' },
		],
	},
]

const PatientFooter = () => {
	return (
		<footer className="bg-primary-darker pt-4 pb-5 text-light">
			<Container>
				<Row className="gy-4">
					{columns.map((column: any, idx: any) => (
						<LinksColumn key={idx} heading={column.heading} links={column.links} />
					))}
				</Row>
			</Container>
		</footer>
	)
}

export default PatientFooter
