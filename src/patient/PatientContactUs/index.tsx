import React from 'react'
import { Container, Form } from 'react-bootstrap'

function PatientContactUs() {
	return (
		<Container fluid className="w-50 h-45 my-2">
			<h2>Contact Us</h2>
      <p>We will be happy to receive your inquiries and suggestions.</p>
			<Form>
        <Form.Group className="mb-3" controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
				</Form.Group>
        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              name="gender"
              label="Male"
              id="male"
            />
            <Form.Check
              inline
              type="radio"
              name="gender"
              label="Female"
              id="female"
            />
          </div>
        </Form.Group>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Mobile</Form.Label>
					<Form.Control type="text" placeholder="Mobile" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="comment">
					<Form.Label>Comment</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
			</Form>
		</Container>
	)
}

export default PatientContactUs
