import React from 'react'

import { useGetAllSpecialtiesAndAllCitiesQuery } from '../../../__api/all'
import { City, Specialty } from '../../../__api/types'
import { SearchQueryState } from '../types'

import { Form, Row, Col, Button, Alert, Spinner } from 'react-bootstrap'
import styled from 'styled-components'
const SpinnerCol = styled(Col)`
	display: flex;
  justify-content: center;
  align-items: center;
	& div {
		width: 2rem;
		height: 2rem;
	}
`

function SearchBox({ setSearchQuery }: any) {
	const { isLoading, isError, error, data } = useGetAllSpecialtiesAndAllCitiesQuery()

  const [formState, setFormState] = React.useState<SearchQueryState>({
    city: '',
    specialty: '',
    name: ''
  })

  const handleChange = React.useCallback((e: any) => {
    setFormState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }, [])

  const handleSubmit = React.useCallback((e: any) => {
    e.preventDefault()
    setSearchQuery(formState)
  }, [formState, setSearchQuery])

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
        {(isLoading)
          ? <SpinnerCol>
              <Spinner animation="border" variant="primary" />
            </SpinnerCol>
          : (isError)
            ? <Col>
                <Alert variant='danger'>{(error as any).message}</Alert>
              </Col>
            : <>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Specialty</Form.Label>
                    <Form.Select
                      name="specialty"
                      value={formState.specialty}
                      onChange={handleChange}
                    >
                      <option value="">Choose Specialty</option>
                      {data?.specialties.map((specialty: Specialty) => (
                        <option key={specialty.id} value={specialty.name}>{specialty.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Select
                      name="city"
                      value={formState.city}
                      onChange={handleChange}
                    >
                      <option value="">Choose City</option>
                      {data?.cities.map((city: City) => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </>
        }
				<Col xs={6}>
					<Form.Group className="mb-3">
						<Form.Label>Doctor Or Institution Name</Form.Label>
						<Form.Control
              placeholder="Doctor Or Institution Name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
					</Form.Group>
				</Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Search</Form.Label>
            <Button
              type="submit"
              variant="outline-primary"
              className="w-100"
            >
              Search
            </Button>
          </Form.Group>
        </Col>
			</Row>
		</Form>
	)
}

export default SearchBox
