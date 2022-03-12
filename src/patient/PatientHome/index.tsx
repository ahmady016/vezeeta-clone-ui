import React from 'react'

import axios from 'axios'

import { Specialty, City } from '../TopItems/types'

import HeroSlider from './HeroSlider'
import TopItems from '../TopItems'
import Services from './Services'

const apiRequests = [
	axios.get("https://vezeeta-clone-json-server.herokuapp.com/specialties"),
	axios.get("https://vezeeta-clone-json-server.herokuapp.com/cities")
]

function index() {
	const [specialties, setSpecialties] = React.useState<Specialty[]>([])
	const [cities, setCities] = React.useState<City[]>([])

	React.useEffect(() => {
	  axios.all(apiRequests)
		.then(([ specialtiesRes, citiesRes ]) => {
			console.log("🚀 ~ specialtiesRes", specialtiesRes)
			console.log("🚀 ~ citiesRes", citiesRes)
			setCities(citiesRes.data.slice(0, 10))
			setSpecialties(specialtiesRes.data.slice(0, 10))
		})
		.catch((err) =>{console.log(err)})
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

export default index
