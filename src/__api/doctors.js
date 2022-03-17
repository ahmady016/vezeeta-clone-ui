import axios from "axios"
import { useQuery, useMutation } from "react-query"

import { queryClient } from "../index"

const getAllDoctors = async () => {
  const { data } = await axios.get("/doctors")
  return data
}
export function useGetAllDoctorsQuery() {
  return useQuery("all_Doctors", getAllDoctors, {
		refetchOnWindowFocus: true
	})
}

const getDoctorById = async (doctorId) => {
  const { data } = await axios.get(`/doctors/${doctorId}`)
  return data
}
export function useGetDoctorByIdQuery(doctorId) {
  return useQuery(["selected_Doctor", doctorId], () => getDoctorById(doctorId), {
		enabled: !!doctorId,
		refetchOnWindowFocus: true,
	})
}

const createDoctor = async (newDoctor) => {
  const { data } = await axios.post('/doctors', newDoctor)
  return data
}
export function useCreateDoctorMutation() {
  return useMutation(createDoctor, {
    onSuccess: () => void queryClient.invalidateQueries('all_Doctors')
  })
}

const updateDoctor = async (updatedDoctor) => {
  const { data } = await axios.put(`/doctors/${updatedDoctor.id}`, updatedDoctor)
  return data
}
export function useUpdateDoctorMutation() {
  return useMutation(updateDoctor, {
    onSuccess: () => void queryClient.invalidateQueries('all_Doctors')
  })
}

const deleteDoctor = async (doctorId) => {
	const { data } = await axios.delete(`/doctors/${doctorId}`)
	return data
}
export function useDeleteCityMutation() {
	return useMutation(deleteDoctor, {
		onSuccess: () => void queryClient.invalidateQueries('all_Doctors'),
	})
}
