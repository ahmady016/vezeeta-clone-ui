import React from 'react'

import SearchBox from './SearchBox'
import FiltersSidebar from './FiltersSidebar'
import SearchResult from './SearchResult'

import { Container, Row, Col } from 'react-bootstrap'

function PatientSearch() {
	const [searchQuery, setSearchQuery] = React.useState(null)
	const [filters, setFilters] = React.useState(null)

	React.useEffect(() => {
		console.log("🚀: PatientSearch => filters", filters)
		console.log("🚀: PatientSearch => searchQuery", searchQuery)
	}, [searchQuery, filters])

	return (
		<Container fluid className="h-45 mb-2">
			<h3>Patient Search</h3>
			<Row>
				<SearchBox setSearchQuery={setSearchQuery} />
			</Row>
			<Row>
				<Col md={2} xs={12}>
					<FiltersSidebar setFilters={setFilters} />
				</Col>
				<Col md={10} xs={12}>
					<SearchResult />
				</Col>
			</Row>
		</Container>
	)
}

export default PatientSearch
