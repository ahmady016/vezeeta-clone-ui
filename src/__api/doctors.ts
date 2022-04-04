import { useQuery, useMutation } from 'react-query'

import { queryClient } from '../index'

import api from './index'

import { Doctor } from './types'

const getAllDoctors = async () => {
	const { data } = await api.get('/doctors')
	return data
}
export function useGetAllDoctorsQuery() {
	return useQuery('all_Doctors', getAllDoctors, {
		refetchOnWindowFocus: true,
	})
}

const getDoctorById = async (doctorId: string) => {
	const { data } = await api.get(`/doctors/${doctorId}`)
	return data
}
export function useGetDoctorByIdQuery(doctorId: string) {
	return useQuery(
		['selected_Doctor', doctorId],
		() => getDoctorById(doctorId),
		{
			enabled: !!doctorId,
			refetchOnWindowFocus: true,
		}
	)
}

const createDoctor = async (newDoctor: Doctor) => {
	const { data } = await api.post('/doctors', newDoctor)
	return data
}
export function useCreateDoctorMutation() {
	return useMutation(createDoctor, {
		onSuccess: () => void queryClient.invalidateQueries('all_Doctors'),
	})
}

const updateDoctor = async (updatedDoctor: Doctor) => {
	const { data } = await api.put(
		`/doctors/${updatedDoctor.id}`,
		updatedDoctor
	)
	return data
}
export function useUpdateDoctorMutation() {
	return useMutation(updateDoctor, {
		onSuccess: () => void queryClient.invalidateQueries('all_Doctors'),
	})
}

const deleteDoctor = async (doctorId: string) => {
	const { data } = await api.delete(`/doctors/${doctorId}`)
	return data
}
export function useDeleteCityMutation() {
	return useMutation(deleteDoctor, {
		onSuccess: () => void queryClient.invalidateQueries('all_Doctors'),
	})
}
