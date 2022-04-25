import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import PatientHeader from './PatientHeader'
import PatientFooter from './PatientFooter'
import PatientHome from '../PatientHome'
import PatientSearch from '../PatientSearch'
import PatientContactUs from '../PatientContactUs'

function PatientLayout() {
	return (
		<>
			<PatientHeader />
			<Switch>
				<Route path="/search-for-doctors" component={PatientSearch} />
				<Route path="/contact-us" component={PatientContactUs} />
				<Route path="/" component={PatientHome} />
				<Redirect to="/" />
			</Switch>
			<PatientFooter />
		</>
	)
}

export default PatientLayout
