import { useQuery } from 'react-query'
import axios from 'axios'
import api from './index'

const getTopSpecialtiesAndTopCities = async () => {
	const [specialtiesRes, citiesRes] = await axios.all([
		api.get('/specialties?_limit=10&_sort=name&_order=desc'),
		api.get('/cities?_limit=10&_sort=name&_order=desc'),
	])
	return {
    specialties: specialtiesRes.data,
    cities: citiesRes.data,
  }
}
export function useGetTopSpecialtiesAndTopCitiesQuery() {
	return useQuery('top_specialties_and_top_cities', getTopSpecialtiesAndTopCities, {
		refetchOnWindowFocus: true,
	})
}
