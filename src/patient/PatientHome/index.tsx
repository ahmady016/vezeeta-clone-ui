import React from 'react'

import axios from 'axios'
import api from '../../__api'

import { Specialty, City } from './TopItems/types'

import HeroSlider from './HeroSlider'
import TopItems from './TopItems'
import Services from './Services'

const apiRequests = [
	api.get('/specialties?_limit=10&_sort=name&_order=desc'),
	api.get('/cities?_limit=10&_sort=name&_order=desc'),
]

function PatientHome() {
	const [specialties, setSpecialties] = React.useState<Specialty[]>([])
	const [cities, setCities] = React.useState<City[]>([])

	React.useEffect(() => {
		axios
			.all(apiRequests)
			.then(([specialtiesRes, citiesRes]) => {
				setCities(citiesRes.data)
				setSpecialties(specialtiesRes.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<>
			<HeroSlider />
			<TopItems title="Top Specialties" items={specialties} />
			<TopItems title="Top Cities" items={cities} />
			<Services />
		</>
	)
}

export default PatientHome
