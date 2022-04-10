import React from 'react'

import SearchBox from './SearchBox'
import FiltersSidebar from './FiltersSidebar'
import SearchResult from './SearchResult'

import { FiltersInitialState, FiltersState, SearchQueryInitialState, SearchQueryState } from './types'

import { Container, Row, Col } from 'react-bootstrap'

function PatientSearch() {
	const [searchQuery, setSearchQuery] = React.useState<SearchQueryState>(SearchQueryInitialState)
	const [filters, setFilters] = React.useState<FiltersState>(FiltersInitialState)

	React.useEffect(() => {
		if(searchQuery !== SearchQueryInitialState)
			console.log("🚀: PatientSearch => searchQuery", searchQuery)
		if(filters !== FiltersInitialState)
			console.log("🚀: PatientSearch => filters", filters)
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
