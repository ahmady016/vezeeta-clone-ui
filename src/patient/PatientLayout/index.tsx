import React from 'react'

import PatientHome from '../PatientHome'
import PatientHeader from './PatientHeader'
import PatientFooter from './PatientFooter'

function PatientLayout() {
	return (
		<>
			<PatientHeader />
			<PatientHome />
			<PatientFooter />
		</>
	)
}

export default PatientLayout
