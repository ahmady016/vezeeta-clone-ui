import { useQuery, useMutation } from 'react-query'

import { queryClient } from '../index'

import api from './index'

import { Specialty } from './types'

const getAllSpecialties = async () => {
	const { data } = await api.get('/specialties')
	return data
}
export function useGetAllSpecialtiesQuery() {
	return useQuery('all_specialties', getAllSpecialties, {
		refetchOnWindowFocus: true
	})
}

const getSpecialtyById = async (specialtyId: string) => {
	const { data } = await api.get(`/specialties/${specialtyId}`)
	return data
}
export function useGetSpecialtyByIdQuery(specialtyId: string) {
	return useQuery(['selected_specialty', specialtyId], () => getSpecialtyById(specialtyId), {
		enabled: !!specialtyId,
		refetchOnWindowFocus: true,
	})
}

const createSpecialty = async (newSpecialty: Specialty) => {
	const { data } = await api.post('/specialties', newSpecialty)
	return data
}
export function useCreateSpecialtyMutation() {
	return useMutation(createSpecialty, {
		onSuccess: () => void queryClient.invalidateQueries('all_specialties'),
	})
}

const updateSpecialty = async (updatedSpecialty: Specialty) => {
	const { data } = await api.put(`/specialties/${updatedSpecialty.id}`, updatedSpecialty)
	return data
}
export function useUpdateSpecialtyMutation() {
	return useMutation(updateSpecialty, {
		onSuccess: () => void queryClient.invalidateQueries('all_specialties'),
	})
}

const deleteSpecialty = async (specialtyId: string) => {
	const { data } = await api.delete(`/specialties/${specialtyId}`)
	return data
}
export function useDeleteSpecialtyMutation() {
	return useMutation(deleteSpecialty, {
		onSuccess: () => void queryClient.invalidateQueries('all_specialties'),
	})
}
