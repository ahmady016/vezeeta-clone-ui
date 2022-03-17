import React from 'react'

import SearchBox from './SearchBox'
import FiltersSidebar from './FiltersSidebar'
import SearchResult from './SearchResult'

import { Container, Row, Col } from 'react-bootstrap'

function PatientSearch() {
	return (
		<Container fluid className="h-45 mb-2">
			<h3>Patient Search</h3>
			<Row>
				<SearchBox />
			</Row>
			<Row>
				<Col md={2} xs={12}>
					<FiltersSidebar />
				</Col>
				<Col md={10} xs={12}>
					<SearchResult />
				</Col>
			</Row>
		</Container>
	)
}

export default PatientSearch
