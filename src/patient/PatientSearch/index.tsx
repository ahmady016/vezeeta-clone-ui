import React from 'react'

import SearchBox from './SearchBox'
import FiltersSidebar from './FiltersSidebar'
import SearchResult from './SearchResult'

import { FiltersState, SearchQueryState } from './types'

import { Container, Row, Col } from 'react-bootstrap'

function PatientSearch() {
	const [searchQuery, setSearchQuery] = React.useState<SearchQueryState | null>(null)
	const [filters, setFilters] = React.useState<FiltersState | null>(null)
	React.useEffect(() => {
		if(searchQuery || filters) {
			console.log("🚀: PatientSearch => searchQuery", searchQuery)
			console.log("🚀: PatientSearch => filters", filters)
		}
	}, [searchQuery, filters])

	return (
		<Container fluid className="h-45 mb-2">
			<h3>Book a Doctor</h3>
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
