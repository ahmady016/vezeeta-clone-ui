import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PatientHeader from './PatientHeader'
import PatientFooter from './PatientFooter'
import PatientHome from '../PatientHome'
import PatientSearch from '../PatientSearch'

function PatientLayout() {
	return (
		<>
			<PatientHeader />
			<Switch>
				<Route path="/patient-search" component={PatientSearch} />
				<Route path="/" component={PatientHome} />
			</Switch>
			<PatientFooter />
		</>
	)
}

export default PatientLayout
