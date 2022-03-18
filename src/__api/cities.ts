import axios from 'axios'
import { useQuery, useMutation } from 'react-query'

import { queryClient } from '../index'

import { City } from './types'

const getAllCities = async () => {
	const { data } = await axios.get('/cities')
	return data
}
export function useGetAllCitiesQuery() {
	return useQuery('all_cities', getAllCities, {
		refetchOnWindowFocus: true
	})
}

const getCityById = async (cityId: string) => {
	const { data } = await axios.get(`/cities/${cityId}`)
	return data
}
export function useGetCityByIdQuery(cityId: string) {
	return useQuery(['selected_city', cityId], () => getCityById(cityId), {
		enabled: !!cityId,
		refetchOnWindowFocus: true,
	})
}

const createCity = async (newCity: City) => {
	const { data } = await axios.post('/cities', newCity)
	return data
}
export function useCreateCityMutation() {
	return useMutation(createCity, {
		onSuccess: () => void queryClient.invalidateQueries('all_cities'),
	})
}

const updateCity = async (updatedCity: City) => {
	const { data } = await axios.put(`/cities/${updatedCity.id}`, updatedCity)
	return data
}
export function useUpdateCityMutation() {
	return useMutation(updateCity, {
		onSuccess: () => void queryClient.invalidateQueries('all_cities'),
	})
}

const deleteCity = async (cityId: string) => {
	const { data } = await axios.delete(`/cities/${cityId}`)
	return data
}
export function useDeleteCityMutation() {
	return useMutation(deleteCity, {
		onSuccess: () => void queryClient.invalidateQueries('all_cities'),
	})
}
