import React from 'react'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Alert, Button, Container, Form } from 'react-bootstrap'
import styled from 'styled-components'
const FormButton = styled(Button)`
  width: 10rem;
  margin-right: 2rem;
`

const ContactUsFormValidation = yup.object({
  name: yup
    .string()
    .required('Name is required'),
  gender: yup.mixed()
    .oneOf(['male', 'female'])
    .required('Gender is required'),
  mobile: yup
    .string()
    .required('Mobile is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Email is invalid'),
  comment: yup
    .string()
    .required('comment is required'),
}).required()

function PatientContactUs() {
  //#region form state with react-hook-form
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty }
  } = useForm({
    defaultValues: {
      name: '',
      gender: '',
      mobile: '',
      email: '',
      comment: ''
    },
    resolver: yupResolver(ContactUsFormValidation)
  })
  const onSubmit = React.useCallback(async (values) => {
    console.log("🚀: Contact US Form Values ->", values)
  }, [])
  //#endregion
	return (
		<Container fluid className="w-50 h-45 my-2">
			<h2>Contact Us</h2>
      <p>We will be happy to receive your inquiries and suggestions.</p>
			<Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="name">
					<Form.Label>Name</Form.Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Form.Control type="text" placeholder="Name" {...field} />}
          />
          {errors?.name && <Alert variant="danger">{errors.name.message}</Alert>}
				</Form.Group>
        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) =>
              <div>
                <Form.Check
                  inline
                  id="male"
                  type="radio"
                  label="Male"
                  {...field}
                  value="male"
                />
                <Form.Check
                  inline
                  id="female"
                  type="radio"
                  label="Female"
                  {...field}
                  value="male"
                />
              </div>
            }
          />
          {errors?.gender && <Alert variant="danger">{errors.gender.message}</Alert>}
        </Form.Group>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Form.Control type="email" placeholder="Email" {...field} />}
          />
          {errors?.email && <Alert variant="danger">{errors.email.message}</Alert>}
				</Form.Group>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Mobile</Form.Label>
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => <Form.Control type="text" placeholder="Mobile" {...field} />}
          />
          {errors?.mobile && <Alert variant="danger">{errors.mobile.message}</Alert>}
				</Form.Group>
				<Form.Group className="mb-3" controlId="comment">
					<Form.Label>Comment</Form.Label>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => <Form.Control as="textarea" rows={3} placeholder="Comment" {...field} />}
          />
          {errors?.comment && <Alert variant="danger">{errors.comment.message}</Alert>}
				</Form.Group>
        <Form.Group className="mb-3" controlId="submit">
          <FormButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting || !isDirty}
          >
            Submit
          </FormButton>
          <FormButton
            type="reset"
            variant="danger"
            size="lg"
            disabled={isSubmitting || !isDirty}
            onClick={() => reset()}
          >
            Reset
          </FormButton>
        </Form.Group>
      </Form>
		</Container>
	)
}

export default PatientContactUs
