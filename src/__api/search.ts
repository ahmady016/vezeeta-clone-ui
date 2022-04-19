import { useMutation } from 'react-query'

import { queryClient } from '../index'
import api from './index'

import { SearchQuery, SearchResult } from './types'

const search = async (query: SearchQuery) => {
	const { data } = await api.post('/search', query)
	return data as SearchResult
}
export function useSearchMutation() {
	return useMutation(search, {
		onSuccess: () => void queryClient.invalidateQueries('search_results'),
	})
}
