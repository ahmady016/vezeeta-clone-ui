import React from 'react'
import { SearchResultProps } from '../types'

import { Alert, Spinner } from 'react-bootstrap'

const SearchResult: React.FC<SearchResultProps> = ({ isLoading, isError, error, results }) => {
	if (isLoading)
    return <Spinner animation="border" variant="primary" />
	if (isError)
    return <Alert variant='danger'>{(error as any).message}</Alert>
	if (!results)
    return <div>No results</div>
  console.log("🚀: results", results)
	return (
    <div>Search Result Will Shown Here ...</div>
  )
}

export default SearchResult
