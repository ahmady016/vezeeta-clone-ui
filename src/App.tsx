import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AdminLayout from './admin/AdminLayout'
import DoctorLayout from './doctor/DoctorLayout'
import PatientLayout from './patient/PatientLayout'

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/admin" component={AdminLayout} />
				<Route path="/doctor" component={DoctorLayout} />
				<Route path="/" component={PatientLayout} />
			</Switch>
		</div>
	)
}

export default App
