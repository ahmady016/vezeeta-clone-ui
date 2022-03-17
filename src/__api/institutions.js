import axios from "axios"
import { useQuery, useMutation } from "react-query"

import { queryClient } from "../index"

const getAllInstitutions = async () => {
  const { data } = await axios.get("/institutions")
  return data
}
export function useGetAllInstitutionsQuery() {
  return useQuery("all_Institutions", getAllInstitutions, {
		refetchOnWindowFocus: true
	})
}

const getInstitutionById = async (institutionId) => {
  const { data } = await axios.get(`/institutions/${institutionId}`)
  return data
}
export function useGetInstitutionByIdQuery(institutionId) {
  return useQuery(["selected_Institution", institutionId], () => getInstitutionById(institutionId), {
		enabled: !!institutionId,
		refetchOnWindowFocus: true,
	})
}

const createInstitution = async (newInstitution) => {
  const { data } = await axios.post('/institutions', newInstitution)
  return data
}
export function useCreateInstitutionMutation() {
  return useMutation(createInstitution, {
    onSuccess: () => void queryClient.invalidateQueries('all_Institutions')
  })
}

const updateInstitution = async (updatedInstitution) => {
  const { data } = await axios.put(`/institutions/${updatedInstitution.id}`, updatedInstitution)
  return data
}
export function useUpdateInstitutionMutation() {
  return useMutation(updateInstitution, {
    onSuccess: () => void queryClient.invalidateQueries('all_Institutions')
  })
}

const deleteInstitution = async (institutionId) => {
	const { data } = await axios.delete(`/institutions/${institutionId}`)
	return data
}
export function useDeleteCityMutation() {
	return useMutation(deleteInstitution, {
		onSuccess: () => void queryClient.invalidateQueries('all_Institutions'),
	})
}