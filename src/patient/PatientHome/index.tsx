import React from 'react'

import { useGetTopSpecialtiesAndTopCitiesQuery } from '../../__api/all'

import HeroSlider from './HeroSlider'
import TopItems from './TopItems'
import Services from './Services'

import { Alert, Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const SpinnerDiv = styled.div`
	margin: 4rem 0;
	text-align: center;
	& div {
		width: 4rem;
		height: 4rem;
	}
`

function PatientHome() {
	const { isLoading, isError, error, data } = useGetTopSpecialtiesAndTopCitiesQuery()
	return (
		<>
			<HeroSlider />
			{(isLoading)
				? <SpinnerDiv>
						<Spinner animation="border" variant="primary" />
					</SpinnerDiv>
				: (isError)
					? <Alert variant='danger'>{(error as any).message}</Alert>
					: <>
							<TopItems title="Top Specialties" items={data?.specialties} />
							<TopItems title="Top Cities" items={data?.cities} />
						</>
			}
			<Services />
		</>
	)
}

export default PatientHome
