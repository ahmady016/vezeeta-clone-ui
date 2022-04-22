import React from 'react'

import { SearchResultProps } from '../types'
import { Doctor, Institution } from '../../../__api/types'

import { Alert, Card, Spinner, Image, Col, Row } from 'react-bootstrap'

import styled from 'styled-components'
const CardImage = styled(Image)`
  max-width: 100%;
  border-radius: 100%;
`

const DoctorCard: React.FC<Doctor> = ({
	id,
	name,
	title,
	gender,
	photoUrl,
	birthDate,
	city,
	specialty,
	visits,
	fees,
	workDays,
	workTime,
	institution,
}) => {
	return (
		<Card id={id} className="mb-3" border="primary">
      <Card.Header>
        <Card.Title>{title} / {name}</Card.Title>
        <Card.Subtitle>{specialty} - {gender}</Card.Subtitle>
      </Card.Header>
			<Card.Body>
        <Row>
          <Col md={2} xs={12}>
            <CardImage thumbnail src={photoUrl} />
          </Col>
          <Col md={10} xs={12}>
            <Card.Text><strong>City: </strong>{city}</Card.Text>
            <Card.Text><strong>BirthDate: </strong>{birthDate}</Card.Text>
            <Card.Text><strong>Visits: </strong>{visits}</Card.Text>
            <Card.Text><strong>Fees: </strong>{fees}</Card.Text>
            <Card.Text><strong>Work Days: </strong>{workDays?.join(', ')}</Card.Text>
            <Card.Text><strong>Work Time: </strong>{workTime?.from} - {workTime?.to}</Card.Text>
          </Col>
        </Row>
			</Card.Body>
			<Card.Footer className="text-muted">
        {institution?.name}
      </Card.Footer>
		</Card>
	)
}

const InstitutionCard: React.FC<Institution> = ({
	id,
	name,
	city,
	address,
	imageUrl,
	type,
	phone,
	visits,
}) => {
	return (
		<Card id={id} className="mb-3" border="primary">
			<Card.Header>
        <Card.Title>{name}</Card.Title>
				<Card.Subtitle>{type}</Card.Subtitle>
      </Card.Header>
			<Card.Body>
        <Row>
          <Col md={2} xs={12}>
            <CardImage thumbnail src={imageUrl} />
          </Col>
          <Col md={10} xs={12}>
            <Card.Text><strong>Phone: </strong>{phone}</Card.Text>
            <Card.Text><strong>Address: </strong>{address}</Card.Text>
            <Card.Text><strong>City: </strong>{city}</Card.Text>
            <Card.Text><strong>Visits: </strong>{visits}</Card.Text>
          </Col>
        </Row>
			</Card.Body>
			<Card.Footer className="text-muted">{name}</Card.Footer>
		</Card>
	)
}

const SearchResult: React.FC<SearchResultProps> = ({
	isLoading,
	isError,
	error,
	results,
}) => {
	if (isLoading)
    return <Spinner animation="border" variant="primary" />

  if (isError)
    return <Alert variant="danger">{(error as any).message}</Alert>

  if (!results || (!results.doctorsLength && !results.institutionsLength))
		return <div>No results Found!</div>

	return (
		<>
			{results.doctorsLength > 0 &&
				results.doctors.map((doctor: Doctor) => (
					<DoctorCard key={doctor.id} {...doctor} />
				))}
			{results.institutionsLength > 0 &&
				results.institutions.map((institution: Institution) => (
					<InstitutionCard key={institution.id} {...institution} />
				))}
		</>
	)
}

export default SearchResult
