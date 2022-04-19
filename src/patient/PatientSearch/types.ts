import { SearchResult } from './../../__api/types'

export const GENDER = ['Male', 'Female']
export const TITLES = ['Professor', 'Lecturer', 'Consultant', 'Specialist']
export const AVAILABILITIES = ['Today', 'Tomorrow']
export const ENTITIES = ['Hospital', 'Clinic', 'Laboratory']

export type SearchQueryState = {
	specialty: string
	city: string
	name: string
}
export type SearchBoxProps = {
	setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueryState>>
}
export const SearchQueryInitialState: SearchQueryState = {
	specialty: '',
	city: '',
	name: '',
}

export type FiltersState = {
	title: string[]
	gender: string[]
	availability: string[]
	entity: string[]
}
export type FiltersSidebarProps = {
	setFilters: React.Dispatch<React.SetStateAction<FiltersState>>
}
export type FilterCheckboxListProps = {
	name: string
	items: string[]
	setFilters: React.Dispatch<React.SetStateAction<FiltersState>>
}
export const FiltersInitialState: FiltersState = {
	title: [],
	gender: [],
	availability: [],
	entity: [],
}

export type SearchResultProps = {
	isLoading: boolean
	isError: boolean
	error: unknown
	results: SearchResult | undefined
}
