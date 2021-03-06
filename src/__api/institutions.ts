import { useQuery, useMutation } from 'react-query'

import { queryClient } from '../index'

import api from './index'

import { Institution } from './types'

const getAllInstitutions = async () => {
	const { data } = await api.get('/institutions')
	return data
}
export function useGetAllInstitutionsQuery() {
	return useQuery('all_Institutions', getAllInstitutions, {
		refetchOnWindowFocus: true,
	})
}

const getInstitutionById = async (institutionId: string) => {
	const { data } = await api.get(`/institutions/${institutionId}`)
	return data
}
export function useGetInstitutionByIdQuery(institutionId: string) {
	return useQuery(
		['selected_Institution', institutionId],
		() => getInstitutionById(institutionId),
		{
			enabled: !!institutionId,
			refetchOnWindowFocus: true,
		}
	)
}

const createInstitution = async (newInstitution: Institution) => {
	const { data } = await api.post('/institutions', newInstitution)
	return data
}
export function useCreateInstitutionMutation() {
	return useMutation(createInstitution, {
		onSuccess: () => void queryClient.invalidateQueries('all_Institutions'),
	})
}

const updateInstitution = async (updatedInstitution: Institution) => {
	const { data } = await api.put(
		`/institutions/${updatedInstitution.id}`,
		updatedInstitution
	)
	return data
}
export function useUpdateInstitutionMutation() {
	return useMutation(updateInstitution, {
		onSuccess: () => void queryClient.invalidateQueries('all_Institutions'),
	})
}

const deleteInstitution = async (institutionId: string) => {
	const { data } = await api.delete(`/institutions/${institutionId}`)
	return data
}
export function useDeleteCityMutation() {
	return useMutation(deleteInstitution, {
		onSuccess: () => void queryClient.invalidateQueries('all_Institutions'),
	})
}
