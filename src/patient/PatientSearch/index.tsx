import React from 'react'

import SearchBox from './SearchBox'
import FiltersSidebar from './FiltersSidebar'
import SearchResult from './SearchResult'

import {
	FiltersInitialState,
	FiltersState,
	SearchQueryInitialState,
	SearchQueryState,
} from './types'
import { SearchQuery } from '../../__api/types'
import { useSearchMutation } from '../../__api/search'

import { Container, Row, Col } from 'react-bootstrap'

function PatientSearch() {
	const [searchQuery, setSearchQuery] = React.useState<SearchQueryState>(
		SearchQueryInitialState
	)
	const [filters, setFilters] =
		React.useState<FiltersState>(FiltersInitialState)

	const [query, setQuery] = React.useState<SearchQuery>({} as SearchQuery)
	React.useEffect(() => {
		if (
			searchQuery !== SearchQueryInitialState ||
			filters !== FiltersInitialState
		) {
			let query = {} as SearchQuery

			if(searchQuery.specialty)
				query.specialty = searchQuery.specialty
			if(searchQuery.city)
				query.city = searchQuery.city
			if (searchQuery.name)
				query.name = searchQuery.name
			if(filters.title.length > 0)
				query.title = filters.title
			if(filters.gender.length > 0)
				query.gender = filters.gender
			if(filters.availability.length > 0)
				query.availability = filters.availability
			if(filters.entity.length > 0)
				query.entity = filters.entity

			setQuery(query)
		}
	}, [searchQuery, filters])

	const { mutate: search, isLoading, isError, error, data } = useSearchMutation()
	React.useEffect(() => {
		if(Object.keys(query).length > 0) {
			console.log("🚀: PatientSearch -> query", query)
			search(query)
		}
	}, [query, search])

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
					<SearchResult isLoading={isLoading} isError={isError} error={error} results={data} />
				</Col>
			</Row>
		</Container>
	)
}

export default PatientSearch
