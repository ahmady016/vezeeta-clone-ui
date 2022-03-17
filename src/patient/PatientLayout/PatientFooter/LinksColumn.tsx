import React from 'react'
import { Col } from 'react-bootstrap'

const LinksColumn = ({ heading, links }: any) => {
	return (
		<Col md={3} className="col-6">
			<h2 className="fs-5 mb-4">{heading}</h2>

			{links.map((link: any, idx: any) => (
				<a
					key={idx}
					className="w-fit-content d-block my-2 text-light text-decoration-none text-smaller underLine-hover"
					href={link.href}
				>
					{link.explain}
				</a>
			))}
		</Col>
	)
}

export default LinksColumn
